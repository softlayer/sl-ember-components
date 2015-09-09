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
});

test( 'Inline property sets relevant class', function( assert ) {
    this.subject({ inline: true });

    assert.ok(
        this.$().hasClass( 'radio-inline' ),
        'has class "radio-inline"'
    );
});
