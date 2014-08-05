import Ember from 'ember';
import SlPaginationControllerMixin from 'sl-components/mixins/sl-pagination-controller';

module('SlPaginationControllerMixin');

// Replace this with your real tests.
test('it works', function() {
  var SlPaginationControllerObject = Ember.Object.extend(SlPaginationControllerMixin);
  var subject = SlPaginationControllerObject.create();
  ok(subject);
});
