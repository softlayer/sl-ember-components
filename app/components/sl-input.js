import Ember from 'ember';
import InputBased from '../mixins/sl-input-based';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';

/**
 * @module components
 * @class sl-input
 */
export default Ember.Component.extend( InputBased, TooltipEnabled, {

    /**
     * Object containing action functions
     * @property {object} actions
     */
    actions: {

        /**
         * Sends the 'blur' bound action when the input loses focus
         * @method actions.blurred
         */
        blur: function () {
            this.sendAction( 'blur' );
        },

        /**
         * Sends the primary bound action when `enter` is pressed
         * @method actions.enter
         */
        enter: function () {
            this.sendAction();
        }
    },

    /**
     * Attribute bindings for the containing div
     * @property {array} attributeBindings
     */
    attributeBindings: [ 'class' ],

    /**
     * Class names for the containing div
     * @property {array} classNames
     */
    classNames: [ 'form-group', 'sl-input' ],

    /**
     * Enable the click to edit styling
     * @property {boolean} clickToEdit
     * @default false
     */
    clickToEdit: false,

    /**
     * Get a reference to the internal input element
     * @method getInput
     */
    getInput: function () {
        return this.$( '#' + this.get( 'inputId' ));
    },

    /**
     * Class string for the internal input element
     * @property {string} inputClass
     */
    inputClass: function () {
        var classes = [ 'form-control' ];

        if ( this.get( 'clickToEdit' )) {
            classes.push( 'click-to-edit' );
        }

        if ( this.get( 'suggestions' )) {
            classes.push( 'typeahead' );
        }

        return classes.join( ' ' );
    }.property(),

    /**
     * ID for the actual input element
     * @property {string} inputId
     */
    inputId: function () {
        return this.get( 'elementId' ) + 'Input';
    }.property( 'elementId' ),

    /**
     * Whether the typeahead.js functionality has been setup
     * @property {boolean} isTypeaheadSetup
     * @default false
     */
    isTypeaheadSetup: false,

    /**
     * Sets up the input event listeners exposed to the component's
     * parent controller
     * @method setupInputEvents
     */
    setupInputEvents: function () {
        var blurAction = this.get( 'blur' ),
            self = this;

        if ( blurAction ) {
            this.$( 'input' ).on( 'blur', function () {
                self.sendAction( 'blur' );
            });
        }
    }.on( 'didInsertElement' ),

    /**
     * Sets up the typeahead behavior when `suggestions` are supplied
     * @method setupTypeahead
     */
    setupTypeahead: function () {
        var self = this;

        if ( this.get( 'suggestions' ) && !this.get( 'isTypeaheadSetup' )) {
            var namePath = this.get( 'suggestionNamePath' );
            var typeahead;

            typeahead = this.getInput().typeahead({
                highlight: true,
                hint: true
            }, {
                displayKey: namePath,

                source: function ( query, callback ) {
                    var pattern = new RegExp( query, 'i' );

                    callback( self.get( 'suggestions' ).filter( function ( suggestion ) {
                        return Ember.get( suggestion, namePath ).match( pattern );
                    }));
                }
            });

            /* jshint ignore:start */
            var selectItem = function ( event, item ) {
                self.set( 'value', Ember.get( item, namePath ));
            };

            typeahead.on( 'typeahead:autocompleted', selectItem );
            typeahead.on( 'typeahead:selected', selectItem );
            /* jshint ignore:end */

            this.set( 'isTypeaheadSetup', true );
        }
    }.on( 'didInsertElement' ).observes( 'suggestions' ),

    /**
     * Lookup path for the suggestion items' name
     * @property {string} suggestionLabelPath
     * @default "name"
     */
    suggestionNamePath: 'name',

    /**
     * Type attribute for the containing div
     * @property {string} type
     * @default "text"
     */
    type: 'text'
});
