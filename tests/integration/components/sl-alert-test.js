import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-alert', 'Integration | Component | sl alert', {
    integration: true
});

test( 'Default rendered state', function( assert ) {

    this.render( hbs`
        {{#sl-alert}}
            Default info alert
        {{/sl-alert}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'alert' ),
        'Has class "alert"'
    );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'alert-info' ),
        'Default theme class is applied'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).attr( 'role' ),
        'alert',
        'ARIA role is applied'
    );
});

test( 'Theme property is supported', function( assert ) {

    this.render( hbs`
        {{#sl-alert theme="testValue"}}
            Warning alert
        {{/sl-alert}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'alert-testValue' ),
        'Warning theme class is applied'
    );
});

test( 'Dismissable Button is rendered when set', function( assert ) {

    this.render( hbs`
        {{#sl-alert dismissable=true}}
            Default info alert with dismissable
        {{/sl-alert}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'button' ).length,
        1,
        'Dismissable button was rendered'
    );
});

test( 'Dismiss Action is called on button click', function( assert ) {

    const dismissAction = () => {
        assert.ok(
            true,
            'A dismiss action was called'
        );

        assert.strictEqual(
            this.$( '>:first-child' ).hasClass( 'alert-dismissable' ),
            true,
            'Component has alert-dismissable class'
        );
    };

    this.render( hbs`
        {{#sl-alert dismissable=true dismiss="dismissAction"}}
            Dismissable is true with dismiss action
        {{/sl-alert}}
    ` );

    const button = this.$( '>:first-child' ).find( 'button' );
    this.on( 'dismissAction', dismissAction );
    button.click();
});

test( 'Dismiss Action is not possible when dismissable is false', function( assert ) {

    this.render( hbs`
        {{#sl-alert dismiss="dismissAction"}}
            Dismissable is false with dismiss action
        {{/sl-alert}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'button' ).length,
        0,
        'Dismissable button was not rendered'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).hasClass( 'alert-dismissable' ),
        false,
        'Component does not indicate dismissable'
    );
});

test( 'Tooltip properties are set correctly when title parameter is set', function( assert ) {
    const title = 'test title';

    this.set( 'title', title );

    this.render( hbs`
        {{#sl-alert title=title}}
            Default info alert
        {{/sl-alert}}
    ` );

    const data = this.$( '>:first-child' ).data();
    const tooltipData = data[ 'bs.tooltip' ];
    const options = tooltipData.getOptions();

    assert.strictEqual(
        tooltipData.enabled,
        true,
        'tooltip is enabled'
    );

    assert.strictEqual(
        tooltipData.getTitle(),
        title,
        'Title text is set correctly'
    );

    assert.strictEqual(
        options.trigger,
        'hover focus',
        'Default trigger is "hover focus"'
    );
});

test( 'Popover properties are set correctly when popover parameter is set', function( assert ) {
    const title = 'test title';
    const popover = 'popover text';

    this.set( 'title', title );
    this.set( 'popover', popover );

    this.render( hbs`
        {{#sl-alert title=title popover=popover}}
            Default info alert
        {{/sl-alert}}
    ` );

    const data = this.$( '>:first-child' ).data();
    const popoverData = data[ 'bs.popover' ];
    const options = popoverData.getOptions();

    assert.strictEqual(
        popoverData.enabled,
        true,
        'Popover is enabled'
    );

    assert.strictEqual(
        popoverData.getTitle(),
        title,
        'Popover title was set correctly'
    );

    assert.strictEqual(
        popoverData.getContent(),
        popover,
        'Popover text is set correctly'
    );

    assert.strictEqual(
        options.trigger,
        'click',
        'Default trigger is "click"'
    );
});
