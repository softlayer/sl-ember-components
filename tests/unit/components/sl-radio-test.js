import Ember from 'ember';
import{ moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-radio', 'Unit | Component | sl radio', {
    unit: true
});

test( 'Correct default property values', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'name' ),
        null,
        'Default property "name" is null'
    );

    assert.strictEqual(
        component.get( 'label' ),
        null,
        'Default property "label" is null'
    );

    assert.strictEqual(
        component.get( 'readonly' ),
        false,
        'Default property "readonly" is false'
    );

    assert.strictEqual(
        component.get( 'disabled' ),
        false,
        'Default property "disabled" is false'
    );

    assert.strictEqual(
        component.get( 'value' ),
        null,
        'Default property "value" is null'
    );

    assert.strictEqual(
        component.get( 'tagName' ),
        'div',
        'Default property "tagName" is string "div"'
    );
});

test( 'RadioType property sets correct class', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'radioType' ),
        'radio',
        'RadioType defaults radio class'
    );

    assert.notStrictEqual(
        component.get( 'radioType' ),
        'radio-inline',
        'RadioType is not inline'
    );

    Ember.run( () => {
        component.set( 'inline', true );
    });

    assert.strictEqual(
        component.get( 'radioType' ),
        'radio-inline',
        'RadioType is inline'
    );

    assert.notStrictEqual(
        component.get( 'radioType' ),
        'radio',
        'RadioType is not inline'
    );
});
