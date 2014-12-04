import Ember from 'ember';
import slregisterTestHelpers from './sl/register-test-helpers';
import Application from '../../app';
import Router from '../../router';
import config from '../../config/environment';

export default function startApp(attrs) {
  var App;

  var attributes = Ember.merge({}, config.APP);
  attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

  Ember.run(function() {
    App = Application.create(attributes);
    App.setupForTesting();
    slregisterTestHelpers();
    App.injectTestHelpers();
  });

  return App;
}
