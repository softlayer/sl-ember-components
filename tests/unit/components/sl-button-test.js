import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-button', 'Unit | Component | sl button', {
    unit: true
});

test( 'Button supports click event bubbling', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.click(),
        true,
        'Button bubbles click events by default'
    );

    component.set( 'bubbles', false );

    assert.strictEqual(
        component.click(),
        false,
        'Button click event will not propagate when bubbles is false'
    );
});
