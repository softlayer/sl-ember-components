import Ember from 'ember';
import sinon from 'sinon';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-drop-option', 'Unit | Component | sl drop option', {
    unit: true
});

test( 'Has expected initial class name', function( assert ) {
    assert.ok(
        this.$().hasClass( 'sl-drop-option' ),
        'Rendered component has class "sl-drop-option"'
    );
});

test( 'Has expected aria-role property', function( assert ) {
    assert.strictEqual(
        this.$().attr( 'role' ),
        'menuitem',
        'ARIA role is properly set to "menuitem"'
    );
});

test( 'Option type class value depends on `label` value', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        this.$().hasClass( 'presentation' ),
        false,
        'Rendered component initially does not have class "presentation"'
    );

    assert.ok(
        this.$().hasClass( 'divider' ),
        'Rendered component initially has class "divider"'
    );

    Ember.run( function() {
        component.set( 'label', 'Test' );
    });

    assert.strictEqual(
        this.$().hasClass( 'divider' ),
        false,
        'Rendered component does not have class "divider"'
    );

    assert.ok(
        this.$().hasClass( 'presentation' ),
        'Rendered compnonet has class "presentation" with valid "label" value'
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
