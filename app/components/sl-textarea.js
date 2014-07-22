import Ember from 'ember';
import TooltipEnabled from '../mixins/tooltip-enabled';

/**
 * @module components
 * @class sl-textarea
 */
export default Ember.TextArea.extend( TooltipEnabled, {

    /**
     * Class names for the component
     * @property {array} classNames
     */
    classNames: [ 'form-control', 'sl-textarea' ]
});
