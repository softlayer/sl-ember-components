import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';
import ModalService from 'sl-ember-components/services/sl-modal';

const service = ModalService.create();
const MockModal = function( name, isOpen ) {
    this.name = name;
    this.isOpen = isOpen;

    this.get = function( prop ) {
        return this[prop];
    };

    this.hide = function() {};
};

const mockModal = new MockModal( 'mock', true );

moduleFor( 'service:sl-modal', 'Unit | Service | sl modal', {
    unit: true,

    beforeEach() {
        //reset modals property before each test so tests are independent
        service.set( 'modals', {} );
    }
});

test( 'Register modal', function( assert ) {
    service.register( mockModal );

    const modals = service.modals;

    assert.ok(
        mockModal.name in modals
    );
});

test( 'Find modal', function( assert ) {
    service.set( `modals.${mockModal.name}`, mockModal );

    const modal = service.find( mockModal.name );

    assert.equal(
        modal.name,
        mockModal.name
    );
});

test( 'Registering the same modal twice throws an error', function( assert ) {
    const register = () => {
        service.register( mockModal, mockModal.name );
        service.register( mockModal, mockModal.name );
    };

    assert.throws( register );
});

test( 'Unregister a modal', function( assert ) {
    service.register( mockModal, mockModal.name );
    service.unregister( mockModal );

    const modalUnregistered = !( mockModal.name in service.modals );

    assert.ok(
        modalUnregistered
    );
});
