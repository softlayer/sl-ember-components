import Ember from 'ember';
import RenderComponentView from '../views/sl-render-component';

/**
 * @module helpers
 */

/**
 * Render the component stored in the variable that is passed to this helper as
 * the first argument. Bound properties can be passed to the component in the
 * normal fashion.
 *
 * @example
 * {{render-component 'sl-grid-table-cell-link' foo=bar doo=car }}
 *
 * @function render-component
 * @param    {string} componentPath - Lookup path for the component name
 * @param    {object} options - Various bindings to related objects in context
 * @returns  {string} The rendered component
 */
export default {

    helperFunction( properties, hash, options, env) {
        var path = Ember.get( properties[ 0 ], '_label' );

        hash[ 'componentName' ] = Ember.get( this, `_keywords.${path}` ),
        hash['_dynamicOptions'] = hash;

        return env.helpers.view.helperFunction.call(
            this, [ RenderComponentView ], hash, options, env
        );
    },

    isHTMLBars: true,

    preprocessArguments() {}

};
