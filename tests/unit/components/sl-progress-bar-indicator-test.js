import { moduleForComponent, test } from 'ember-qunit';
import CspStyleMixin from 'ember-cli-csp-style/mixins/csp-style';

moduleForComponent( 'sl-progress-bar-indicator', 'Unit | Component | sl progress bar indicator', {
    unit: true
});

test( 'Expected Mixins are present', function( assert ) {
    assert.ok(
        CspStyleMixin.detect( this.subject() ),
        'CspStyle Mixin is present'
    );
});

test( 'Default property values', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'ariaValueMin' ),
        0,
        'ariaValueMin: 0'
    );

    assert.strictEqual(
        component.get( 'ariaValueMax' ),
        100,
        'ariaValueMax: 100'
    );

    assert.strictEqual(
        component.get( 'role' ),
        'progressbar',
        'role: "progressbar"'
    );
});
