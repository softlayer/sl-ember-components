import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-tab-pane', 'Integration | Component | sl tab pane', {
    integration: true
});

test( 'Default rendered state', function( assert ) {

    this.render( hbs`
        {{sl-tab-pane}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-tab-pane' ),
        'Has class "sl-tab-pane"'
    );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'tab-pane' ),
        'Has class "tab-pane"'
    );
});

test( '"data-tab-label" attribute gets set as expected', function( assert ) {

    const label = 'Test Label';
    this.set( 'labelTest', label );

    this.render( hbs`
        {{sl-tab-pane
            label=labelTest
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).attr( 'data-tab-label' ),
        label,
        'Data tab label is set properly'
    );
});

test( '"data-tab-name" attribute gets set as expected', function( assert ) {

    const name = 'Test Name';
    this.set( 'nameTest', name );

    this.render( hbs`
        {{sl-tab-pane
            name=nameTest
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).attr( 'data-tab-name' ),
        name,
        'Data tab name is set properly'
    );
});

test( 'Yielded content passes through', function( assert ) {

    this.render( hbs`
        {{#sl-tab-pane}}
            A content
        {{/sl-tab-pane}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).text().trim(),
        'A content',
        'Expected content is present'
    );
});
