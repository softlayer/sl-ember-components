import Ember from 'ember';
import InputBased from '../mixins/sl-input-based';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-select';

/**
 * @module
 * @augments ember/Component
 * @augments module:mixins/sl-input-based
 * @augments module:mixins/sl-tooltip-based
 */
export default Ember.Component.extend( InputBased, TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNames: [
        'form-group',
        'sl-select'
    ],

    /** @type {Object} */
    layout,

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether to show the search filter input or not
     *
     * @type {Boolean}
     */
    disableSearch: false,

    /**
     * The internal input element, used for Select2's bindings
     *
     * @type {?Object}
     */
    input: null,

    /**
     * The maximum number of selections allowed when `multiple` is enabled
     *
     * @type {?Number}
     */
    maximumSelectionSize: null,

    /**
     * Whether to allow multiple selections
     *
     * @type {Boolean}
     */
    multiple: false,

    /**
     * The path key for each option object's description
     *
     * @type {String}
     */
    optionDescriptionPath: 'description',

    /**
     * The path key for each option object's label
     *
     * @type {String}
     */
    optionLabelPath: 'label',

    /**
     * The path key for each option object's value
     *
     * @type {String}
     */
    optionValuePath: 'value',

    /**
     * The current value of the select input
     *
     * @type {?String}
     */
    value: null,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Teardown the select2 to prevent memory leaks
     *
     * @function
     * @returns {undefined}
     */
    destroySelect2: Ember.on(
        'willClearRender',
        function() {
            this.get( 'input' ).off( 'change' ).select2( 'destroy' );
        }
    ),

    /**
     * Validate required parameters
     *
     * @function
     * @throws {ember.assert} Thrown when `content` is not an array
     * @returns {undefined}
     */
    initialize: Ember.on(
        'init',
        function() {
            Ember.assert(
                '"content" is a required property of type array',
                'array' === Ember.typeOf( this.get( 'content' ) )
            );
        }
    ),

    /**
     * Set up select2 initialization after the element is inserted in the DOM
     *
     * @function
     * @returns {undefined}
     */
    setupSelect2: Ember.on(
        'didInsertElement',
        function() {
            const input = this.$( 'input' ).select2( this.get( 'options' ) );

            input.on( 'change', () => {
                this.set( 'value', input.select2( 'val' ) );
            });

            const originalBodyOverflow = document.body.style.overflow || 'auto';

            input.on( 'select2-open', () => {
                document.body.style.overflow = 'hidden';
            });

            input.on( 'select2-close', () => {
                document.body.style.overflow = originalBodyOverflow;
            });

            this.$( 'input.select2-input' ).attr(
                'placeholder',
                'Search...'
            );

            this.set( 'input', input );
        }
    ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Select2 options
     *
     * @function
     * @returns {Object}
     */
    options: Ember.computed(
        function() {
            return {
                maximumSelectionSize: this.get( 'maximumSelectionSize' ),
                multiple: this.get( 'multiple' ),
                placeholder: this.get( 'placeholder' ),
                formatResult: this.get( 'select2FormatResult' ),
                formatSelection: this.get( 'select2FormatSelection' ),
                id: this.get( 'select2Id' ),
                initSelection: this.get( 'select2InitSelection' ),
                minimumResultsForSearch: this.get( 'disableSearch' ) ? -1 : 0,
                query: this.get( 'select2Query' )
            };
        }
    ),

    /**
     * Select2 fomartResult function
     *
     * @function
     * @returns {Function}
     */
    select2FormatResult: Ember.computed(
        function() {
            return ( item ) => {
                if ( !item ) {
                    return null;
                }

                if ( Ember.typeOf( item ) !== 'object' && Ember.typeOf( item ) !== 'instance' ) {
                    return item;
                }

                const description = Ember.get(
                    item,
                    this.get( 'optionDescriptionPath' )
                );

                let output = Ember.get(
                    item,
                    this.get( 'optionLabelPath' )
                );

                if ( description ) {
                    output += `<span class="text-muted">${description}</span>`;
                }

                return output;
            };
        }
    ),

    /**
     * Select2 fomartSelection function
     *
     * @function
     * @returns {Function}
     */
    select2FormatSelection: Ember.computed(
        function() {
            return ( item ) => {
                if ( !item ) {
                    return null;
                }

                const typeOfItem = Ember.typeOf( item );

                if (
                    'object' === typeOfItem ||
                    'instance' === typeOfItem
                ) {
                    return Ember.get( item, this.get( 'optionLabelPath' ) );
                }

                return item;
            };
        }
    ),

    /**
     * Select2 id function
     *
     * @function
     * @returns {Function}
     */
    select2Id: Ember.computed(
        function() {
            return ( item ) => {
                let value = item;
                const typeOfItem = Ember.typeOf( item );

                if (
                    'object' === typeOfItem ||
                    'instance' === typeOfItem
                ) {
                    const optionValuePath = this.get( 'optionValuePath' );
                    value = Ember.get( item, optionValuePath );
                }

                return value;
            };
        }
    ),

    /**
     * Select2 initSelection function
     *
     * @function
     * @returns {Function}
     */
    select2InitSelection: Ember.computed(
        function() {
            return ( element, callback ) => {
                const value = element.val();

                if ( !value || !value.length ) {
                    return callback( [] );
                }

                const content = this.get( 'content' );
                const contentLength = content.length;
                const filteredContent = [];
                const multiple = this.get( 'multiple' );
                const optionValuePath = this.get( 'optionValuePath' );
                const values = value.split( ',' );
                let unmatchedValues = values.length;

                for ( let i = 0; i < contentLength; i++ ) {
                    const item = content[i];
                    const typeOfItem = Ember.typeOf( item );
                    const text = 'object' === typeOfItem ||
                        'instance' === typeOfItem ?
                        Ember.get( item, optionValuePath ) :
                        item;

                    const matchIndex = values.indexOf( text.toString() );

                    if ( matchIndex !== -1 ) {
                        filteredContent[ matchIndex ] = item;
                        if ( 0 === --unmatchedValues ) {
                            break;
                        }
                    }
                }

                if ( 0 === unmatchedValues ) {
                    this.input.select2( 'readonly', false );
                } else {
                    this.input.select2( 'readonly', true );

                    const warning = 'sl-select:select2#initSelection was' +
                        ' not able to map each "' + optionValuePath + '"' +
                        ' to an object from "content". The remaining keys' +
                        ' are: ' + values + '. The input will be disabled' +
                        ' until a) the desired objects are added to the' +
                        ' "content" array, or b) the "value" is changed.';

                    Ember.warn( warning, !values.length );
                }

                return callback(
                    multiple ?
                    filteredContent :
                    Ember.get( filteredContent, 'firstObject' )
                );
            };
        }
    ),

    /**
     * Select2 query function
     *
     * @function
     * @returns {Function}
     */
    select2Query: Ember.computed(
        function() {
            return ( query ) => {
                const content = this.get( 'content' ) || [];
                const optionLabelPath = this.get( 'optionLabelPath' );
                const select2 = this.get( 'input' ).data( 'select2' ).opts;

                query.callback({
                    results: content.reduce( ( results, item ) => {
                        const typeOfItem = Ember.typeOf( item );
                        const text = 'object' === typeOfItem ||
                            'instance' === typeOfItem ?
                            Ember.get( item, optionLabelPath ) :
                            item;

                        if (
                            text &&
                            select2.matcher( query.term, text.toString() )
                        ) {
                            results.push( item );
                        }

                        return results;
                    }, [] )
                });
            }
        }
    )
});
