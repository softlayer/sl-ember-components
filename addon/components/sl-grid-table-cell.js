import Ember from 'ember';

/** @module sl-components/components/sl-grid-table-cell */
export default Ember.Component.extend({

    /**
     * HTML tag name for the base element
     *
     * @property {string}       tagName
     * @type     {Ember.String}
     * @default  "td"
     */
    tagName: 'td',

    /**
     * Class name bindings for the root element
     *
     * @property {array}       classNameBindings
     * @type     {Ember.Array}
     */
    classNameBindings: [ 'cssClass' ]
});
