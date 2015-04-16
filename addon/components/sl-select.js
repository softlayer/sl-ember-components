import Ember from 'ember';
import InputBased from '../mixins/sl-input-based';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-select';

/**
 * @module components
 * @class  sl-select
 */
export default Ember.Component.extend( InputBased, TooltipEnabled, { layout,

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * Class names for the select element
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'form-group', 'sl-select' ],

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether to show the search filter input or not
     *
     * @property {boolean} disableSearch
     * @default  false
     */
    disableSearch: false,

    /**
     * The internal input element, used for Select2's bindings
     *
     * @private
     * @property {object} input
     * @default  null
     */
    input: null,

    /**
     * The maximum number of selections allowed when `multiple` is enabled
     *
     * @property {number} maximumSelectionSize
     * @default  null
     */
    maximumSelectionSize: null,

    /**
     * Whether to allow multiple selections
     *
     * @property {boolean} multiple
     * @default  false
     */
    multiple: false,

    /**
     * The path key for each option object's description
     *
     * @property {Ember.tring} optionDescriptionPath
     * @default  "description"
     */
    optionDescriptionPath: 'description',

    /**
     * The path key for each option object's label
     *
     * @property {Ember.String} optionLabelPath
     * @default  "label"
     */
    optionLabelPath: 'label',

    /**
     * The path key for each option object's value
     *
     * @property {Ember.String} optionValuePath
     * @default  "value"
     */
    optionValuePath: 'value',

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Teardown the select2 to prevent memory leaks
     *
     * @function destroySelect2
     * @observes "willClearRender" event
     * @returns  {void}
     */
    destroySelect2: Ember.on( 'willClearRender', function() {
        this.input.off( 'change' ).select2( 'destroy' );
    }),

    /**
     * Set up select2 initialization after the element is inserted in the DOM
     *
     * @function setupSelect2
     * @observes "didInsertElement" event
     * @returns  {void}
     */
    setupSelect2: Ember.on( 'didInsertElement', function() {
        var get  = Ember.get,
            self = this,
            input;

        input = this.$( 'input' ).select2({
            maximumSelectionSize : this.get( 'maximumSelectionSize' ),
            multiple             : this.get( 'multiple' ),
            placeholder          : this.get( 'placeholder' ),

            formatResult: ( item ) => {
                if ( !item ) { return; }

                if ( !( item instanceof Object ) ) {
                    return item;
                }

                var description = get( item, this.get( 'optionDescriptionPath' ) ),
                    output      = get( item, this.get( 'optionLabelPath' ) );

                if ( description ) {
                    output +=  ' <span class="text-muted">' + description + '</span>';
                }

                return output;
            },

            formatSelection: item => {
                if ( !item ) { return; }

                if ( item instanceof Object ) {
                    return get( item, this.get( 'optionLabelPath' ) );
                }

                return item;
            },

            id: item => {
                if ( item instanceof Object ) {
                    return get( item, this.get( 'optionValuePath' ) );
                }

                return item;
            },

            initSelection: ( element, callback ) => {
                var value = element.val();

                if ( !value || !value.length ) {
                    return callback( [] );
                }

                var content         = this.get( 'content' ),
                    contentLength   = content.length,
                    filteredContent = [],
                    multiple        = this.get( 'multiple' ),
                    optionValuePath = this.get( 'optionValuePath' ),
                    values          = value.split( ',' ),
                    unmatchedValues = values.length,
                    item,
                    matchIndex,
                    text;

                for ( let i = 0; i < contentLength; i++ ) {
                    item = content[i];
                    text = item instanceof Object ? get( item, optionValuePath ) : item;
                    matchIndex = values.indexOf( text.toString() );

                    if ( matchIndex !== -1 ) {
                        filteredContent[ matchIndex ] = item;
                        if ( --unmatchedValues === 0 ) {
                            break;
                        }
                    }
                }

                if ( unmatchedValues === 0 ) {
                    this.input.select2( 'readonly', false );
                } else {
                    this.input.select2( 'readonly', true );

                    var warning = 'sl-select:select2#initSelection was not able to map each "';
                    warning = warning.concat( optionValuePath );
                    warning = warning.concat( '" to an object from "content". The remaining keys are: ' );
                    warning = warning.concat( values );
                    warning = warning.concat( '. The input will be disabled until a) the desired objects are added ' );
                    warning = warning.concat( 'to the "content" array, or b) the "value" is changed.' );

                    Ember.warn( warning, !values.length );
                }

                return callback( multiple ? filteredContent : Ember.get( filteredContent, 'firstObject' ) );
            },

            minimumResultsForSearch: this.get( 'disableSearch' ) ? -1 : 0,

            query: function( query ) {
                var content         = self.get( 'content' ) || [],
                    optionLabelPath = self.get( 'optionLabelPath' ),
                    select2         = this;

                query.callback({
                    results: content.reduce( function( results, item ) {
                        var text = item instanceof Object ? get( item, optionLabelPath ) : item;

                        if ( text && select2.matcher( query.term, text.toString() ) ) {
                            results.push( item );
                        }

                        return results;
                    }, [] )
                });
            }
        });

        input.on( 'change', () => {
            this.set( 'value', input.select2( 'val' ) );
        });

        var originalBodyOverflow = document.body.style.overflow || 'auto';

        input.on( 'select2-open', () => {
            document.body.style.overflow = 'hidden';
        });

        input.on( 'select2-close', () => {
            document.body.style.overflow = originalBodyOverflow;
        });

        if ( !this.get( 'multiple' ) ) {
            this.$( 'input.select2-input' ).attr( 'placeholder', 'Search...' );
        }

        this.input = input;

        if ( this.get( 'value' ) ) {
            this.valueChanged();
        }
    }),

    /**
     * Set data bound value based on changed value
     *
     * @function valueChanged
     * @observes content.@each, value
     * @returns  {void}
     */
    valueChanged: Ember.observer( 'content.@each', 'value', function() {
        var value = this.get( 'value' );

        if ( this.get( 'optionValuePath' ) ) {
            this.input.select2( 'val', value );
        } else {
            this.input.select2( 'data', value );
        }
    }),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Update the bound value when the Select2's selection has changed
     *
     * @function selectionChanged
     * @param    {mixed} data - Select2 data
     */
    selectionChanged( data ) {
        var multiple        = this.get( 'multiple' ),
            optionValuePath = this.get( 'optionValuePath' ),
            value;

        if ( optionValuePath ) {
            if ( multiple ) {
                value = data.getEach( optionValuePath );
            } else {
                value = Ember.get( data, optionValuePath );
            }
        } else {
            value = data;
        }
    }

});
