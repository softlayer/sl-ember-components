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

test( 'Width property is set on the internal chart', function( assert ) {
    let width = 100;

    this.set( 'testseries', [] );
    this.set( 'testoptions', {} );
    this.set( 'width', width );

    this.render( hbs`
        {{sl-chart series=testseries options=testoptions width=width}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '> .panel-body > div' ).width(),
        width,
        'Chart div has correct width by default'
    );

    width = 50;
    this.set( 'width', width );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '> .panel-body > div' ).width(),
        width,
        'Chart div width updates correctly'
    );
});

test( 'Height property is set on the internal chart', function( assert ) {
    let height = 100;

    this.set( 'testseries', [] );
    this.set( 'testoptions', {} );
    this.set( 'height', height );

    this.render( hbs`
        {{sl-chart series=testseries options=testoptions height=height}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '> .panel-body > div' ).height(),
        height,
        'Chart div has correct height by default'
    );

    height = 50;
    this.set( 'height', height );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '> .panel-body > div' ).height(),
        height,
        'Chart div height updates correctly'
    );
});
