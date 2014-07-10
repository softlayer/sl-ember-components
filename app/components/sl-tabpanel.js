import Ember from 'ember';

/**
 * TabPanel component
 */
export default Ember.Component.extend({
    actions: {
        change: function ( tabName ) {
            this.get( 'activePane' ).removeClass( 'active' );
            this.get( 'activeTab' ).removeClass( 'active' );

            this.set( 'activeTabName', tabName );

            this.get( 'activePane' ).addClass( 'active' );
            this.get( 'activeTab' ).addClass( 'active' );
        }
    },

    activePane: function () {
        return this.$( '.tab-pane[data-tab-name="' + this.get( 'activeTabName' ) + '"]' );
    }.property( 'activeTabName' ),

    activeTab: function () {
        return this.$( '.tab[data-tab-name="' + this.get( 'activeTabName' ) + '"]' );
    }.property( 'activeTabName' ),

    activeTabName: null,

    didInsertElement: function () {
        this.get( 'activePane' ).addClass( 'active' );
        this.get( 'activeTab' ).addClass( 'active' );
    },

    fade: false
});

Ember.Handlebars.helper( 'renderTabPane', function ( templateName, options ) {
    options.types[0] = 'STRING';
    return Ember.Handlebars.helpers.render.call( this, templateName, options );
});