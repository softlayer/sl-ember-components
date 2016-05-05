import config from 'ember-get-config';

export default function( componentClass ) {
    return `${config.componentClassPrefix}-${componentClass}`;
}
