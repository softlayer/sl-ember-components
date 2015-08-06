import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

let component;

const mockStream = {
    actions: {},

    on( actionName, handler ) {
        this.actions[ actionName ] = handler;
    },

    subject: {
        dispose() {
            mockStream.actions = {};
        },

        onCompleted() {}
    }
};

const template = Ember.Handlebars.compile(
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
        if ( !component.isDestroyed ) {
            Ember.run( () => {
                if( this.hideModal ) {
                    component.hide();
                }
            });
        }
    },

    unit: true
});

test( 'Classes are present', function( assert ) {
    component = this.subject();

    this.render();

    assert.ok(
        this.$().hasClass( 'modal' ),
        'Has class modal'
    );
});

test( 'Listeners are setup and firing appropriately', function( assert ) {
    assert.expect( 4 );

    const beforeShowDone = assert.async();
    const afterShowDone = assert.async();
    const beforeHideDone = assert.async();
    const afterHideDone = assert.async();

    component = this.subject({
        beforeShow: 'beforeShow',
        afterShow: 'afterShow',
        beforeHide: 'beforeHide',
        afterHide: 'afterHide',
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

            beforeHide() {
                assert.ok(
                    true,
                    'beforeHide was triggered'
                );

                beforeHideDone();
            },

            afterHide() {
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
    component = this.subject({ template });

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

test( 'Closing of modal using close button works', function( assert ) {
    assert.expect( 1 );

    const closeDone = assert.async();

    component = this.subject({
        afterHide: 'modalClosed',
        template: template,
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

test( 'Backdrop is hidden when backdrop property is set to false', function( assert ) {
    assert.expect( 1 );

    const openDone = assert.async();

    component = this.subject({
        afterShow: 'modalOpen',
        backdrop: false,
        targetObject: {
            modalOpen() {
                assert.equal(
                    Ember.$( '.modal-backdrop' ).length,
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
    component = this.subject();

    this.render();

    Ember.run( () => {
        component.show();
    });

    assert.equal(
        Ember.$( '.modal-backdrop' ).length,
        1
    );
});

test( 'Fade class is present when animated is set to true', function( assert ) {
    component = this.subject();

    assert.ok(
        this.$().hasClass( 'fade' )
    );
});

test( 'Fade class is absent when animated is set to false', function( assert ) {
    component = this.subject({
        animated: false
    });

    assert.ok(
        !this.$().hasClass( 'fade' )
    );

});

test( 'ariaDescribedBy attribute binding', function( assert ) {
    const describedBy = 'targetId';

    component = this.subject({
        ariaDescribedBy: describedBy
    });

    assert.equal(
        this.$().attr( 'aria-describedby' ),
        describedBy
    );
});

test( 'aria-hidden is true', function( assert ) {
    component = this.subject();

    this.render();

    assert.equal(
        this.$().attr( 'aria-hidden' ),
        'true'
    );
});

test( 'aria-labelledby is set', function( assert ) {
    component = this.subject({ template });

    this.render();

    assert.ok(
        this.$().attr( 'aria-labelledby' )
    );
});

test( 'Component responds to "hide" stream action', function( assert ) {
    component = this.subject({ stream: mockStream });

    this.render();

    const hideSpy = window.sinon.spy( component, 'hide' );

    mockStream.actions[ 'hide' ]();

    assert.ok(
        hideSpy.called,
        'hide() was triggered successfully'
    );
});

test( 'Component responds to "show" stream action', function( assert ) {
    component = this.subject({ stream: mockStream });

    this.render();

    const showSpy = window.sinon.spy( component, 'show' );

    mockStream.actions[ 'show' ]();

    assert.ok(
        showSpy.called,
        'show() was triggered successfully'
    );
});
