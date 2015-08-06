import Ember from 'ember';
import InputBased from '../mixins/sl-input-based';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-input';

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
        'sl-input'
    ],

    /** @type {Object} */
    layout,

    /** @type {String} */
    dataTrigger: 'focus',

    // -------------------------------------------------------------------------
    // Actions

    /** @type {Object} */
    actions: {

        /**
         * Sends the 'blur' bound action when the input loses focus
         *
         * @function actions:blur
         * @returns {undefined}
         */
        blur() {
            this.sendAction( 'blur' );
        }
    },

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Enable the click to edit styling
     *
     * @type {Boolean}
     */
    clickToEdit: false,

    /**
     * The input field's id attribute
     * Used to expose this value externally for use in this component
     *
     * @type {?String}
     */
    inputElementId: null,

    /**
     * Whether the typeahead.js functionality has been setup
     *
     * @type {Boolean}
     */
    isTypeaheadSetup: false,

    /**
     * Lookup path for the suggestion items' name
     *
     * @type {String}
     */
    suggestionNamePath: 'name',

    /**
     * Type attribute for the containing div
     *
     * @type {String}
     */
    type: 'text',

    /**
     * Value of the input
     *
     * @type {?String}
     */
    value: null,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Captures and sets the input field's id attribute.
     *
     * This is used to expose this value externally for use when composing this
     * component into others.
     *
     * @function
     * @returns {undefined}
     */
    setInputElementId: Ember.on(
        'didInsertElement',
        function() {
            this.set(
                'inputElementId',
                this.$( 'input.form-control' ).prop( 'id' )
            );
        }
    ),

    /**
     * Sets up the input event listeners exposed to the component's
     * parent controller
     *
     * @function
     * @returns {undefined}
     */
    setupInputEvents: Ember.on(
        'didInsertElement',
        function() {
            if ( this.get( 'blur' ) ) {
                this.getInput().on( 'blur', () => {
                    this.sendAction( 'blur' );
                });
            }
        }
    ),

    /**
     * Sets up the typeahead behavior when `suggestions` are supplied
     *
     * @function
     * @returns {undefined}
     */
    setupTypeahead: Ember.observer(
        'suggestions',
        Ember.on(
            'didInsertElement',
            function() {
                if (
                    this.get( 'suggestions' ) &&
                    !this.get( 'isTypeaheadSetup' )
                ) {
                    const namePath = this.get( 'suggestionNamePath' );

                    const typeahead = this.getInput().typeahead({
                        highlight: true,
                        hint: true
                    }, {
                        displayKey: item => {
                            if ( 'object' === Ember.typeOf( item ) ) {
                                return Ember.get( item, namePath );
                            }

                            return item;
                        },

                        source: ( query, callback ) => {
                            const pattern = new RegExp( query, 'i' );

                            callback( this.get( 'suggestions' )
                                .filter( ( suggestion ) => {
                                    let searchCandidate;

                                    if (
                                        'object' === Ember.typeOf( suggestion )
                                    ) {
                                        searchCandidate = Ember.get(
                                            suggestion,
                                            namePath
                                        );
                                    } else {
                                        searchCandidate = suggestion;
                                    }

                                    return searchCandidate ?
                                        searchCandidate.match( pattern ) :
                                        false;
                                })
                            );
                        }
                    });

                    const selectItem = ( event, item ) => {
                        const value = 'object' === Ember.typeOf( item ) ?
                            Ember.get( item, namePath ) : item;

                        this.set( 'value', value );
                    };

                    typeahead.on( 'typeahead:autocompleted', selectItem );
                    typeahead.on( 'typeahead:selected', selectItem );

                    this.set( 'isTypeaheadSetup', true );
                }
            }
        )
    ),

    /**
     * Remove events
     *
     * @function
     * @returns {undefined}
     */
    unregisterEvents: Ember.on(
        'willClearRender',
        function() {
            this.getInput().off();
        }
    ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Get a reference to the internal input element
     *
     * @function
     * @returns {jQuery.Object}
     */
    getInput() {
        return this.$( 'input' );
    },

    /**
     * Class string for the internal input element
     *
     * @function
     * @returns {String}
     */
    inputClass: Ember.computed(
        function() {
            const classes = [ 'form-control' ];

            if ( this.get( 'clickToEdit' ) ) {
                classes.push( 'click-to-edit' );
            }

            if ( this.get( 'suggestions' ) ) {
                classes.push( 'typeahead' );
            }

            return classes.join( ' ' );
        }
    )

});
