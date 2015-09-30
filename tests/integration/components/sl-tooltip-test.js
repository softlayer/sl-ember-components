import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-tooltip', 'Integration | Component | sl tooltip', {
    integration: true
});

/**
 * Ensures that the template is wrapping the content in a span tag and not in
 * any block-level tags. While it appears that core Ember functionality is being
 * tested this test is ensuring that the implied contract about how this UI
 * component is rendered into the DOM is adhered to.
 */
test( 'Renders as a span tag with no classes', function( assert ) {
    this.set( 'popover', 'Popover content' );
    this.set( 'title', 'Popover Text' );

    this.render( hbs`
        {{sl-tooltip title=title popover=popover}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).prop( 'tagName' ),
        'SPAN',
        '"tagName" property renders successfully'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).prop( 'class' ),
        'ember-view',
        'Default class of ember-view renders successfully'
    );
});