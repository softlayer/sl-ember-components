import Ember from 'ember';
import sinon from 'sinon';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-drop-option', 'Unit | Component | sl drop option', {
    unit: true
});

test( 'Properties have correct default values', function( assert ) {
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

test( 'Check computed property "optionType" is observing the correct properties', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.optionType._dependentKeys.join(),
        'label',
        '"Optiontype" computed property is observing the correct properties'
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

    assert.ok(
        testActionSpy.calledWith( testDataObject, 'testActionContext' ),
        'Test action fired correctly with the correct arguments'
    );
});
