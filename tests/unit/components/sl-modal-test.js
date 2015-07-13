import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

let component;

let mockModalService = {
    register() {},
    find() {}
};

let template = Ember.Handlebars.compile(
    '{{sl-modal-header title="Simple Example"}}' +
    '{{#sl-modal-body}}' +
    '<p>A simple modal example</p>' +
    '{{/sl-modal-body}}' +
    '{{sl-modal-footer}}'
);

moduleForComponent( 'sl-modal', 'Unit | Component | sl modal', {
    needs: [
        'component:sl-modal-header',
        'component:sl-modal-body',
        'component:sl-modal-footer'
    ],

    /**
     * Reset hideModal property before each test.
     */
    beforeEach() {
        this.hideModal = true;
    },

    /**
     * Hide modal after each test,
     * this will prevent the bootstrap overlay from sticking around.
     * The hideModal property can be overridden in a test.
     **/
    afterEach() {
        if (!component.isDestroyed) {
            Ember.run( () => {
                if( this.hideModal ) {
                    component.hide();
                }
            });
        }
    },
    unit: true
});

test( 'It renders', function( assert ) {
    component = this.subject({
        modalService: mockModalService
    });

    assert.equal(
        component._state,
        'preRender'
    );

    this.render();

    assert.equal(
        component._state,
        'inDOM'
    );
});

test( 'Classes are present', function( assert ) {
    component = this.subject({
        modalService: mockModalService
    });

    this.render();

    assert.ok(
        this.$().hasClass( 'modal' ),
        'Has class modal'
    );
});

test( 'Listeners are setup and firing appropriately', function( assert ) {
    let beforeShowDone = assert.async();
    let afterShowDone = assert.async();
    let beforeHideDone = assert.async();
    let afterHideDone = assert.async();

    assert.expect( 4 );

    component = this.subject({
        beforeShow: 'beforeShow',
        afterShow: 'afterShow',
        beforeHide: 'beforeHide',
        afterHide: 'afterHide',
        modalService: mockModalService,
        template: template,
        targetObject: {
            beforeShow() {
                assert.ok(
                    true,
                    'beforeShow was triggered'
                );

                beforeShowDone();
            },

            afterShow() {
                assert.ok(
                    true,
                   'afterShow was triggered'
                );

                afterShowDone();
            },

            beforeHide(){
                assert.ok(
                    true,
                    'beforeHide was triggered'
                );

                beforeHideDone();
            },

            afterHide(){
                assert.ok(
                    true,
                    'afterHide was triggered'
                );

                afterHideDone();
            }
        }
    });

    this.render();

    Ember.run( () => {
        component.show();
        component.hide();
    });


    this.hideModal = false;
});

test( 'Property isOpen is set appropriately', function( assert ) {
    component = this.subject({
        template: template,
        modalService: mockModalService
    });

    this.$().trigger( 'shown.bs.modal' );

    assert.equal(
        component.get( 'isOpen' ),
        true,
        'isOpen was set to true when modal show event was triggered'
    );

    this.$().trigger( 'hidden.bs.modal' );

    assert.equal(
        component.get( 'isOpen' ),
        false,
        'isOpen was set to false when modal close event was triggered'
    );

});

test( 'Closing of modal using close button works', function ( assert ) {
    let closeDone = assert.async();

    assert.expect( 1 );

    component = this.subject({
        afterHide: 'modalClosed',
        template: template,
        modalService: mockModalService,
        targetObject: {
            modalClosed() {
                assert.ok( 'Modal was closed' );
                closeDone();
            }
        }
    });

    this.render();

    Ember.run( () => {
        component.show();
    });

    this.$( '.close' ).click();
});

test( 'Modal registered on modal service', function( assert ) {
    let registerSpy = sinon.spy();

    let mockModalService = {
        register: registerSpy,
        find: function(){ }
    };

    component = this.subject({
        name: 'demo',
        modalService: mockModalService
    });

    this.render();

    assert.ok(
        registerSpy.calledOnce,
        'Register called on modal service'
    );
});

test( 'Backdrop is hidden when backdrop property is set to false', function ( assert ) {
    let openDone = assert.async();

    assert.expect( 1 );

    component = this.subject({
        afterShow: 'modalOpen',
        backdrop: false,
        modalService: mockModalService,
        targetObject: {
            modalOpen() {
                assert.equal(
                    $( '.modal-backdrop' ).length,
                    0
                );
                openDone();
            }
        }
    });

    this.render();

    Ember.run( () => {
        component.show();
    });
});

test( 'Backdrop is shown by default', function( assert ) {
    component = this.subject({
        modalService: mockModalService
    });

    this.render();

    Ember.run( () => {
        component.show();
    });

    assert.equal(
        $( '.modal-backdrop' ).length,
        1
    );
});

test( 'Modal is unregistered after destroy', function( assert ) {
    let spyUnregister = sinon.spy();

    component = this.subject({
        modalService: mockModalService,
        name: 'testDestroy',
        unregister: spyUnregister
    });

    this.render();

    Ember.run( () => {
        component.destroy();
        assert.ok( spyUnregister.calledOnce );
    });
});

test( 'Fade class is present when animated is set to true', function( assert ) {
    component = this.subject({
        modalService: mockModalService
    });

    assert.ok(
        this.$().hasClass( 'fade' )
    );
});

test( 'Fade class is absent when animated is set to false', function( assert ) {
    component = this.subject({
        modalService: mockModalService,
        animated: false
    });

    assert.ok(
        !this.$().hasClass( 'fade' )
    );

});

test( 'aria-describedby attribute binding', function( assert ) {
    let describedBy = 'targetId';

    component = this.subject({
        modalService: mockModalService,
        'aria-describedby': describedBy
    });

    assert.equal(
        this.$().attr( 'aria-describedby' ),
        describedBy
    );
});

test( 'aria-hidden is true', function( assert ) {
   component = this.subject({
       modalService: mockModalService
   });

   this.render();

   assert.equal(
       this.$().attr( 'aria-hidden' ),
       'true'
   );
});

test( 'aria-labelledby is set', function( assert ) {
    component = this.subject({
        modalService: mockModalService,
        template: template,
        title: 'testTitle'
    });

    this.render();

    assert.ok(
        this.$().attr( 'aria-labelledby' )
    );
});