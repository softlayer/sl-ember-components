import Ember from 'ember';
import mixinUnderTest from 'sl-ember-components/mixins/sl-notify-view';

module( 'Unit | Mixin | sl notify view' );

test( 'Successfully mixed', function( assert ) {
    let testObject = Ember.Object.extend( mixinUnderTest );
    let subject = testObject.create();

    assert.ok( subject );
});

test( 'willClearRender is passed to view', function( assert ) {
    assert.expect(1);

    let testController = Ember.Controller.extend({
        actions: {
            viewWillClearRender: function() {
                assert.ok( true, 'willClearRender was passed to controller' );
            }
        }
    });
    let controllerMock = testController.create();

    let testObject = Ember.Object.extend( mixinUnderTest );
    let subject = testObject.create({
        controller: controllerMock
    });

    subject.notifyWillClearRender();
});

test( 'viewDidInsertElement is passed to view', function( assert ) {
    assert.expect(1);

    let testController = Ember.Controller.extend({
        actions: {
            viewDidInsertElement: function() {
                assert.ok( true, 'didInsertElement was passed to controller' );
            }
        }
    });
    let controllerMock = testController.create();

    let testObject = Ember.Object.extend( mixinUnderTest );
    let subject = testObject.create({
        controller: controllerMock
    });

    subject.notifyDidInsertElement();
});

test( 'notifyWillDestroyElement is passed to view', function( assert ) {
    assert.expect(1);

    let testController = Ember.Controller.extend({
        actions: {
            viewWillDestroyElement: function() {
                assert.ok( true, 'willDestroyElement was passed to controller' );
            }
        }
    });
    let controllerMock = testController.create();

    let testObject = Ember.Object.extend( mixinUnderTest );
    let subject = testObject.create({
        controller: controllerMock
    });

    subject.notifyWillDestroyElement();
});

test( 'notifyWillInsertElement is passed to view', function( assert ) {
    assert.expect(1);

    let testController = Ember.Controller.extend({
        actions: {
            viewWillInsertElement: function() {
                assert.ok( true, 'willInsertElement was passed to controller' );
            }
        }
    });
    let controllerMock = testController.create();

    let testObject = Ember.Object.extend( mixinUnderTest );
    let subject = testObject.create({
        controller: controllerMock
    });

    subject.notifyWillInsertElement();
});