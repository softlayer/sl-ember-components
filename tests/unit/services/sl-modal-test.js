import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';
import ModalService from 'sl-ember-components/services/sl-modal';

let service = ModalService.create();

let MockModal = Ember.Object.extend({
    name: 'mock',
    isOpen: true
});

moduleFor( 'service:sl-modal', 'Unit | Service | sl modal', {
    unit: true,

    beforeEach() {
        //reset modals property before each test so tests are independent
        service.set( 'modals', {} );
    }
});

test( 'Register a modal and find it', function( assert ) {
    let mockModal = MockModal.create();

    service.register( mockModal, mockModal.name );

    let modal = service.find( mockModal.name );

    assert.equal( modal.name, mockModal.name );
});

test( 'Registering the same modal twice throws an error', function( assert ) {
    let mockModal = MockModal.create();

    try {
        service.register( mockModal, mockModal.name );
        service.register( mockModal, mockModal.name );
    } catch( error ) {
        assert.ok( true, 'Error thrown' );
    }
});

test( 'Get all open modals', function( assert ) {
    let mockModal = MockModal.create();

    service.register( mockModal, mockModal.name );

    assert.equal( service.getOpenModals().length, 1 );
});

test( 'Hide all modals', function( assert ) {
    let mockModal1 = MockModal.create();
    let mockModal2 = MockModal.create();

    mockModal2.name = 'mock2';

    mockModal1.hide = sinon.spy();
    mockModal2.hide = sinon.spy();

    service.register( mockModal1, mockModal1.name );
    service.register( mockModal2, mockModal2.name );

    service.hideAll();

    assert.ok( mockModal1.hide.calledOnce );
    assert.ok( mockModal2.hide.calledOnce );
});
