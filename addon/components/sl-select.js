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
     * @listens willClearRender
     * @returns {undefined}
     */
    destroySelect2: Ember.on(
        'willClearRender',
        function() {
            this.input.off( 'change' ).select2( 'destroy' );
        }
    ),

    /**
     * Set up select2 initialization after the element is inserted in the DOM
     *
     * @function
     * @listens didInsertElement
     * @returns {undefined}
     */
    setupSelect2: Ember.on(
        'didInsertElement',
        function() {
            var get = Ember.get;
            var self = this;

            var input = this.$( 'input' ).select2({
                maximumSelectionSize: this.get( 'maximumSelectionSize' ),
                multiple: this.get( 'multiple' ),
                placeholder: this.get( 'placeholder' ),

                formatResult: ( item ) => {
                    if ( !item ) {
                        return;
                    }

                    if ( !( item instanceof Object ) ) {
                        return item;
                    }

                    let description = get(
                        item,
                        this.get( 'optionDescriptionPath' )
                    );

                    let output = get(
                        item,
                        this.get( 'optionLabelPath' )
                    );

                    if ( description ) {
                        output += ' <span class="text-muted">' +
                            description + '</span>';
                    }

                    return output;
                },

                formatSelection: ( item ) => {
                    if ( !item ) {
                        return;
                    }

                    if ( item instanceof Object ) {
                        return get( item, this.get( 'optionLabelPath' ) );
                    }

                    return item;
                },

                id: ( item ) => {
                    var value = item;

                    if ( item instanceof Object ) {
                        value = get( item, this.get( 'optionValuePath' ) );
                    }

                    return value;
                },

                initSelection: ( element, callback ) => {
                    var value = element.val();

                    if ( !value || !value.length ) {
                        return callback( [] );
                    }

                    let content = this.get( 'content' );
                    let contentLength = content.length;
                    let filteredContent = [];
                    let multiple = this.get( 'multiple' );
                    let optionValuePath = this.get( 'optionValuePath' );
                    let values = value.split( ',' );
                    let unmatchedValues = values.length;

                    for ( let i = 0; i < contentLength; i++ ) {
                        let item = content[i];
                        let text = item instanceof Object ?
                            get( item, optionValuePath ) : item;

                        let matchIndex = values.indexOf( text.toString() );

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

                        let warning = 'sl-select:select2#initSelection was not' +
                            ' able to map each "' + optionValuePath + '"' +
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
                },

                minimumResultsForSearch: this.get( 'disableSearch' ) ? -1 : 0,

                query: function( query ) {
                    var content = self.get( 'content' ) || [];
                    var optionLabelPath = self.get( 'optionLabelPath' );
                    var select2 = this;

                    query.callback({
                        results: content.reduce( ( results, item ) => {
                            var text = item instanceof Object ?
                                get( item, optionLabelPath ) : item;

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
            });

            input.on( 'change', () => {
                this.set( 'value', input.select2( 'val' ) );
            });

            let originalBodyOverflow = document.body.style.overflow || 'auto';

            input.on( 'select2-open', () => {
                document.body.style.overflow = 'hidden';
            });

            input.on( 'select2-close', () => {
                document.body.style.overflow = originalBodyOverflow;
            });

            if ( !this.get( 'multiple' ) ) {
                this.$( 'input.select2-input' ).attr(
                    'placeholder',
                    'Search...'
                );
            }

            this.input = input;
        }
    )

    // -------------------------------------------------------------------------
    // Methods

});
