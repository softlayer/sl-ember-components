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
