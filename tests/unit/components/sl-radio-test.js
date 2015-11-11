import Ember from 'ember';
import InputBasedMixin from 'sl-ember-components/mixins/sl-input-based';
import{ moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-radio', 'Unit | Component | sl radio', {
    unit: true
});

test( 'Expected Mixins are present', function( assert ) {
    assert.ok(
        InputBasedMixin.detect( this.subject() ),
        'InputBased Mixin is present'
    );
});

test( 'Default property values', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'label' ),
        null,
        'Default property "label" is null'
    );

    assert.strictEqual(
        component.get( 'value' ),
        null,
        'Default property "value" is null'
    );

    assert.ok(
        this.$().hasClass( 'radio' ),
        'Component has class "radio"'
    );
});

test( 'RadioType property sets relevant class', function( assert ) {
    const component = this.subject();

    assert.notOk(
        this.$().hasClass( 'radio-inline' ),
        'Component does not have class "radio-inline" when inline property not set'
    );

    Ember.run( () => {
        component.set( 'inline', true );
    });

    assert.ok(
        this.$().hasClass( 'radio-inline' ),
        'Component has class "radio-inline" when inline property is true'
    );
});
