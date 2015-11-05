import Ember from 'ember';
import sinon from 'sinon';
import { moduleForComponent, test } from 'ember-qunit';

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

test( 'optionType function returns expected values', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'optionType' ),
        'divider',
        '"optionType" defaults to "divider" if label isnt set'
    );

    Ember.run ( () => {
        component.set( 'label', '' );
    });

    assert.strictEqual(
        component.get( 'optionType' ),
        'divider',
        '"optionType" returns "divider" if label is false'
    );

    Ember.run ( () => {
        component.set( 'label', 'testLabel' );
    });

    assert.strictEqual(
        component.get( 'optionType' ),
        'presentation',
        '"optionType" returns "presentation" if label is true'
    );
});

test( 'Dependent keys are correct', function( assert ) {
    const component = this.subject();

    const optionTypeDependentKeys = [
        'label'
    ];

    assert.deepEqual(
        component.optionType._dependentKeys,
        optionTypeDependentKeys,
        'Dependent keys are correct for optionType()'
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
