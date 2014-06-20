import Ember from 'ember';

/**
 * TabPanel component, wrapping functionality from bs_for_ember's TabsComponent
 * and TabsPanesComponent into a single custom component.
 */
export default Ember.Component.extend({
    actions: {
        /**
         * Changes the active tab to the tab with the specified name.
         *
         * @param {String} tabName - Name of the tab to make active
         */
        changeTab: function ( tabName ) {
            var activeTabName = this.get( 'activeTabName' ),
                targetTab     = this.$( 'a.tab[data-tab-name="' + tabName + '"]' ),
                targetPane    = this.$( '.tab-pane[data-tab-name="' + tabName + '"]' );

            if ( activeTabName ) {
                this.get( 'activeTab' ).removeClass( 'active' );
                this.get( 'activePane' ).removeClass( 'active' );

                if ( activeTabName === tabName ) {
                    // Close the tab panel when the active tab is clicked again
                    return this.close();
                }
            }

            targetTab.addClass( 'active' );
            targetPane.addClass( 'active' );
            this.set( 'activeTabName', tabName );
        }
    },

    /**
     * Returns the tab pane that is active, as determined by activeTabName attr
     *
     * @returns {Object|null} The currently active tab pane
     */
    activePane: function () {
        return this.$( '.tab-pane[data-tab-name="' + this.get( 'activeTabName' ) + '"]' );
    }.property( 'activeTabName' ),

    /**
     * Returns the tab that is active, as determined by activeTabName attr
     *
     * @returns {Object|null} The currently active tab
     */
    activeTab: function () {
        return this.$(' .tab[data-tab-name="' + this.get( 'activeTabName' ) + '"]' );
    }.property( 'activeTabName' ),

    activeTabName: null,

    /**
     * Closes the currently active tab pane and clears the active selection
     */
    close: function () {
        this.get( 'activePane' ).removeClass( 'active' );
        this.get( 'activeTab' ).removeClass( 'active' );
        this.set( 'activeTabPane', null );
    },

    /**
     * Collects "title" attributes from content value to form tab titles
     *
     * @returns {Array} Collection of tab titles
     */
    tabTitles: function () {
        return this.get( 'content' ).map( function ( item ) {
            return item.title;
        });
    }.property( 'content' )
});
