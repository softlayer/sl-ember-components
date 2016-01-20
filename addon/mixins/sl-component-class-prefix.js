import Ember from 'ember';
import config from 'ember-get-config';

export default Ember.Mixin.create({
    init() {
        this._super( ...arguments );
        this.classNames.push( this.getComponentClassName() );
    },

    getComponentClassName() {
        return `${config.componentClassPrefix}-${this.componentClass}`;
    }
});
