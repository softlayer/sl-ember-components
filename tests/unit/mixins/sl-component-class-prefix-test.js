import Ember from 'ember';
import SlComponentClassPrefixMixin from '../../../mixins/sl-component-class-prefix';
import { module, test } from 'qunit';

module('Unit | Mixin | sl component class prefix');

// Replace this with your real tests.
test('it works', function(assert) {
  var SlComponentClassPrefixObject = Ember.Object.extend(SlComponentClassPrefixMixin);
  var subject = SlComponentClassPrefixObject.create();
  assert.ok(subject);
});
