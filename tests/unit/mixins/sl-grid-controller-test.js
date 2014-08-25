import Ember from 'ember';
import SlGridControllerMixin from 'sl-components/mixins/sl-grid-controller';

module('SlGridControllerMixin');

// Replace this with your real tests.
test('it works', function() {
  var SlGridControllerObject = Ember.Object.extend(SlGridControllerMixin);
  var subject = SlGridControllerObject.create();
  ok(subject);
});
