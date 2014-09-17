import Ember from 'ember';

/**
 * @module components
 * @class sl-menu
 */
export default Ember.Component.extend({

    /**
     * Object of component actions
     * @property {object} actions
     */
    actions: {

        /**
         * Send selected action when menu item is selected
         * @method actions.selected
         */
        selected: function() {
            this.performAction();
        },

        /**
         * @method showAll
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
         * @method closeAll
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
         * @method drillDown
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
        },

        /**
         * Cycle rootNode selection forward
         *
         * Only cycles through rootNodes if node was initially selected via keyboard
         * If last rootNode then moves forward to "Show All" option
         * If "Show All" option wraps around to first option
         *
         * @return {void}
         */
        cycleRootSelectionNext: function() {
            var currentIndex = this._getCurrentRootNodeIndex();

            if ( !this.get( 'keyboardInUse' ) ) {
                return;
            }

            // Not on "Show All"
            if ( null !== currentIndex ) {

                // Cycling forward, wrapping around last option to first option
                if ( (currentIndex + 2 ) > this.get( 'rootNode.menu.pages' ).length ) {
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
         * Only cycles through rootNodes if node was initially selected via keyboard
         * If first rootNode then wraps around to "Show All" option
         * If "Show All" option moves backward to previous option
         *
         * @return {void}
         */
        cycleRootSelectionPrevious: function() {
            var currentIndex = this._getCurrentRootNodeIndex();

            if ( !this.get( 'keyboardInUse' ) ) {
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
        }
    },

    /**
     * @method activateChild
     * @param {mixed} child
     */
    activateChild: function( child ) {
        if ( typeof child === 'number' ) {
            child = this.get( 'children' )[child - 1]; // convert to 0 base
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
     * @property {mixed} activeChild
     * @default null
     */
    activeChild: null,

    /**
     * @property {array} attributeBindings
     */
    attributeBindings: [ 'class' ],

    /**
     * @method childSelected
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
     * @property {array} children
     * @default null
     */
    children: null,

    /**
     * @property {array} classNames
     */
    classNames: [ 'sl-menu' ],

    /**
     * @method click
     */
    click: function() {
        this.performAction();
        return false;
    },

    /**
     * Get index of rootNode currently on
     *
     * @method _getCurrentRootNodeIndex
     * @return {integer}
     */
    _getCurrentRootNodeIndex: function() {
        var rootOptionsLength = this.get( 'rootNode.menu.pages' ).length,
            currentIndex      = null;

        // Determine index of rootNode currently on
        this.get( 'rootNode.menu.pages' ).forEach( function( item, index, enumerable ) {
            if ( item.label === this.get( 'activeChild.menu.label' ) ) {
                currentIndex = index;
            }
        }, this );

        return currentIndex;
    },

    /**
     * @method initChildren
     */
    initChildren: function() {
        this.set( 'children', Ember.A() );
    }.on( 'init' ),

    /**
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

    cleanUp: function() {
        var parent = this.get( 'parentView' );
        if ( typeof parent.unregisterChild === 'function' ) {
            parent.unregisterChild( this );
        }

        var ke = this.get( 'keyEvents' );
        if ( ke ) {
            ke.off( 'childSelected' )
              .off( 'drillDown' )
              .off( 'closeAll' )
              .off( 'showAll' )
              .off( 'cycleRootSelectionNext' )
              .off( 'cycleRootSelectionPrevious' );
        }
    }.on( 'willDestroyElement' ),

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
     * @method mouseEnter
     */
    mouseEnter: function() {
        var currentActiveRootNodeIndex = this._getCurrentRootNodeIndex(),
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
     * @method performAction
     */
    performAction: function() {
        this.$().addClass( 'active' );

        var rootNode = this.get( 'rootNode' ),
            path     = this.get( 'path' );

        rootNode.sendAction( 'selectionMade', path );

        if ( this.get( 'menu.pages' )) {
            this.showContent();

            if ( !this.get( 'useDrillDownKey' )) {
                this.set( 'keyHandler', true );
                this.get( 'parentView' ).set( 'keyHandler', false );
            }
        } else {
            if ( this.get( 'menu.emberAction' )) {
                var action = this.get( 'menu.emberAction' );

                if ( typeof action === 'function' ) {
                    action.call( this );
                } else if ( typeof action === 'object' ) {
                    rootNode.sendAction( 'actionInitiated',
                            action.actionName,
                            action.data );
                } else {
                    rootNode.sendAction( 'actionInitiated', action);
                }
            } else if ( this.get( 'menu.emberRoute' )) {
                rootNode.sendAction( 'changeRoute', this.get( 'menu.emberRoute' ));
            } else if ( this.get( 'menu.emberLink' )) {
                window.location.href = this.get( 'menu.emberLink' );
            }

            rootNode.send( 'closeAll' );
        }
    },

    /**
     * Append a child to the children array
     * @method registerChild
     * @param {mixed} child
     */
    registerChild: function( child ) {
        this.get( 'children' ).push( child );
    },

    /**
     * @method showContent
     */
    showContent: function() {
        this.get( 'parentView' ).set( 'activeChild', this );
    },

    /**
     * Root element HTML tag type
     * @property {string} tagName
     * @default "div"
     */
    tagName: 'div',

    /**
     * @method unregisterChild
     */
    unregisterChild: function( child ) {
        if ( child === this.get( 'activeChild' )) {
            this.set( 'activeChild', null );
        }
        this.get( 'children' ).removeObject( child );
    },

    /**
     * @property {boolean} useDrillDownKey
     */
    useDrillDownKey: true,

    /**
     * Is the menu being interacted with via the keyboard?
     *
     * @param {oolean}
     */
    keyboardInUse: false,

    AllView: Ember.View.extend({

        tagName: 'li',

        classNames: [ 'all' ],

        target: function() {
            return this.get( 'parentView' );
        }.property( 'parentView' ),

        mouseEnter: function() {
            this.send( 'showAll' );
        }
    })
});
