import Ember from 'ember';

export default function( message ) {
    Ember.Logger.warn( message );
    return true;
}
