import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { Theme as ThemeEnum } from 'sl-ember-components/components/sl-progress-bar';

moduleForComponent( 'sl-progress-bar', 'Integration | Component | sl progress bar', {
    integration: true
});

test( 'Default rendered state', function( assert ) {
    this.render( hbs`
        {{sl-progress-bar}}
    ` );

    const child = this.$( '>:first-child' );
    const grandchild = this.$( '>:first-child' ).find( '>:first-child' );

    assert.ok(
        child.hasClass( 'progress' ),
        'Has class "progress"'
    );

    assert.ok(
        child.hasClass( 'sl-progress-bar' ),
        'Has class "sl-progress-bar"'
    );

    assert.ok(
        child.hasClass( 'sl-progress-bar-low-percentage' ),
        'Has class "sl-progress-bar-low-percentage"'
    );

    assert.ok(
        grandchild.hasClass( 'progress-bar' ),
        'Has class "progress-bar"'
    );

    assert.notOk(
        grandchild.hasClass( 'progress-bar-striped' ),
        'Does not have class "progress-bar-striped"'
    );

    assert.notOk(
        grandchild.hasClass( 'active' ),
        'Does not have class "active"'
    );

    assert.ok(
        grandchild.hasClass( `progress-bar-${ThemeEnum.DEFAULT}` ),
        `Has class "progress-bar-${ThemeEnum.DEFAULT}"`
    );

    assert.strictEqual(
        grandchild.attr( 'aria-valuemin' ),
        '0',
        '"aria-valuemin" is 0'
    );

    assert.strictEqual(
        grandchild.attr( 'aria-valuemax' ),
        '100',
        '"aria-valuemax" is 100'
    );

    assert.strictEqual(
        grandchild.attr( 'aria-valuenow' ),
        '0',
        '"aria-valuenow" is 0'
    );

    assert.strictEqual(
        grandchild.attr( 'style' ),
        'width: 0%;',
        '"style" is "width: 0%;"'
    );

    assert.strictEqual(
        grandchild.attr( 'role' ),
        'progressbar',
        '"role" is "progressbar"'
    );

    assert.strictEqual(
        grandchild.find( '.sr-only' ).text().trim(),
        '0% Complete',
        'Expected visual representation when "label" property is not provided'
    );
});

test( '"value" property is supported', function( assert ) {
    this.set( 'testValue', 12 );
    this.set( 'testLabel', null );

    this.render( hbs`
        {{sl-progress-bar
            value=testValue
            label=testLabel
        }}
    ` );

    const grandchild = this.$( '>:first-child' ).find( '>:first-child' );

    assert.strictEqual(
        grandchild.attr( 'aria-valuenow' ),
        '12',
        '"aria-valuenow" is 12'
    );

    assert.strictEqual(
        grandchild.find( '.sr-only' ).text().trim(),
        '12% Complete',
        '"value" property displayed when "label" property is not provided'
    );

    this.set( 'testValue', 47 );
    this.set( 'testLabel', 'test label' );

    assert.strictEqual(
        grandchild.attr( 'aria-valuenow' ),
        '47',
        '"aria-valuenow" is 47'
    );

    assert.strictEqual(
        grandchild.find( '.sl-progress-bar-value' ).text().trim(),
        '47%',
        '"value" property displayed when "label" property is provided'
    );
});

test( '"striped" property is supported', function( assert ) {
    this.set( 'testStriped', false );

    this.render( hbs`
        {{sl-progress-bar striped=testStriped}}
    ` );

    const grandchild = this.$( '>:first-child' ).find( '>:first-child' );

    assert.notOk(
        grandchild.hasClass( 'progress-bar-striped' ),
        '"progress-bar-striped" class is not applied'
    );

    this.set( 'testStriped', true );

    assert.ok(
        grandchild.hasClass( 'progress-bar-striped' ),
        '"progress-bar-striped" class is applied'
    );
});

test( '"animated" property is supported', function( assert ) {
    this.set( 'testAnimated', false );

    this.render( hbs`
        {{sl-progress-bar animated=testAnimated}}
    ` );

    const grandchild = this.$( '>:first-child' ).find( '>:first-child' );

    assert.notOk(
        grandchild.hasClass( 'active' ),
        '"active" class is not applied'
    );

    this.set( 'testAnimated', true );

    assert.ok(
        grandchild.hasClass( 'active' ),
        '"active" class is applied'
    );
});

test( '"theme" property is supported', function( assert ) {
    this.set( 'testTheme', ThemeEnum.DEFAULT );

    this.render( hbs`
        {{sl-progress-bar theme=testTheme}}
    ` );

    const grandchild = this.$( '>:first-child' ).find( '>:first-child' );

    assert.ok(
        grandchild.hasClass( `progress-bar-${ThemeEnum.DEFAULT}` ),
        `"progress-bar-${ThemeEnum.DEFAULT}" class is applied`
    );

    this.set( 'testTheme', ThemeEnum.INFO );

    assert.ok(
        grandchild.hasClass( `progress-bar-${ThemeEnum.INFO}` ),
        `"progress-bar-${ThemeEnum.INFO}" class is applied`
    );
});

test( '"style" string is updated', function( assert ) {
    this.set( 'testValue', 12 );

    this.render( hbs`
        {{sl-progress-bar value=testValue}}
    ` );

    const grandchild = this.$( '>:first-child' ).find( '>:first-child' );

    assert.strictEqual(
        grandchild.attr( 'style' ),
        'width: 12%;',
        '"style" is "width: 12%;"'
    );

    this.set( 'testValue', 38 );

    assert.strictEqual(
        grandchild.attr( 'style' ),
        'width: 38%;',
        '"style" is "width: 38%;"'
    );
});

test( '"label" property is supported', function( assert ) {
    this.set( 'testLabel', null );

    this.render( hbs`
        {{sl-progress-bar label=testLabel}}
    ` );

    const grandchild = this.$( '>:first-child' ).find( '>:first-child' );

    assert.strictEqual(
        grandchild.find( '.sr-only' ).text().trim(),
        '0% Complete',
        'Part 1 - Expected visual representation when "label" property is not provided'
    );

    assert.strictEqual(
        grandchild.find( '.sl-progress-bar-value' ).length,
        0,
        'Part 2 - Expected visual representation when "label" property is not provided'
    );

    this.set( 'testLabel', 'test label' );

    assert.strictEqual(
        grandchild.find( '.sl-progress-bar-value' ).text().trim(),
        '0%',
        'Part 1 - Expected visual representation when "label" property is provided'
    );

    assert.strictEqual(
        grandchild.find( '.sr-only' ).length,
        0,
        'Part 2 - Expected visual representation when "label" property is provided'
    );
});

test( 'Threshold level affects rendered output', function( assert ) {
    this.set( 'testValue', 12 );

    this.render( hbs`
        {{sl-progress-bar value=testValue}}
    ` );

    const child = this.$( '>:first-child' );

    assert.ok(
        child.hasClass( 'sl-progress-bar-low-percentage' ),
        '"sl-progress-bar-low-percentage" class is applied when "value" is less than 50'
    );

    this.set( 'testValue', 50 );

    assert.notOk(
        child.hasClass( 'sl-progress-bar-low-percentage' ),
        '"sl-progress-bar-low-percentage" class is not applied when "value" is greater than 49'
    );
});

test( '"title" property is supported', function( assert ) {
    this.render( hbs`
        {{sl-progress-bar}}
    ` );

    assert.notOk(
        this.$( '>:first-child' ).attr( 'data-original-title' ),
        '"title" property is not rendered when "title" is not provided'
    );

    this.set( 'title', 'test title' );

    this.render( hbs`
        {{sl-progress-bar title=title}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).attr( 'data-original-title' ),
        this.get( 'title' ),
        '"title" property is rendered and supported'
    );
});

test( '"popover" property is supported', function( assert ) {
    this.render( hbs`
        {{sl-progress-bar}}
    ` );

    assert.notOk(
        this.$( '>:first-child' ).data( 'bs.popover' ),
        '"popover" is not rendered when "popover" is not provided'
    );

    this.set( 'popover', 'Test popover' );

    this.render( hbs`
        {{sl-progress-bar popover=popover}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).data( 'bs.popover' ).options.content,
        this.get( 'popover' ),
        '"popover" property is rendered and supported'
    );
});
