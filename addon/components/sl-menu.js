import Ember from 'ember';

/** @module sl-components/components/sl-menu */
export default Ember.Component.extend({

    /**
     * Root element HTML tag type
     *
     * @property {Ember.String} tagName
     * @default  "div"
     */
    tagName: 'div',

    /**
     * Class names for the root element
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'sl-menu' ],

    /**
     * Component actions hash
     *
     * @property {Ember.Object} actions
     */
    actions: {

        /**
         * Send selected action when menu item is selected
         *
         * @function actions.selected
         * @return   {void}
         */
        selected: function() {
            this.performAction();
        },

        /**
         * Show all of the sub menus
         *
         * @function actions.showAll
         * @return   {void}
         */
        showAll: function() {
            if ( this.$() ) {
                this.$().addClass( 'active' );

                if ( this.get( 'isRoot' )) {
                    this.$().addClass( 'showall' );
                }
            }

            this.get( 'children' ).forEach( function( item ) {
                item.send( 'showAll' );
            });
        },

        /**
         * Close all of the sub menus
         *
         * @function actions.closeAll
         * @return   {void}
         */
        closeAll: function() {
            if ( this.$() ) {
                this.$().removeClass( 'active' );

                if ( this.get( 'isRoot' )) {
                    this.$().removeClass( 'showall' );
                }
            }

            this.set( 'keyHandler', false );

            this.get( 'children' ).forEach( function( item ) {
                item.send( 'closeAll' );
            });

            if ( this.get( 'isRoot' )) {
               this.set( 'keyHandler', true );
            }
        },

        /**
         * Cycle rootNode selection forward
         *
         * Only cycles through rootNodes if node was initially selected via keyboard.
         * If "Show All" enabled:
         *     If last rootNode then moves forward to "Show All" option.
         *     If "Show All" option wraps around to first option.
         * If "Show All" disabled:
         *     If last rootNode then wraps around to first option.
         *
         * @function cylceRootSelectionNext
         * @return   {void}
         */
        cycleRootSelectionNext: function() {
            var currentIndex = this.get( 'currentRootNodeIndex' );

            if ( !this.get( 'keyboardInUse' ) ) {
                return;
            }

            // Whether "Show All" is enabled
            if ( this.get( 'showAllBoolean' ) ) {

                // Not on "Show All"
                if ( null !== currentIndex ) {

                    // Cycling forward, wrapping around last option to first option
                    if ( this.get( 'rootNode.menu.pages.length' ) < currentIndex + 2 ) {
                        this.send( 'showAll' );
                        this.set( 'activeChild', null );

                    // Cycle forward, selecting next rootNode
                    } else {
                        this.childSelected( currentIndex + 2 );
                    }

                // Select first rootNode
                } else {
                    this.childSelected( 1 );
                }

            } else {

                // Cycle forward, wrapping around last option to first option
                if ( this.get( 'rootNode.menu.pages.length' ) < currentIndex + 2 ) {
                    // Select first rootNode
                    this.childSelected( 1 );

                } else {
                    // Cycle forward, selecting next rootNode
                    this.childSelected( currentIndex + 2 );
                }
            }
        },

        /**
         * Cycle rootNode selection backwards
         *
         * Only cycles through rootNodes if node was initially selected via keyboard.
         * If "Show All" enabled:
         *     If first rootNode then wraps around to "Show All" option.
         *     If "Show All" option moves backward to previous option
         * If "Show All" disabled:
         *     If first rootNode then wraps around to last option.
         * @function cycleRootSelectionPrevious
         * @return   {void}
         */
        cycleRootSelectionPrevious: function() {
            var currentIndex = this.get( 'currentRootNodeIndex' );

            if ( !this.get( 'keyboardInUse' )) {
                return;
            }

            // Whether "Show All" is enabled
            if ( this.get( 'showAllBoolean' ) ) {

                // Not on "Show All"
                if ( null !== currentIndex ) {

                    // Cycling backwards, wrapping around first option to last option
                    if ( 0 === currentIndex ) {
                        this.send( 'showAll' );
                        this.set( 'activeChild', null );

                    // Cycle backwards, selecting previous rootNode
                    } else {
                        this.childSelected( currentIndex );
                    }

                // Select last rootNode
                } else {
                    this.childSelected( this.get( 'rootNode.menu.pages' ).length );
                }

            } else {

                // Cycle backwards, wrapping around first option to last option
                if ( 0 === currentIndex ) {
                    // Select last rootNode
                    this.childSelected( this.get( 'rootNode.menu.pages.length' ) );

                } else {
                    // Cycle backward, selecting previous rootNode
                    this.childSelected( currentIndex );
                }
            }
        },

        /**
         * Recursively open sub menus
         *
         * @function actions.drillDown
         * @return   {void}
         */
        drillDown: function() {
            var child = this.get( 'activeChild' );

            if ( this.get( 'keyHandler' )) {
                if ( child ) {
                    child.set( 'keyHandler', true );
                    this.set( 'keyHandler', false );
                }
            } else if ( child ) {
                child.drillDown();
            }
        }
    },

    /**
     * Method called when menu is clicked
     *
     * @function click
     * @return   (boolean) false
     */
    click: function() {
        this.performAction();

        return false;
    },

    /**
     * Method triggered on mouseenter event
     *
     * @function mouseEnter
     * @return   {void}
     */
    mouseEnter: function() {
        var currentActiveRootNodeIndex = this.get( 'currentRootNodeIndex' ),
            query;

        if ( this.get( 'keyboardInUse' ) ) {
            if ( null !== currentActiveRootNodeIndex ) {
                query = 'a:contains("' + this.get( 'rootNode.menu.pages' )[currentActiveRootNodeIndex].label + '")';
                this.$(query).parent().removeClass( 'active' );
            }

            this.set( 'keyboardInUse', false );
        }

        this.$().addClass( 'active' );
    },

    /**
     * Method triggered on mouseleave event
     *
     * @function mouseLeave
     * @return   {void}
     */
    mouseLeave: function() {
        if ( this.get( 'isRoot' )) {
            this.send( 'closeAll' );
        } else if ( !this.get( 'rootNode' ).$().hasClass( 'showall' )) {
            this.$().removeClass( 'active' );
        }
    },

    /**
     * Currently active child
     *
     * @property {number} activeChild
     * @default  null
     */
    activeChild: null,

    /**
     * Collection of children items
     *
     * @property {Ember.Array} children
     * @default  null
     */
    children: null,

    /**
     * @property {boolean} isRoot
     * @default  true
     */
    isRoot: true,

    /**
     * @property {Ember.Array} keyEvents
     * @default  null
     */
    keyEvents: null,

    /**
     * @property {boolean} keyHandler
     * @default  false
     */
    keyHandler: false,

    /**
     * Is the menu being interacted with via the keyboard?
     *
     * @property {boolean} keyboardInUse
     * @default  false
     */
    keyboardInUse: false,

    /**
     * Is "Show All" icon and functionalty desired?
     *
     * Is a string representaton of a boolean state
     *
     * @property {string} showAll
     * @default  "false"
     */
    showAll: 'false',

    /**
     * When true, allows key binding to drill down
     *
     * @property {boolean} useDrillDownKey
     * @default  true
     */
    useDrillDownKey: true,

    /**
     * Initialize children array
     *
     * @function initChildren
     * @observes didInsertElement event
     * @return   {void}
     */
    initChildren: function() {
        this.set( 'children', Ember.A() );
    }.on( 'didInsertElement' ),

    /**
     * Initialize keyboard event listeners
     *
     * @function initKeyListeners
     * @observes didInsertElement event, keyEvents
     * @return   {void}
     */
    initKeyListeners: function() {
        var ke = this.get( 'keyEvents' );
        if ( ke ) {
            this.set( 'keyHandler', true );

            ke.on( 'childSelected', function( key ) {
                this.set( 'keyboardInUse', true );
                this.childSelected( key );
            }.bind( this )).on( 'drillDown', function() {
                if ( this.get( 'useDrillDownKey' )) {
                    this.send( 'drillDown' );
                }
            }.bind( this )).on( 'cycleRootSelectionNext', function( e ) {
                this.send( 'cycleRootSelectionNext', e );
            }.bind( this )).on( 'cycleRootSelectionPrevious', function( e ) {
                this.send( 'cycleRootSelectionPrevious', e );
            }.bind( this )).on( 'closeAll', function() {
                this.set( 'keyboardInUse', false );
                this.send( 'closeAll' );
            }.bind( this )).on( 'showAll', function() {
                this.set( 'keyboardInUse', true );
                this.send( 'showAll' );
            }.bind( this ));
        }

        // Register child
        var parent = this.get( 'parentView' );
        if ( typeof parent.registerChild === 'function' ) {
            parent.registerChild( this );
        }

        // Set path & root info
        var path = Ember.A(),
            rootNode = this;

        while( !rootNode.get( 'isRoot' )) {
            path.insertAt( 0, rootNode.get( 'menu.label' ));
            rootNode = rootNode.get( 'parentView' );
        }

        this.setProperties({
            path     : path,
            rootNode : rootNode
        });
    }.observes( 'keyEvents' ).on( 'didInsertElement' ),

    /**
     * Remove bound events and current menu state
     *
     * @function cleanUp
     * @observes willDestroyElement event
     * @return   {void}
     */
    cleanUp: function() {
        var keyEvents = this.get( 'keyEvents' ),
            parent = this.get( 'parentView' );

        if ( typeof parent.unregisterChild === 'function' ) {
            parent.unregisterChild( this );
        }

        if ( keyEvents ) {
            keyEvents.off( 'childSelected' )
                .off( 'drillDown' )
                .off( 'closeAll' )
                .off( 'showAll' )
                .off( 'cycleRootSelectionNext' )
                .off( 'cycleRootSelectionPrevious' );
        }
    }.on( 'willDestroyElement' ),

    /**
     * Activate specified child
     *
     * @function activateChild
     * @argument {mixed} child - Which child to activate
     * @return   {void}
     */
    activateChild: function( child ) {
        if ( typeof child === 'number' ) {
            child = this.get( 'children' )[ child - 1 ]; // convert to 0 base
        }

        this.get( 'children' ).forEach( function( item ) {
            if ( item === child ) {
                child.performAction();
            } else {
                item.$().removeClass( 'active' );
            }
        }.bind( this ));
    },

    /**
     * Handle child selection event
     *
     * @function childSelected
     * @argument {number} childIndex - Index of the child that is being selected
     * @return   {void}
     */
    childSelected: function( childIndex ) {
        if ( this.get( 'isRoot' ) && this.$().hasClass( 'showall' )) {
            this.send( 'closeAll' );
        }

        if ( this.get( 'keyHandler' )) {
            this.activateChild( childIndex );
        } else {
            var child = this.get( 'activeChild' );

            if ( child ) {
                child.childSelected( childIndex );
            }
        }
    },

    /**
     * Get index of rootNode currently on
     *
     * @function currentRootNodeIndex
     * @return   {number} - The current root node index
     */
    currentRootNodeIndex: function() {
        var currentIndex = null;

        // Determine index of rootNode currently on
        this.get( 'rootNode.menu.pages' ).forEach( function( item, index ) {
            if ( item.label === this.get( 'activeChild.menu.label' ) ) {
                currentIndex = index;
            }
        }, this );

        return currentIndex;
    }.property().volatile(),

    /**
     * Boolean representation of showAll property
     *
     * @function showAllBoolean
     * @observes showAll
     * @return   {boolean}
     */
    showAllBoolean: function() {
        return ( 'true' === this.get( 'showAll' ) ) ? true : false;
    }.property( 'showAll' ),

    /**
     * Whether to display the AllView view
     *
     * @function displayShowAll
     * @observes isRoot, showAllBoolean
     * @return   {boolean}
     */
    displayShowAll: function() {
        return this.get( 'isRoot' ) && this.get( 'showAllBoolean' );
    }.property( 'isRoot', 'showAllBoolean' ),

    /**
     * Send the primary action
     *
     * @function performAction
     * @return   {void}
     */
    performAction: function() {
        this.$().addClass( 'active' );

        var rootNode = this.get( 'rootNode' ),
            path     = this.get( 'path' );

        rootNode.sendAction( 'selectionMade', path );

        if ( this.get( 'menu.pages' ) ) {
            this.showContent();

            if ( !this.get( 'useDrillDownKey' ) ) {
                this.set( 'keyHandler', true );
                this.get( 'parentView' ).set( 'keyHandler', false );
            }
        } else {
            if ( this.get( 'menu.action' )) {
                var action = this.get( 'menu.action' );

                if ( typeof action === 'function' ) {
                    action.call( this );
                } else if ( typeof action === 'object' ) {
                    rootNode.sendAction( 'actionInitiated',
                            action.actionName,
                            action.data );
                } else {
                    rootNode.sendAction( 'actionInitiated', action );
                }
            } else if ( this.get( 'menu.route' ) ) {
                rootNode.sendAction( 'changeRoute', this.get( 'menu.route' ) );
            } else if ( this.get( 'menu.link' ) ) {
                window.location.href = this.get( 'menu.link' );
            }

            rootNode.send( 'closeAll' );
        }
    },

    /**
     * Append a child to the children array
     *
     * @function registerChild
     * @argument {mixed} child
     * @return   {void}
     */
    registerChild: function( child ) {
        this.get( 'children' ).push( child );
    },

    /**
     * Show the active child content of this menu
     *
     * @function showContent
     * @return   {void}
     */
    showContent: function() {
        this.get( 'parentView' ).set( 'activeChild', this );
    },

    /**
     * Un-register the specified child
     *
     * @function unregisterChild
     * @argument {mixed} child - The child to un-register from this menu
     * @return   {void}
     */
    unregisterChild: function( child ) {
        if ( child === this.get( 'activeChild' )) {
            this.set( 'activeChild', null );
        }

        this.get( 'children' ).removeObject( child );
    },

    /**
     * Embedded Ember View representing the "Show All"
     *
     * @property {Ember.View} AllView
     */
    AllView: Ember.View.extend({

        /**
         * HTML tag name of the root element
         *
         * @property {Ember.String} tagName
         * @default  "li"
         */
        tagName: 'li',

        /**
         * Class names for the AllView view
         *
         * @property {Ember.Array} AllView.classNames
         */
        classNames: [ 'all' ],

        /**
         * Method called on mouseenter event
         *
         * @function AllView.mouseEnter
         * @return   {void}
         */
        mouseEnter: function() {
            this.send( 'showAll' );
        },

        /**
         * Target pointer to the parent view
         *
         * @property {component|view} AllView.target
         * @observes parentView
         * @return   {Ember.View}
         */
        target: function() {
            return this.get( 'parentView' );
        }.property( 'parentView' )
    })
});
