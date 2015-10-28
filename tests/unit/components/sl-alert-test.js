import { moduleForComponent, test } from 'ember-qunit';
import TooltipEnabledMixin from 'sl-ember-components/mixins/sl-tooltip-enabled';

moduleForComponent( 'sl-alert', 'Unit | Component | sl alert', {
    unit: true
});

test( 'Expected Mixins are present', function( assert ) {
    assert.ok(
        TooltipEnabledMixin.detect( this.subject() ),
        'TooltipEnabled Mixin is present'
    );
});

test( 'themeClassName() returns expected value', function( assert ) {
    const testThemeValue = 'testTheme';
    const component = this.subject({
        theme: testThemeValue
    });

    assert.strictEqual(
        component.get( 'themeClassName' ),
        `alert-${testThemeValue}`,
        'themeClassName() returns expected value'
    );
});

test( 'Dependent keys are correct', function( assert ) {
    const component = this.subject();

    const themeClassNameDependentKeys = [
        'theme'
    ];

    assert.deepEqual(
        component.themeClassName._dependentKeys,
        themeClassNameDependentKeys,
        'Dependent keys are correct for themeClassName()'
    );
});
