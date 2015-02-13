import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import TooltipEnabledMixin from 'sl-ember-components/mixins/sl-tooltip-enabled';

moduleForComponent( 'sl-tooltip', 'Unit - component: sl-tooltip' );

test( 'Expected Mixin is present', function() {
    ok( TooltipEnabledMixin.detect( this.subject() ), 'Expected Mixin is present' );
});
