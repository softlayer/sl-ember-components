import Ember from 'ember';

export default Ember.Component.extend({

    attributeBindings: [ 'class' ],

    classNames: [ 'sl-menu' ],

    children: null,

    keyEvents: null,

    initChildren: function() {
        this.set( 'children', Ember.A() );
    }.on( 'init' ),

    useDrillDownKey: false,

    initKeyListeners: function() {
        var ke = this.get( 'keyEvents' );
        if ( ke ) {
            this.set( 'keyHandler', true );

            ke.on( 'childSelected', function( key ) {
                this.childSelected( key );
            }.bind( this )).on( 'drillDown', function() {
                if ( this.get( 'useDrillDownKey' )) {
                    this.drillDown();
                }
            }.bind( this )).on( 'closeAll', function() {
                this.closeAll();
            }.bind( this )).on( 'showAll', function() {
                this.showAll();
            }.bind( this ));
        }
    }.observes( 'keyEvents' ).on( 'didInsertElement' ),

    activeChild: null,

    keyHandler: false,

    // Key events
    childSelected: function( childIndex ) {
        if ( this.get( 'keyHandler' )) {
            this.activateChild( childIndex );
        } else {
            var child = this.get( 'activeChild' );

            if ( child ) {
                child.childSelected( childIndex );
            }
        }
    },

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

    closeAll: function() {
        if ( this.$() ) {
            this.$().removeClass( 'active' ).removeClass( 'showall' );
        }

        this.set( 'keyHandler', false );

        this.get( 'children' ).forEach( function( item ) {
            item.closeAll();
        });

        if ( this.get( 'isRoot' )) {
           this.set( 'keyHandler', true );
        }
    },

    showAll: function() {
        if ( this.$() ) {
            this.$().addClass( 'active' ).addClass( 'showall' );
        }

        this.get( 'children' ).forEach( function( item ) {
            item.showAll();
        });
    },

    tagName: 'div',

    didInsertElement: function() {
        var parent = this.get( 'parentView' );
        if ( typeof parent.registerChild === 'function' ) {
            parent.registerChild( this );
        }
    },

    mouseEnter: function() {
        this.$().addClass( 'active' );
    },

    mouseLeave: function() {
        if ( !this.$().hasClass( 'showall' )) {
            this.closeAll();
        }
    },

    willDestroyElement: function() {
        var parent = this.get( 'parentView' );
        if ( typeof parent.unregisterChild === 'function' ) {
            parent.unregisterChild( this );
        }
    },

    registerChild: function( child ) {
        this.get( 'children' ).push( child );
    },

    unregisterChild: function( child ) {
        if ( child === this.get( 'activeChild' )) {
            this.set( 'activeChild', null );
        }
        this.get( 'children' ).removeObject( child );
    },

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

    showContent: function() {
        this.get( 'parentView' ).set( 'activeChild', this );
    },

    click: function() {
        this.performAction();
    },

    getPath: function() {
        var path = Ember.A(),
            rootNode = this;

        while( !rootNode.get( 'isRoot' )) {
            path.insertAt( 0, rootNode.get( 'menu.label' ));
            rootNode = rootNode.get( 'parentView' );
        }

        return {
            root: rootNode,
            path: path
        };
    },

    performAction: function() {
        this.$().addClass( 'active' );

        var fullPath = this.getPath(),
            rootNode = fullPath.root,
            path = fullPath.path;

        rootNode.sendAction( 'selectionMade', path );

        if ( this.get( 'menu.pages' )) {
            this.showContent();

            if ( !this.get( 'useDrillDownKey' )) {
                this.set( 'keyHandler', true );
                this.get( 'parentView' ).set( 'keyHandler', false );
            }
        } else {
            if ( this.get( 'menu.action' )) {
                var action = this.get( 'menu.action' );

                if ( typeof action === 'function' ) {
                    this.get( 'menu.action' ).call( this );
                } else if ( typeof action === 'object' ) {
                    rootNode.sendAction( 'actionInitiated',
                            this.get( 'menu.action.actionName' ),
                            this.get( 'menu.action.data' ));
                } else {
                    rootNode.sendAction( 'actionInitiated', this.get( 'menu.action' ));
                }
            }

            rootNode.closeAll();
        }
    },

    isRoot: true,

    actions: {
        selected: function() {
            this.performAction();
        }
    }
});
