import Ember from 'ember';

/**
 * @module components
 * @class  sl-menu
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

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

    // -------------------------------------------------------------------------
    // Actions

    /**
     * Component actions hash
     *
     * @property {Ember.Object} actions
     */
    actions: {

        /**
         * Close all of the sub menus
         *
         * @function actions.closeAll
         * @returns  {void}
         */
        closeAll() {
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

            if ( this.get( 'isRoot' ) ) {
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
         * @function cycleRootSelectionNext
         * @returns  {void}
         */
        cycleRootSelectionNext() {
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
         *
         * @function cycleRootSelectionPrevious
         * @returns  {void}
         */
        cycleRootSelectionPrevious() {
            var currentIndex = this.get( 'currentRootNodeIndex' );

            if ( !this.get( 'keyboardInUse' ) ) {
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
         * @returns  {void}
         */
        drillDown() {
            var child = this.get( 'activeChild' );

            if ( this.get( 'keyHandler' )) {
                if ( child ) {
                    child.set( 'keyHandler', true );
                    this.set( 'keyHandler', false );
                }
            } else if ( child ) {
                child.drillDown();
            }
        },

        /**
         * Send selected action when menu item is selected
         *
         * @function actions.selected
         * @returns  {void}
         */
        selected() {
            this.performAction();
        },

        /**
         * Show all of the sub menus
         *
         * @function actions.showAll
         * @returns  {void}
         */
        showAll() {
            if ( this.$() ) {
                this.$().addClass( 'active' );

                if ( this.get( 'isRoot' ) ) {
                    this.$().addClass( 'showall' );
                }
            }

            this.get( 'children' ).forEach( function( item ) {
                item.send( 'showAll' );
            });
        }
    },

    // -------------------------------------------------------------------------
    // Events

    /**
     * Method called when menu is clicked
     *
     * @function click
     * @returns  {boolean} false
     */
    click() {
        this.performAction();

        return false;
    },

    /**
     * Method triggered on mouseenter event
     *
     * @function mouseEnter
     * @returns  {void}
     */
    mouseEnter() {
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
     * @returns  {void}
     */
    mouseLeave() {
        if ( this.get( 'isRoot' ) ) {
            this.send( 'closeAll' );
        } else if ( !this.get( 'rootNode' ).$().hasClass( 'showall' ) ) {
            this.$().removeClass( 'active' );
        }
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Currently active child
     *
     * @property {number} activeChild
     * @default  null
     */
    activeChild: null,

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
         * @returns  {void}
         */
        mouseEnter() {
            this.send( 'showAll' );
        },

        /**
         * Target pointer to the parent view
         *
         * @function AllView.target
         * @observes parentView
         * @return   {Ember.View}
         */
        target: Ember.computed( 'parentView', function() {
            return this.get( 'parentView' );
        })
    }),

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

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Initialize children array
     *
     * @function initChildren
     * @observes "init" event
     * @returns  {void}
     */
    initChildren: Ember.on( 'init', function() {
        this.set( 'children', Ember.A() );
    }),

    /**
     * Initialize menu
     *
     * @function initMenu
     * @observes "didInsertElement" event
     * @returns  {void}
     */
    initMenu: Ember.on( 'didInsertElement', function() {
        var keyEvents = this.get( 'keyEvents' ),
            parent    = this.get( 'parentView' ),
            path      = Ember.A(),
            rootNode  = this;

        this.set( 'pages', Ember.A( this.get( 'menu.pages' ) ) );

        // Register keyboard event listeners
        if ( keyEvents ) {
            this.set( 'keyHandler', true );

            keyEvents.on( 'childSelected', ( key ) => {
                this.set( 'keyboardInUse', true );
                this.childSelected( key );
            })
            .on( 'drillDown', () => {
                if ( this.get( 'useDrillDownKey' ) ) {
                    this.send( 'drillDown' );
                }
            })
            .on( 'cycleRootSelectionNext', ( event ) => {
                this.send( 'cycleRootSelectionNext', event );
            })
            .on( 'cycleRootSelectionPrevious', ( event ) => {
                this.send( 'cycleRootSelectionPrevious', event );
            })
            .on( 'closeAll', () => {
                this.set( 'keyboardInUse', false );
                this.send( 'closeAll' );
            })
            .on( 'showAll', () => {
                this.set( 'keyboardInUse', true );
                this.send( 'showAll' );
            });
        }

        // Register child
        if ( typeof parent.registerChild === 'function' ) {
            parent.registerChild( this );
        }

        while( !Ember.get( rootNode, 'isRoot' ) ) {
            path.insertAt( 0, Ember.get( rootNode, 'menu.label' ) );
            rootNode = Ember.get( rootNode, 'parentView' );
        }

        this.setProperties({
            path     : path,
            rootNode : rootNode
        });
    }),

    /**
     * Remove bound events and current menu state
     *
     * @function destroyMenu
     * @observes "willClearRender" event
     * @returns  {void}
     */
    destroyMenu: Ember.on( 'willClearRender', function() {
        var keyEvents = this.get( 'keyEvents' ),
            parent    = this.get( 'parentView' );

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
    }),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Activate specified child
     *
     * @function activateChild
     * @param    {mixed} child - Which child to activate
     * @returns  {void}
     */
    activateChild( child ) {
        if ( typeof child === 'number' ) {
            child = this.get( 'children' )[ child - 1 ]; // convert to 0 base
        }

        this.get( 'children' ).forEach( function( item ) {
            if ( item === child ) {
                child.performAction();
            } else {
                item.$().removeClass( 'active' );
            }
        });
    },

    /**
     * Handle child selection event
     *
     * @function childSelected
     * @param    {number} childIndex - Index of the child that is being selected
     * @returns  {void}
     */
    childSelected( childIndex ) {
        var child;

        if ( this.get( 'isRoot' ) && this.$().hasClass( 'showall' ) ) {
            this.send( 'closeAll' );
        }

        if ( this.get( 'keyHandler' ) ) {
            this.activateChild( childIndex );
        } else {
            child = this.get( 'activeChild' );

            if ( child ) {
                child.childSelected( childIndex );
            }
        }
    },

    /**
     * Get index of rootNode currently on
     *
     * @function currentRootNodeIndex
     * @returns  {number} - The current root node index
     */
    currentRootNodeIndex: Ember.computed( function() {
        var currentIndex = null;

        // Determine index of rootNode currently on
        this.get( 'rootNode.menu.pages' ).forEach( function( item, index ) {
            if ( item.label === this.get( 'activeChild.menu.label' ) ) {
                currentIndex = index;
            }
        }, this );

        return currentIndex;
    }).volatile(),

    /**
     * Boolean representation of showAll property
     *
     * @function showAllBoolean
     * @observes showAll
     * @returns  {boolean}
     */
    showAllBoolean: Ember.computed( 'showAll', function() {
        return ( 'true' === this.get( 'showAll' ) ) ? true : false;
    }),

    /**
     * Whether to display the AllView view
     *
     * @function displayShowAll
     * @observes isRoot, showAllBoolean
     * @returns  {boolean}
     */
    displayShowAll: Ember.computed( 'isRoot', 'showAllBoolean', function() {
        return this.get( 'isRoot' ) && this.get( 'showAllBoolean' );
    }),

    /**
     * Send the primary action
     *
     * @function performAction
     * @returns  {void}
     */
    performAction() {
        this.$().addClass( 'active' );

        var rootNode = this.get( 'rootNode' ),
            path     = this.get( 'path' ),
            action;

        rootNode.sendAction( 'selectionMade', path );

        if ( this.get( 'menu.pages' ) ) {
            this.showContent();

            if ( !this.get( 'useDrillDownKey' ) ) {
                this.set( 'keyHandler', true );
                this.get( 'parentView' ).set( 'keyHandler', false );
            }
        } else {
            if ( this.get( 'menu.action' )) {
                action = this.get( 'menu.action' );

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
     * @param    {mixed} child
     * @returns  {void}
     */
    registerChild( child ) {
        this.get( 'children' ).insertAt( 0, child );
    },

    /**
     * Show the active child content of this menu
     *
     * @function showContent
     * @returns  {void}
     */
    showContent() {
        this.get( 'parentView' ).set( 'activeChild', this );
    },

    /**
     * Un-register the specified child
     *
     * @function unregisterChild
     * @param    {mixed} child - The child to un-register from this menu
     * @returns  {void}
     */
    unregisterChild( child ) {
        if ( child === this.get( 'activeChild' ) ) {
            this.set( 'activeChild', null );
        }

        this.get( 'children' ).removeObject( child );
    }

});
