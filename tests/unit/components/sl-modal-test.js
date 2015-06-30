import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

let component;
let template = Ember.Handlebars.compile(
    '{{sl-modal-header title="Simple Example"}}' +
    '{{#sl-modal-body}}' +
    '<p>A simple modal example</p>' +
    '{{/sl-modal-body}}' +
    '{{sl-modal-footer}}'
);

let mockModalService = Ember.Object.extend({
    register() {}
});

moduleForComponent( 'sl-modal', 'Unit | Component | sl modal', {
    needs: [
        'component:sl-modal-header',
        'component:sl-modal-body',
        'component:sl-modal-footer',
    ],

    afterEach() {
        component.hide();
    },

    unit: true
});

test( 'It renders', function( assert ) {
    assert.expect(2);

    component = this.subject();
    assert.equal( component._state, 'preRender' );

    this.render();
    assert.equal( component._state, 'inDOM' );
});

test( 'Property isOpen is set appropriately', function( assert ) {
    let openDone = assert.async();
    let closeDone = assert.async();

    assert.expect( 2 );

    component = this.subject({
        afterShow: 'modalOpen',
        afterHide: 'modalClosed',
        template: template,
        targetObject: {
            modalOpen() {
                assert.equal( component.get( 'isOpen' ), true );
                openDone();
            },

            modalClosed() {
                assert.equal( component.get( 'isOpen' ), false );
                closeDone();
            }
        }
    });

    this.render();
    component.show();
    component.hide();
});

test( 'Closing of modal using close button works', function ( assert ) {
    let closeDone = assert.async();

    component = this.subject({
        template: template,
        afterHide: 'modalClosed',
        targetObject: {
            modalClosed() {
                assert.ok( 'Modal was closed' );
                closeDone();
            }
        }
    });

    this.render();
    component.show();
    this.$( '.close' ).click();
});

test( 'Modal registered on modal service', function( assert ) {
    let registerSpy = sinon.spy();

    let mockModalService = Ember.Object.extend({
        register: registerSpy
    });

    component = this.subject({
        name: 'demo',
        modalService: mockModalService.create()
    });

    this.render();
    assert.ok( registerSpy.calledOnce, 'Register called on modal service' );
});

test( 'Backdrop is hidden when property is set to false', function ( assert ) {
    component = this.subject({
        backdrop: false
    });

    this.render();
    component.show();

    assert.equal( $('.modal-backdrop').length, 0 );
});

test( 'Backdrop is shown by default', function( assert ) {
    component = this.subject();

    this.render();
    component.show();

    assert.equal( $('.modal-backdrop').length, 1 );
});
