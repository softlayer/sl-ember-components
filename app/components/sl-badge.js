import Ember from 'ember';

/**
 * @module components
 * @class sl-badge
 */
export default Ember.Component.extend({

    /**
     * Class name bindings for the badge's span component
     * @property {array} classNameBindings
     */
    classNameBindings: [ 'pullRight:pull-right' ],

    /**
     * Class names for the badge's span component
     * @property {array} classNames
     */
    classNames: [ 'badge', 'sl-badge' ],

    /**
     * Whether to force the badge to the right of the containing element
     * @property {boolean} pullRight
     * @default false
     */
    pullRight: false,

    /**
     * Name of the component element's tag
     * @property {string} tagName
     * @default "span"
     */
    tagName: 'span'
});
