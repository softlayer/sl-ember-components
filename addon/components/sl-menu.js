import Ember from 'ember';

/**
 * @module components
 * @class sl-menu
 */
export default Ember.Component.extend({

    /**
     * Component actions hash
     *
     * @property {object} actions
     */
    actions: {

        /**
         * Send selected action when menu item is selected
         *
         * @method actions.selected
         */
        selected: function() {
            this.performAction();
        },

        /**
         * Show all of the sub menus
         *
         * @method actions.showAll
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
         * @method actions.closeAll
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
         * Only cycles through rootNodes if node was initially selected via
         * keyboard. If last rootNode then moves forward to "Show All" option.
         * If "Show All" option wraps around to first option.
         *
         * @method cylceRootSelectionNext
         */
        cycleRootSelectionNext: function() {
            var currentIndex = this.get( 'currentRootNodeIndex' );

            if ( !this.get( 'keyboardInUse' ) ) {
                return;
            }

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
        },

        /**
         * Cycle rootNode selection backwards
         *
         * Only cycles through rootNodes if node was initially selected via
         * keyboard. If first rootNode then wraps around to "Show All" option.
         * If "Show All" option moves backward to previous option
         *
         * @method cycleRootSelectionPrevious
         */
        cycleRootSelectionPrevious: function() {
            var currentIndex = this.get( 'currentRootNodeIndex' );

            if ( !this.get( 'keyboardInUse' )) {
                return;
            }

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
        },

        /**
         * Recursively open sub menus
         *
         * @method actions.drillDown
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
     * Activate specified child
     *
     * @method activateChild
     * @param {mixed} child - Which child to activate
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
     * Currently active child
     *
     * @property {number} activeChild
     * @default null
     */
    activeChild: null,

    /**
     * Handle child selection event
     *
     * @method childSelected
     * @param {number} childIndex - Index of the child that is being selected
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
     * Collection of children items
     *
     * @property {array} children
     * @default null
     */
    children: null,

    /**
     * Class names for the root element
     *
     * @property {array} classNames
     */
    classNames: [ 'sl-menu' ],

    /**
     * Remove bound events and current menu state
     *
     * @method cleanUp
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
     * Method called when menu is clicked
     *
     * @method click
     * @returns false
     */
    click: function() {
        this.performAction();

        return false;
    },

    /**
     * Get index of rootNode currently on
     *
     * @method currentRootNodeIndex
     * @return {integer} - The current root node index
     */
    currentRootNodeIndex: function() {
        var currentIndex = null;

        // Determine index of rootNode currently on
        this.get( 'rootNode.menu.pages' ).forEach( function( item, index ) {
            if ( item.label === this.get( 'activeChild.menu.label' )) {
                currentIndex = index;
            }
        }, this );

        return currentIndex;
    },

    /**
     * Initialize children array
     *
     * @method initChildren
     */
    initChildren: function() {
        this.set( 'children', Ember.A() );
    }.on( 'didInsertElement' ),

    /**
     *
     * @method initKeyListeners
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
            path: path,
            rootNode: rootNode
        });
    }.observes( 'keyEvents' ).on( 'didInsertElement' ),

    /**
     * @property {boolean} isRoot
     * @default true
     */
    isRoot: true,

    /**
     * @property {array} keyEvents
     * @default null
     */
    keyEvents: null,

    /**
     * @property {boolean} keyHandler
     * @default false
     */
    keyHandler: false,

    /**
     * Is the menu being interacted with via the keyboard?
     *
     * @param {boolean} keyboardInUse
     * @default false
     */
    keyboardInUse: false,

    /**
     * Method triggered on mouseenter event
     *
     * @method mouseEnter
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
     * @method mouseLeave
     */
    mouseLeave: function() {
        if ( this.get( 'isRoot' )) {
            this.send( 'closeAll' );
        } else if ( !this.get( 'rootNode' ).$().hasClass( 'showall' )) {
            this.$().removeClass( 'active' );
        }
    },

    /**
     * Send the primary action
     *
     * @method performAction
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
     * @method registerChild
     * @param {mixed} child
     */
    registerChild: function( child ) {
        this.get( 'children' ).push( child );
    },

    /**
     * Show the active child content of this menu
     *
     * @method showContent
     */
    showContent: function() {
        this.get( 'parentView' ).set( 'activeChild', this );
    },

    /**
     * Root element HTML tag type
     *
     * @property {string} tagName
     * @default "div"
     */
    tagName: 'div',

    /**
     * Un-register the specified child
     *
     * @method unregisterChild
     * @param {mixed} child - The child to un-register from this menu
     */
    unregisterChild: function( child ) {
        if ( child === this.get( 'activeChild' )) {
            this.set( 'activeChild', null );
        }

        this.get( 'children' ).removeObject( child );
    },

    /**
     * When true, allows key binding to drill down
     *
     * @property {boolean} useDrillDownKey
     * @default true
     */
    useDrillDownKey: true,

    /**
     * Embedded Ember View representing the "Show All"
     *
     * @property {view} AllView
     */
    AllView: Ember.View.extend({

        /**
         * Class names for the AllView view
         *
         * @property {array} AllView.classNames
         */
        classNames: [ 'all' ],

        /**
         * Method called on mouseenter event
         *
         * @method AllView.mouseEnter
         */
        mouseEnter: function() {
            this.send( 'showAll' );
        },

        /**
         * Target pointer to the parent view
         *
         * @property {component|view} AllView.target
         */
        target: function() {
            return this.get( 'parentView' );
        }.property( 'parentView' ),

        /**
         * HTML tag name of the root element
         *
         * @property {string} AllView.tagName
         * @default "li"
         */
        tagName: 'li'
    })
});
