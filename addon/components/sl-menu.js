import Ember from 'ember';
import layout from '../templates/components/sl-menu';

/**
 * @module components
 * @class sl-menu
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    classNames: [ 'sl-menu' ],

    layout,

    tagName: 'div',

    // -------------------------------------------------------------------------
    // Actions

    actions: {

        /**
         * Close all of the sub menus
         *
         * @function actions.closeAll
         * @returns {undefined}
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
         * Only cycles through rootNodes if node was initially selected
         * via keyboard.
         *
         * If "Show All" enabled:
         *     If last rootNode then moves forward to "Show All" option.
         *     If "Show All" option wraps around to first option.
         * If "Show All" disabled:
         *     If last rootNode then wraps around to first option.
         *
         * @function actions.cycleRootSelectionNext
         * @returns {undefined}
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
         * Only cycles through rootNodes if node was initially selected
         * via keyboard.
         *
         * If "Show All" enabled:
         *     If first rootNode then wraps around to "Show All" option.
         *     If "Show All" option moves backward to previous option
         * If "Show All" disabled:
         *     If first rootNode then wraps around to last option.
         *
         * @function actions.cycleRootSelectionPrevious
         * @returns {undefined}
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
         * @returns {undefined}
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
         * @returns {undefined}
         */
        selected() {
            this.performAction();
        },

        /**
         * Show all of the sub menus
         *
         * @function actions.showAll
         * @returns {undefined}
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

    click() {
        this.performAction();

        return false;
    },

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
     * @property {?Number} activeChild
     * @default null
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
         * @property {String} AllView.tagName
         * @default "li"
         */
        tagName: 'li',

        /**
         * Class names for the AllView view
         *
         * @property {String[]} AllView.classNames
         */
        classNames: [ 'all' ],

        /**
         * Method called on mouseenter event
         *
         * @function AllView.mouseEnter
         * @returns {undefined}
         */
        mouseEnter() {
            this.send( 'showAll' );
        },

        /**
         * Target pointer to the parent view
         *
         * @function AllView.target
         * @observes parentView
         * @return {Ember.View}
         */
        target: Ember.computed( 'parentView', function() {
            return this.get( 'parentView' );
        })
    }),

    /**
     * Collection of children items
     *
     * @property {?Object[]} children
     * @default null
     */
    children: null,

    /**
     * @property {Boolean} isRoot
     * @default true
     */
    isRoot: true,

    /**
     * @property {?Object[]} keyEvents
     * @default null
     */
    keyEvents: null,

    /**
     * @property {Boolean} keyHandler
     * @default false
     */
    keyHandler: false,

    /**
     * Is the menu being interacted with via the keyboard?
     *
     * @property {Boolean} keyboardInUse
     * @default false
     */
    keyboardInUse: false,

    /**
     * Whether "Show All" icon and functionality is enabled
     *
     * This is a string representaton of a boolean state.
     *
     * @property {String} showAll
     * @default "false"
     */
    showAll: 'false',

    /**
     * When true, allows key binding to drill down
     *
     * @property {Boolean} useDrillDownKey
     * @default true
     */
    useDrillDownKey: true,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Initialize children array
     *
     * @function initChildren
     * @listens init
     * @returns {undefined}
     */
    initChildren: Ember.on( 'init', function() {
        this.set( 'children', Ember.A() );
    }),

    /**
     * Initialize menu
     *
     * @function initMenu
     * @listens didInsertElement
     * @returns {undefined}
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
     * @listens willClearRender
     * @returns {undefined}
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
     * @param {Number|Object[]} child - Which child(ren) to activate
     * @returns {undefined}
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
     * @param {Number} childIndex - Index of the child that is being selected
     * @returns {undefined}
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
     * @returns {Number} - The current root node index
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
     * @returns {Boolean}
     */
    showAllBoolean: Ember.computed( 'showAll', function() {
        return ( 'true' === this.get( 'showAll' ) ) ? true : false;
    }),

    /**
     * Whether to display the AllView view
     *
     * @function displayShowAll
     * @observes isRoot, showAllBoolean
     * @returns {Boolean}
     */
    displayShowAll: Ember.computed( 'isRoot', 'showAllBoolean', function() {
        return this.get( 'isRoot' ) && this.get( 'showAllBoolean' );
    }),

    /**
     * Send the primary action
     *
     * @function performAction
     * @returns {undefined}
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
     * @param {Object} child
     * @returns {undefined}
     */
    registerChild( child ) {
        this.get( 'children' ).insertAt( 0, child );
    },

    /**
     * Show the active child content of this menu
     *
     * @function showContent
     * @returns {undefined}
     */
    showContent() {
        this.get( 'parentView' ).set( 'activeChild', this );
    },

    /**
     * Un-register the specified child
     *
     * @function unregisterChild
     * @param {Object} child - The child to un-register from this menu
     * @returns {undefined}
     */
    unregisterChild( child ) {
        if ( child === this.get( 'activeChild' ) ) {
            this.set( 'activeChild', null );
        }

        this.get( 'children' ).removeObject( child );
    }

});
