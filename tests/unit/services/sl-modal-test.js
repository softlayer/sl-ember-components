import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';
import ModalService from 'sl-ember-components/services/sl-modal';

let service = ModalService.create();

let MockModal = function( name, isOpen ) {
    this.name = name;
    this.isOpen = isOpen;

    this.get = function( prop ) {
        return this[prop];
    };

    this.hide = function() {};
};

let mockModal = new MockModal( 'mock', true );

moduleFor( 'service:sl-modal', 'Unit | Service | sl modal', {
    unit: true,

    beforeEach() {
        //reset modals property before each test so tests are independent
        service.set( 'modals', {} );
    }
});

test( 'Register modal', function( assert ) {
    service.register( mockModal );

    let modals = service.modals;

    assert.ok(
        mockModal.name in modals
    );
});

test( 'Find modal', function( assert ) {
    service.set( `modals.${mockModal.name}`, mockModal );

    let modal = service.find( mockModal.name );

    assert.equal(
        modal.name,
        mockModal.name
    );
});

test( 'Registering the same modal twice throws an error', function( assert ) {
    let errorThrown = false;

    try {
        service.register( mockModal, mockModal.name );
        service.register( mockModal, mockModal.name );
    } catch( error ) {
        errorThrown = true;
    }

    assert.ok( errorThrown );
});

test( 'Unregister a modal', function( assert ) {
    service.register( mockModal, mockModal.name );
    service.unregister( mockModal );

    let modalUnregistered = !( mockModal.name in service.modals );

    assert.ok(
        modalUnregistered
    );
});

test( 'Get all open modals', function( assert ) {
    service.register( mockModal, mockModal.name );

    assert.equal(
        service.getOpenModals().length,
        1
    );
});

test( 'Hide all modals', function( assert ) {
    let mockModal1 = new MockModal( 'mock1', true );
    let mockModal2 = new MockModal( 'mock2', true );

    mockModal1.hide = sinon.spy();
    mockModal2.hide = sinon.spy();

    service.register( mockModal1, mockModal1.name );
    service.register( mockModal2, mockModal2.name );

    service.hideAll();

    assert.ok(
        mockModal1.hide.calledOnce,
        'Modal one was hidden'
    );

    assert.ok(
        mockModal2.hide.calledOnce,
        'Modal two was hidden'
    );
});
