import Ember from 'ember';
import sinon from 'sinon';
import { moduleForComponent, test } from 'ember-qunit';
import globalLibraries from '../../helpers/sl/synchronous/global-libraries';

moduleForComponent( 'sl-drop-option', 'Unit | Component | sl drop option', {
    unit: true
});

test( 'Default property values', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'data' ),
        null,
        '"Data" property defaults to null'
    );

    assert.strictEqual(
        component.get( 'actionContext' ),
        null,
        '"Actioncontext" property defaults to null'
    );

    assert.strictEqual(
        component.get( 'tagName' ),
        'li',
        '"tagName" property defaults to li'
    );
});

test( 'isDivider function returns expected values', function( assert ) {
    const component = this.subject();

    assert.ok(
        component.get( 'isDivider' ),
        '"isDivider" defaults to true if label isnt set'
    );

    Ember.run ( () => {
        component.set( 'label', '' );
    });

    assert.ok(
        component.get( 'isDivider' ),
        '"isDivider" defaults to true if label is empty'
    );

    Ember.run ( () => {
        component.set( 'label', 'testLabel' );
    });

    assert.notOk(
        component.get( 'isDivider' ),
        '"isDivider" returns false when label exists'
    );
});

test( 'Dependent keys are correct', function( assert ) {
    const component = this.subject();

    const isDividerDependentKeys = [
        'label'
    ];

    assert.deepEqual(
        component.isDivider._dependentKeys,
        isDividerDependentKeys,
        'Dependent keys are correct for isDivider()'
    );
});

test( 'Click triggers bound action with correct arguments', function( assert ) {
    const testDataObject = {
        testProp: 'testValue'
    };

    const testActionSpy = sinon.spy();

    this.subject({
        action: 'testAction',
        actionContext: 'testActionContext',
        data: testDataObject,
        label: 'Test',
        targetObject: {
            testAction: testActionSpy
        }
    });

    this.$( 'a' ).trigger( 'click' );

    // spy.calledWith() does a deepEquals on objects
    assert.ok(
        testActionSpy.calledWith( testDataObject, 'testActionContext' ),
        'Test action fired correctly with the correct arguments'
    );
});

test( 'There are no references to Ember.$, $ or jQuery', function( assert ) {
    globalLibraries.setupSpies();

    const component = this.subject();

    this.render();

    globalLibraries.triggerEvents( component );

    assert.notOk(
        globalLibraries.called()
    );

    globalLibraries.restoreSpies();
});
