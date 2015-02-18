import Ember from 'ember';
import slregisterTestHelpers from './sl/register-test-helpers';
import Application from '../../app';
import Router from '../../router';
import config from '../../config/environment';

export default function startApp(attrs) {
  var application;

  var attributes = Ember.merge({}, config.APP);
  attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

  Ember.run(function() {
    application = Application.create(attributes);
    application.setupForTesting();
    slregisterTestHelpers();
    application.injectTestHelpers();
  });

  return application;
}
