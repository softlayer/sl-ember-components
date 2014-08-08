import Ember from 'ember';
import SlUserPreferencesMixin from 'sl-components/mixins/sl-user-preferences';

module('SlUserPreferencesMixin');

// Replace this with your real tests.
test('it works', function() {
  var SlUserPreferencesObject = Ember.Object.extend(SlUserPreferencesMixin);
  var subject = SlUserPreferencesObject.create();
  ok(subject);
});
