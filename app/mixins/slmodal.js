import Ember from 'ember';

export default Ember.Mixin.create({

    layoutName: 'slmodal',

    classNames: [ 'modal', 'fade' ],

    attributeBindings: [ 'aria-hidden', 'tabindex', 'role', 'aria-labelledby', 'aria-describedby' ],

    /**
     * `aria-hidden` attribute to inform assistive technologies to skip the modal's DOM elements
     *
     * @property {string} aria-hidden
     * @default "true"
     */
    'aria-hidden': 'true',

    /**
     * `tabindex` attribute value
     *
     * @property {string} tab index
     * @default '-1'
     */
    tabindex: '-1',

    /**
     * `role` attribute value
     *
     * @property {string} role
     * @default 'dialog'
     */
    role: 'dialog',

    /**
     * `aria-labelledby` attribute value
     *
     * @property {string} aria-labelledby
     */
    'aria-labelledby': function() {
        return 'modalTitle-' + Math.random();
    }.property(),

    /**
     * `aria-describedby` attribute value
     *
     * @property {string} aria-describedby
     * @default null
     */
    'aria-describedby': null,

    /**
     * Overridable method stub
     *
     * Triggered by Twitter Bootstrap 3 modal's `show.bs.modal` event
     *
     * @return {void}
     */
    showHandler: function(){ },

    /**
     * Overridable method stub
     *
     * Triggered by Twitter Bootstrap 3 modal's `shown.bs.modal` event
     *
     * @return {void}
     */
    shownHandler: function(){ },

    /**
     * Overridable method stub
     *
     * Triggered by Twitter Bootstrap 3 modal's `hide.bs.modal` event
     *
     * @return {void}
     */
    hideHandler: function(){ },

    /**
     * Overridable method stub
     *
     * Triggered by Twitter Bootstrap 3 modal's `hidden.bs.modal` event
     *
     * @return {void}
     */
    hiddenHandler: function(){ },

    /**
     * Overridable method stub
     *
     * Triggered by Twitter Bootstrap 3 modal's `loaded.bs.modal` event
     *
     * @return {void}
     */
    loadedHandler: function(){ },

    /**
     * On 'didInsertElement', executes any defined handlers for exposed Twitter Bootstrap 3 modal events
     *
     * @observes didInsertElement
     * @return {void}
     */
    modalize: function() {
        this.$().modal({
            keyboard : true,
            show     : false,
            backdrop : 'static'
        })

        .on( 'show.bs.modal', function() {
            this.showHandler();
        }.bind( this ) )

        .on( 'shown.bs.modal', function() {
            this.shownHandler();
        }.bind( this ) )

        .on( 'hide.bs.modal', function() {
            this.hideHandler();
        }.bind( this ) )

        .on( 'hidden.bs.modal', function() {
            this.hiddenHandler();
        }.bind( this ) )

        .on( 'loaded.bs.modal', function() {
            this.loadedHandler();
        }.bind( this ) );
    }.on( 'didInsertElement' ),

    actions: {
        close: function() {
            if ( this.$() ) {
                this.$().modal( 'hide' );
            }
        }
    }

});