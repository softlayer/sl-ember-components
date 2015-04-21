import Ember from 'ember';

/**
 * @module helpers
 */

/**
 * Render a split-grid table cell based on relevant split-grid view settings
 *
 * @function grid-cell
 * @param {Object} env - The environment context object
 * @returns {undefined}
 */
export default function( env ) {
    var column       = Ember.get( env, 'data.view._keywords.column' ),
        row          = Ember.get( env, 'data.view._keywords.row' ),
        templateName = Ember.get( column, 'template' ),
        valuePath    = Ember.get( column, 'valuePath' ),
        modelValue   = Ember.get( row, `model.${valuePath}` );

    if ( valuePath ) {
        return new Ember.Handlebars.SafeString(
            modelValue || Ember.get( row, valuePath )
        );
    }

    Ember.Handlebars.helpers.render.helperFunction( templateName, row, env );
}
