import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-select', 'Integration | Component | sl select', {
    integration: true
});

test( 'name applies property to input', function( assert ) {
    this.render( hbs`
        {{#sl-select}}
        {{/sl-select}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'input' ).prop( 'name' ),
        '',
        'Rendered input has empty name'
    );

    this.render( hbs`
        {{#sl-select name="testname"}}
        {{/sl-select}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'input' ).prop( 'name' ),
        'testname',
        'Rendered input has name set'
    );
});
