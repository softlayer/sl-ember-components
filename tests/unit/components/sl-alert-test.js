import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-alert', 'Unit | Component | sl alert', {
    unit: true
});

test( 'themeClassName computed property is observing the correct properties', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.themeClassName._dependentKeys.join(),
        'theme',
        'themeClassName computed property observes the correct properties'
    );
});
