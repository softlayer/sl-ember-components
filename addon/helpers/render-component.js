import Ember from 'ember';

/**
 * render-component will render the component stored in the variable that is
 * passed to this help as the first argument.  Bound properties can be passed
 * to the component in the normal fashion.
 *
 * Ex:
 * {{render-component somecontext.componentVar foo=bar doo=car }}
 *
 * where componentVar might hold the string: 'sl-grid-table-cell-link'
 */
export default function ( componentPath ) {
    var options = arguments[ arguments.length - 1 ],
        component = Ember.Handlebars.get( this, componentPath, options ),
        helper = Ember.Handlebars.resolveHelper( options.data.view.container, component );

    helper.call( this, options );
}
