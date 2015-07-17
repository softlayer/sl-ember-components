import Ember from 'ember';
import Application from '../../app';
import config from '../../config/environment';

export default function startApp( attrs ) {
    let attributes = Ember.merge( {}, config.APP );
    attributes = Ember.merge( attributes, attrs );

    let application;
    Ember.run( () => {
        application = Application.create( attributes );
        application.setupForTesting();
        application.injectTestHelpers();
    });

    return application;
}
