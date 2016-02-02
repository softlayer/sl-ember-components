import { moduleForComponent, test } from 'ember-qunit';
import TooltipEnabledMixin from 'sl-ember-components/mixins/sl-tooltip-enabled';
import { Theme } from 'sl-ember-components/components/sl-alert';
import sinon from 'sinon';
import globalLibraries from '../../helpers/sl/synchronous/global-libraries';

moduleForComponent( 'sl-alert', 'Unit | Component | sl alert', {
    unit: true
});

test( 'Expected Mixins are present', function( assert ) {
    assert.ok(
        TooltipEnabledMixin.detect( this.subject() ),
        'TooltipEnabled Mixin is present'
    );
});

test( 'Default property values are set correctly', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'ariaRole' ),
        'alert',
        'ariaRole: "alert"'
    );

    assert.strictEqual(
        component.get( 'dismissable' ),
        false,
        'dismissable: false'
    );

    assert.strictEqual(
        component.get( 'theme' ),
        Theme.INFO,
        `theme: "${Theme.INFO}"`
    );
});

test( 'Bound "dismiss" action is triggered when dismiss action is triggered', function( assert ) {
    const component = this.subject();
    const spy = sinon.spy( component, 'sendAction' );

    component.send( 'dismiss' );

    assert.strictEqual(
        spy.args[0].join(),
        'dismiss',
        'Bound "dismiss" action is triggered when dismiss action is triggered'
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

test( 'There are no references to Ember.$, $ or jQuery', function( assert ) {
    globalLibraries.setupSpies();

    const component = this.subject();

    this.render();

    globalLibraries.triggerEvents( component );

    assert.notOk(
        globalLibraries.called()
    );

    globalLibraries.restoreSpies();
});
