import Ember from 'ember';

/**
 * Render the component stored in the variable that is passed to this helper as
 * the first argument. Bound properties can be passed to the component in the
 * normal fashion.
 *
 * @example
 * {{render-component 'sl-grid-table-cell-link' foo=bar doo=car }}
 *
 * @module   helpers
 * @function render-component
 * @param    {string} componentPath - Lookup path for the component name
 * @returns  {string} The rendered component
 */
export default function( componentPath ) {
    var options   = arguments[ arguments.length - 1 ],
        component = Ember.Handlebars.get( this, componentPath, options ),
        helper    = Ember.Handlebars.resolveHelper( options.data.view.container, component );

    helper.call( this, options );
}
