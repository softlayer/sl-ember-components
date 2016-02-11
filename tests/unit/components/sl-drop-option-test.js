import ClassPrefix from 'sl-ember-components/mixins/class-prefix';
import sinon from 'sinon';
import { moduleForComponent, test } from 'ember-qunit';
import globalLibraries from '../../helpers/sl/synchronous/global-libraries';

moduleForComponent( 'sl-drop-option', 'Unit | Component | sl drop option', {
    unit: true
});

test( 'Expected Mixins are present', function( assert ) {
    assert.ok(
        ClassPrefix.detect( this.subject() ),
        'ClassPrefix Mixin is present'
    );
});

test( 'Default property values', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'componentClass' ),
        'drop-option',
        'componentClass is set to drop-option'
    );

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

test( 'There are no references to Ember.$, $ or jQuery', function( assert ) {
    globalLibraries.setupSpies();

    const component = this.subject();

    this.render();

    globalLibraries.triggerEvents( component );

    assert.notOk(
        globalLibraries.called(),
        'Global libraries are not referenced in component'
    );

    globalLibraries.restoreSpies();
});
