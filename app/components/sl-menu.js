import Ember from 'ember';

export default Ember.Component.extend({

    attributeBindings: [ 'class' ],

    classNames: [ 'menu' ],

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
                this.handleChildSelection( key );
            }.bind( this )).on( 'drillDown', function() {
                if ( this.get( 'useDrillDownKey' )) {
                    this.handleDrillDown();
                }
            }.bind( this )).on( 'closeAll', function() {
                this.handleCloseAll();
            }.bind( this )).on( 'showAll', function() {
                this.handleShowAll();
            }.bind( this ));
        }
    }.observes( 'keyEvents' ).on( 'init' ),

    activeChild: null,

    keyHandler: false,

    // Key events
    handleChildSelection: function( childIdx ) {
        if ( this.get( 'keyHandler' )) {
            this.activateChild( childIdx );
        } else {
            var child = this.get( 'activeChild' );

            if ( child ) {
                child.handleChildSelection( childIdx );
            }
        }
    },

    handlerChange: function() {
        if ( this.get( 'keyHandler' )) {
            var label = this.get( 'menu.label' );
            if ( Ember.isBlank( label )) {
                label = 'ROOT';
            }
        }
    }.observes( 'keyHandler' ),

    handleDrillDown: function() {
        var child = this.get( 'activeChild' );

        if ( this.get( 'keyHandler' )) {
            if ( child ) {
                child.set( 'keyHandler', true );
                this.set( 'keyHandler', false );
            }
        } else if ( child ) {
            child.handleDrillDown();
        }
    },

    handleCloseAll: function() {
        if ( this.$() ) {
            this.$().removeClass( 'active' );
        }

        this.set( 'keyHandler', false );

        this.get( 'children' ).forEach( function( item ) {
            item.handleCloseAll();
        });
                
	if ( this.get( 'isRoot' )) {
	   this.set( 'keyHandler', true );
	}
    },

    handleShowAll: function() {
        if ( this.$() ) {
            this.$().addClass( 'active' );
        }

        this.get( 'children' ).forEach( function( item ) {
            item.handleShowAll();
        });
    },

    tagName: 'li',

    didInsertElement: function() {
        var parent = this.get( 'parentView' );
        if ( typeof parent.registerChild === 'function' ) {
            parent.registerChild( this );
        }
    },

    mouseEnter: function() {
        this.get( 'parentView' ).$( 'li' ).removeClass( 'active' );
        this.$().addClass( 'active' );
    },

    mouseLeave: function() {
        this.handleCloseAll();
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
         if ( typeof child === "number" ) {
            child = this.get( 'children' )[child];
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
        this.$().addClass( 'active' );
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
        var fullPath = this.getPath(),
            rootNode = fullPath.root,
            path = fullPath.path;
        
	rootNode.sendAction( 'selectionMade', path );

        if ( this.get( 'menu.items' )) {
            this.showContent();

            if ( !this.get( 'useDrillDownKey' )) {
                this.set( 'keyHandler', true );
                this.get( 'parentView' ).set( 'keyHandler', false );
            }
        } else if ( this.get( 'menu.action' )) {
            var action = this.get( 'menu.action' );
            
            if ( typeof action === 'function' ) {
                this.get( 'menu.action' ).call( this );
            } else {
                rootNode.sendAction( 'actionInitiated', this.get( 'menu.action' ));
            }
	} 
	
    },

    isRoot: false
});
