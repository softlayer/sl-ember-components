import Ember from 'ember';
import InputBased from '../mixins/sl-input-based';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';

/**
 * @module components
 * @class sl-select
 */
export default Ember.Component.extend( InputBased, TooltipEnabled, {

    /**
     * Display a clear button to clear the input's selection
     * @property {boolean} allowClear
     * @default false
     */
    allowClear: false,


    /**
     * Class names for the select element
     * @property {array} classNames
     */
    classNames: [ 'form-group', 'sl-select' ],

    /**
     * Whether to show the search filter input or not
     * @property {boolean} disableSearch
     * @default false
     */
    disableSearch: false,

    /**
     * The internal input element, used for Select2's bindings
     * @property {element} input
     * @default null
     */
    input: null,

    /**
     * ID of the &lt;input&gt; element
     * @property {string} selectId
     */
    inputId: function () {
        return this.get( 'elementId' ) + 'Input';
    }.property( 'elementId' ),

    /**
     * The maximum number of selections allowed when `multiple` is enabled
     * @property {number} maximumSelectionSize
     * @default null
     */
    maximumSelectionSize: null,

    /**
     * Whether to allow multiple selections
     * @property {boolean} multiple
     * @default false
     */
    multiple: false,

    /**
     * The path key for each option object's description
     * @property {string} optionDescriptionPath
     * @default "description"
     */
    optionDescriptionPath: 'description',

    /**
     * The path key for each option object's label
     * @property {string} optionLabelPath
     * @default "label"
     */
    optionLabelPath: 'label',

    /**
     * The path key for each option object's value
     * @property {string} optionValuePath
     * @default "value"
     */
    optionValuePath: 'value',

    selectionChanged: function ( data ) {
        var multiple = this.get( 'multiple' ),
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
    },

    /**
     * Set up select2 initialization after the element is inserted in the DOM
     * @method setupSelect2
     */
    setupSelect2: function () {
        var get  = Ember.get,
            self = this,
            input;

        input = this.$( '#' + this.get( 'inputId' )).select2({
            allowClear: this.get( 'allowClear' ),
            maximumSelectionSize: this.get( 'maximumSelectionSize' ),
            multiple: this.get( 'multiple' ),
            placeholder: this.get( 'placeholder' ),

            formatResult: function ( item ) {
                if ( !item ) { return; }

                if ( !( item instanceof Object )) {
                    return item;
                }

                var description = get( item, self.get( 'optionDescriptionPath' )),
                    output = get( item, self.get( 'optionLabelPath' ));

                if ( description ) {
                    output +=  ' <span class="text-muted">' + description + '</span>';
                }

                return output;
            },

            formatSelection: function ( item ) {
                if ( !item ) { return; }

                if ( item instanceof Object ) {
                    return get( item, self.get( 'optionLabelPath' ));
                }

                return item;
            },

            id: function ( item ) {
                if ( item instanceof Object ) {
                    return get( item, self.get( 'optionValuePath' ));
                }

                return item;
            },

            initSelection: function ( element, callback ) {
                var value = element.val();

                if ( !value || !value.length ) {
                    return callback( [] );
                }

                var content         = self.get( 'content' ),
                    contentLength   = content.length,
                    filteredContent = [],
                    multiple        = self.get( 'multiple' ),
                    optionValuePath = self.get( 'optionValuePath' ),
                    values          = value.split( ',' ),
                    unmatchedValues = values.length,
                    item, matchIndex, text;

                for ( var i = 0; i < contentLength; i++ ) {
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
                    self.input.select2( 'readonly', false );
                } else {
                    self.input.select2( 'readonly', true );

                    var warning = 'sl-select:select2#initSelection was not able to map each "';
                    warning = warning.concat( optionValuePath );
                    warning = warning.concat( '" to an object from "content". The remaining keys are: ' );
                    warning = warning.concat( values );
                    warning = warning.concat( '. The input will be disabled until a) the desired objects are added ' );
                    warning = warning.concat( 'to the "content" array, or b) the "value" is changed.' );

                    Ember.warn( warning, !values.length );
                }

                return callback( multiple ? filteredContent : filteredContent.get( 'firstObject' ));
            },

            minimumResultsForSearch: this.get( 'disableSearch' ) ? -1 : 0,

            query: function ( query ) {
                var content = self.get( 'content' ) || [],
                    optionLabelPath = self.get( 'optionLabelPath' ),
                    select2 = this;

                query.callback({
                    results: content.reduce( function ( results, item ) {
                        var text = item instanceof Object ? get( item, optionLabelPath ) : item;

                        if ( text && select2.matcher( query.term, text.toString() )) {
                            results.push( item );
                        }

                        return results;
                    }, [] )
                });
            }
        });

        input.on( 'change', function () {
            Ember.run( function () {
                self.set( 'value', input.select2( 'val' ));
            });
        });

        if ( !this.get( 'multiple' )) {
            this.$( 'input.select2-input' ).attr( 'placeholder', 'Search...' );
        }

        this.input = input;
    }.on( 'didInsertElement' ),

    /**
     * Set data bound value based on changed value
     * @method valueChanged
     */
    valueChanged: function () {
        var value = this.get( 'value' );

        if ( this.get( 'optionValuePath' )) {
            this.input.select2( 'val', value );
        } else {
            this.input.select2( 'data', value );
        }
    }.observes( 'content.@each', 'value' ),

    /**
     * Teardown to prevent memory leaks
     * @method willDestroyElement
     */
    willDestroyElement: function () {
        this.input.off( 'change' ).select2( 'destroy' );
    }
});
