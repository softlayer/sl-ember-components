import Ember from 'ember';
import InputBased from '../mixins/sl-input-based';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import layout from '../templates/components/sl-input';

/**
 * @class sl-input
 * @memberof components
 */
var SlInput = {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    classNames: [ 'form-group', 'sl-input' ],

    layout,

    // -------------------------------------------------------------------------
    // Actions

    actions: {

        /**
         * Sends the 'blur' bound action when the input loses focus
         *
         * @function actions.blur
         * @returns {undefined}
         */
        blur() {
            this.sendAction( 'blur' );
        },

        /**
         * Sends the primary bound action when `enter` is pressed
         *
         * @function actions.enter
         * @returns {undefined}
         */
        enter() {
            this.sendAction();
        }
    },

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Enable the click to edit styling
     *
     * @property {Boolean} clickToEdit
     * @default false
     */
    clickToEdit: false,

    /**
     * Whether the typeahead.js functionality has been setup
     *
     * @property {Boolean} isTypeaheadSetup
     * @default false
     */
    isTypeaheadSetup: false,

    /**
     * Lookup path for the suggestion items' name
     *
     * @property {String} suggestionLabelPath
     * @default "name"
     */
    suggestionNamePath: 'name',

    /**
     * Type attribute for the containing div
     *
     * @property {String} type
     * @default "text"
     */
    type: 'text',

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Sets up the input event listeners exposed to the component's
     * parent controller
     *
     * @function setupInputEvents
     * @listens didInsertElement
     * @returns {undefined}
     */
    setupInputEvents: Ember.on( 'didInsertElement', function() {
        if ( this.get( 'blur' ) ) {
            this.getInput().on( 'blur', () => {
                this.sendAction( 'blur' );
            });
        }
    }),

    /**
     * Sets up the typeahead behavior when `suggestions` are supplied
     *
     * @function setupTypeahead
     * @listens didInsertElement
     * @observes suggestions
     * @returns {undefined}
     */
    setupTypeahead: Ember.computed( 'suggestions',
        Ember.on( 'didInsertElement', function() {
            if ( this.get( 'suggestions' ) && !this.get( 'isTypeaheadSetup' ) ) {
                var namePath = this.get( 'suggestionNamePath' ),
                    typeahead;

                typeahead = this.getInput().typeahead({
                    highlight : true,
                    hint      : true
                }, {
                    displayKey: item => {
                        if ( item instanceof Object ) {
                            return Ember.get( item, namePath );
                        }

                        return item;
                    },

                    source: ( query, callback ) => {
                        var pattern = new RegExp( query, 'i' );

                        callback( this.get( 'suggestions' ).filter( suggestion => {
                            var searchCandidate;

                            if ( suggestion instanceof Object ) {
                                searchCandidate = Ember.get( suggestion, namePath );
                            } else {
                                searchCandidate = suggestion;
                            }

                            return searchCandidate ? searchCandidate.match( pattern ) : false;
                        }));
                    }
                });

                /* jshint ignore:start */
                var selectItem = ( event, item ) => {
                    var value = item instanceof Object ? Ember.get( item, namePath ) : item;

                    this.set( 'value', value );
                };

                typeahead.on( 'typeahead:autocompleted', selectItem );
                typeahead.on( 'typeahead:selected', selectItem );
                /* jshint ignore:end */

                this.set( 'isTypeaheadSetup', true );
            }
        })
    ),

    /**
     * Remove events
     *
     * @function unregisterEvents
     * @listens willClearRender
     * @returns {undefined}
     */
    unregisterEvents: Ember.on( 'willClearRender', function() {
        this.getInput().off();
    }),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Get a reference to the internal input element
     *
     * @function getInput
     * @returns {Object}
     */
    getInput() {
        return this.$( 'input' );
    },

    /**
     * Class string for the internal input element
     *
     * @function inputClass
     * @returns {String}
     */
    inputClass: Ember.computed( function() {
        var classes = [ 'form-control' ];

        if ( this.get( 'clickToEdit' ) ) {
            classes.push( 'click-to-edit' );
        }

        if ( this.get( 'suggestions' ) ) {
            classes.push( 'typeahead' );
        }

        return classes.join( ' ' );
    })
};

export default Ember.Component.extend( InputBased, TooltipEnabled, SlInput );
