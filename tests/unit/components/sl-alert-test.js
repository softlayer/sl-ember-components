import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-alert', 'Unit | Component | sl alert', {
    unit: true
});

test( 'Dependent keys are correct', function( assert ) {
    const component = this.subject();

    const themeClassNameDependentKeys = [
        'theme',
    ];

    assert.deepEqual(
        component.themeClassName._dependentKeys,
        themeClassNameDependentKeys,
        'Dependent keys are correct for themeClassName()'
    );
});