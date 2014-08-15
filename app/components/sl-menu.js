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
            console.log( 'Init key listeners' );
            this.set( 'keyHandler', true );

            ke.on( 'childSelected', function( key ) {
                this.childSelected( key );
            }.bind( this )).on( 'drillDown', function() {
                if ( this.get( 'useDrillDownKey' )) {
                    this.send( 'drillDown' );
                }
            }.bind( this )).on( 'closeAll', function() {
                this.send( 'closeAll' );
            }.bind( this )).on( 'showAll', function() {
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
              .off( 'showAll' );
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

    AllView: Ember.View.extend({

        tagName: 'li',

        classNames: [ 'all' ],

        target: function() {
            return this.get( 'parentView' );
        }.property( 'parentView' ),

        mouseEnter: function() {
            this.send( 'showAll' )
        }
    })
});
