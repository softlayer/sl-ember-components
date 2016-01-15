import Ember from 'ember';
import config from 'ember-get-config';

export default Ember.Mixin.create({
    init() {
        this._super( ...arguments );

        let componentClass = `${config.componentClassPrefix}-${this.componentClass}`;
        this.classNames.push( componentClass );
    }

});
