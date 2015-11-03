import { moduleForComponent, test } from 'ember-qunit';
import TooltipEnabledMixin from 'sl-ember-components/mixins/sl-tooltip-enabled';

moduleForComponent( 'sl-tooltip', 'Unit | Component | sl tooltip', {
    unit: true
});

test( 'Expected Mixin is present', function( assert ) {
    assert.ok(
        TooltipEnabledMixin.detect( this.subject( { title: 'Tooltip Text' } ) ),
        'Expected Mixin is present'
    );
});

test( 'Default values are correct', function( assert ) {
    const component = this.subject( { title: 'Tooltip Text' } );

    assert.equal(
        component.get( 'tagName' ),
        'span'
    );
});
