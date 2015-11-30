import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-chart', 'Integration | Component | sl chart', {
    integration: true
});

test( 'Default rendered state', function( assert ) {
    this.set( 'testseries', [] );
    this.set( 'testoptions', {} );

    this.render( hbs`
        {{sl-chart series=testseries options=testoptions}}
    ` );

    assert.ok(
      this.$( '>:first-child' ).hasClass( 'chart' ),
      'has class "chart"'
    );

    assert.ok(
      this.$( '>:first-child' ).hasClass( 'sl-ember-components' ),
      'has class "sl-ember-components"'
    );

    assert.ok(
      this.$( '>:first-child' ).hasClass( 'panel' ),
      'has class "panel"'
    );

    assert.ok(
      this.$( '>:first-child' ).hasClass( 'panel-default' ),
      'has class "panel-default"'
    );
});

test( 'Loading state adds loading class', function( assert ) {
    this.set( 'testseries', [] );
    this.set( 'testoptions', {} );

    this.render( hbs`
        {{sl-chart series=testseries loading=false options=testoptions}}
    ` );

    assert.notOk(
        this.$( '>:first-child' ).find( '> .panel-body' ).hasClass( 'sl-loading' ),
        'Default rendered component does not have "sl-loading" class'
    );

    this.render( hbs`
        {{sl-chart series=testseries loading=true options=testoptions}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).find( '> .panel-body' ).hasClass( 'sl-loading' ),
        'Default rendered component does have "sl-loading" class'
    );
});

test( 'Title property is set', function( assert ) {
    this.set( 'testseries', [] );
    this.set( 'testoptions', {} );

    this.render( hbs`
        {{sl-chart series=testseries options=testoptions}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.panel-heading' ).html(),
        undefined,
        'No chart title is rendered when title is not set'
    );

    this.render( hbs`
        {{sl-chart title="Peak serve hours" series=testseries options=testoptions}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.panel-heading' ).html(),
        'Peak serve hours',
        'Chart title is created with title value'
    );
});

test( 'Chart div uses the correct style', function( assert ) {
    this.set( 'testseries', [] );
    this.set( 'testoptions', {} );

    this.render( hbs`
        {{sl-chart series=testseries options=testoptions}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '> .panel-body > div' ).attr( 'style' ),
        'height: auto; width: auto;',
        'Chart div has automatic height and width'
    );

    this.render( hbs`
        {{sl-chart series=testseries options=testoptions height=10 width=20}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '> .panel-body > div' ).attr( 'style' ),
        'height: 10; width: 20;',
        'Chart div has height 10 and width 20'
    );
});
