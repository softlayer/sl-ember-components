import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-tooltip', 'Integration | Component | sl tooltip', {
    integration: true
});

test( '"Title" capabilities are supported', function( assert ) {
    this.set( 'title', 'test title' );

    this.render( hbs`
        {{sl-tooltip title=title}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).attr( 'data-original-title' ),
        this.get( 'title' ),
        'Title prop supported'
    );
});

test( '"Popover" capabilities are supported', function( assert ) {
    this.set( 'popover', 'Popover content' );
    this.set( 'title', 'test title' );

    this.render( hbs`
        {{sl-tooltip title=title popover=popover}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).data( 'bs.popover' ).options.content,
        this.get( 'popover' ),
        'Popover capabilites are supported'
    );
});

test( '"dataTrigger" click action renders "popover" successfully', function( assert ) {
    this.set( 'title', 'to get past undefined check' );
    this.set( 'popover', 'Popover content' );
    this.set( 'dataTrigger', 'click' );
    this.set( 'tagName', 'u' );

    this.render( hbs`
        {{sl-tooltip title=title popover=popover tagName=tagName dataTrigger=dataTrigger}}
    ` );

    assert.notOk(
        this.$( '>:first-child' ).attr( 'aria-describedby' ),
        '"Popover" is not rendered'
    );

    this.$( '>:first-child' ).click();

    assert.ok(
        this.$( '>:first-child' ).attr( 'aria-describedby' ),
        'Click action successfully renders "popover"'
    );
});

test( '"dataTrigger" hover action renders "popover" successfully', function( assert ) {
    this.set( 'title', 'to get past undefined check' );
    this.set( 'popover', 'Popover content' );
    this.set( 'dataTrigger', 'hover' );
    this.set( 'tagName', 'u' );

    this.render( hbs`
        {{sl-tooltip title=title popover=popover tagName=tagName dataTrigger=dataTrigger}}
    ` );

    assert.notOk(
        this.$( '>:first-child' ).attr( 'aria-describedby' ),
        '"Popover" is not rendered'
    );

    this.$( '>:first-child' ).trigger( 'mouseenter' );

    assert.ok(
        this.$( '>:first-child' ).attr( 'aria-describedby' ),
        'Hover successfully renders "popover"'
    );
});

test( '"dataTrigger" focus action renders "popover" successfully', function( assert ) {
    this.set( 'title', 'to get past undefined check' );
    this.set( 'popover', 'Popover content' );
    this.set( 'dataTrigger', 'focus' );
    this.set( 'tagName', 'u' );

    this.render( hbs`
        {{sl-tooltip title=title popover=popover tagName=tagName dataTrigger=dataTrigger}}
    ` );

    assert.notOk(
        this.$( '>:first-child' ).attr( 'aria-describedby' ),
        '"Popover" is not rendered'
    );

    this.$( '>:first-child' ).focus( function() {
        assert.ok(
            this.$( '>:first-child' ).attr( 'aria-describedby' ),
            'focus successfully renders "popover"'
        );
    });
});

test( '"dataTrigger" "focus | hover | click"  action renders "popover" successfully', function( assert ) {
    this.set( 'title', 'to get past undefined check' );
    this.set( 'popover', 'Popover content' );
    this.set( 'dataTrigger', 'focus hover click' );
    this.set( 'tagName', 'u' );

    this.render( hbs`
        {{sl-tooltip title=title popover=popover tagName=tagName dataTrigger=dataTrigger}}
    ` );

    this.$( '>:first-child' ).focus( function() {
        assert.ok(
            this.$( '>:first-child' ).attr( 'aria-describedby' ),
            'Focus successfully renders "popover"'
        );
    });

    this.$( '>:first-child' ).click();

    assert.ok(
        this.$( '>:first-child' ).attr( 'aria-describedby' ),
        'Click successfully renders "popover"'
    );

    this.$( '>:first-child' ).trigger( 'mouseenter' );

    assert.ok(
        this.$( '>:first-child' ).attr( 'aria-describedby' ),
        'Hover successfully renders "popover"'
    );
});
