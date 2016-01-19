import Ember from 'ember';
import ComponentClassPrefix from '../mixins/sl-component-class-prefix';
import ComponentInputId from '../mixins/sl-component-input-id';
import InputBased from '../mixins/sl-input-based';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import Namespace from '../mixins/sl-namespace';
import layout from '../templates/components/sl-input';

/**
 * @module
 * @augments ember/Component
 * @augments module:mixins/sl-component-input-id
 * @augments module:mixins/sl-input-based
 * @augments module:mixins/sl-namespace
 * @augments module:mixins/sl-tooltip-based
 */
export default Ember.Component.extend( ComponentClassPrefix, ComponentInputId, InputBased, Namespace, TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNames: [
        'form-group'
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

    /**
     * didInsertElement event hook
     *
     * @returns {undefined}
     */
    didInsertElement() {
        this._super( ...arguments );
        this.setupInputEvents();
        this.setupTypeahead();
    },

    /**
     * willClearRender event hook
     *
     * @returns {undefined}
     */
    willClearRender() {
        this._super( ...arguments );
        this.unregisterEvents();
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Enable the click to edit styling
     *
     * @type {Boolean}
     */
    clickToEdit: false,

    /**
     * Component class that will be prefixed
     * with base component class
     *
     * @type {String}
     */
    componentClass: 'input',

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
     * Observe `suggestions` and reinitialize typeahead
     *
     * @private
     * @function
     * @returns {undefined}
     */
    setupTypeaheadObserver: Ember.observer(
        'suggestions',
        function() {
            this.setupTypeahead();
        }
    ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Sets up the typeahead behavior are supplied
     *
     * @private
     * @returns {undefined}
     */
    setupTypeahead() {
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

            typeahead.on( 'typeahead:autocomplete', selectItem );
            typeahead.on( 'typeahead:select', selectItem );

            this.set( 'isTypeaheadSetup', true );
        }
    },

    /**
     * Sets up the input event listeners exposed to the component's
     * parent controller
     *
     * @private
     * @returns {undefined}
     */
    setupInputEvents() {
        if ( this.get( 'blur' ) ) {
            this.getInput().on( this.namespaceEvent( 'blur' ), () => {
                this.sendAction( 'blur' );
            });
        }
    },

    /**
     * Remove events
     *
     * @private
     * @returns {undefined}
     */
    unregisterEvents() {
        this.getInput().off( this.namespaceEvent( 'blur' ) );
    },

    /**
     * Get a reference to the internal input element
     *
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
