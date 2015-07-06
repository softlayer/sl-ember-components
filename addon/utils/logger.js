import Ember from 'ember';

export function error( message ) {
    Ember.Logger.error( message );
    return false;
}

export function warn( message ) {
    Ember.Logger.warn( message );
    return true;
}
