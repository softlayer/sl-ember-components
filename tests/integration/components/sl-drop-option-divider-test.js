import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-drop-option-divider', 'Integration | Component | sl drop option divider', {
    integration: true
});

test( 'Default rendered state', function( assert ) {
    this.render( hbs`
        {{sl-drop-option-divider}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'divider' ),
        'Rendered component initially has class "divider"'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).attr( 'role' ),
        'separator',
        'ARIA role is properly set to "menuitem"'
    );
});
