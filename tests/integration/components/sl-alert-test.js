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

test( '"dismissable" set to true', function( assert ) {

    this.render( hbs`
        {{#sl-alert dismissable=true}}
            Default info alert with dismissable
        {{/sl-alert}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).hasClass( 'alert-dismissable' ),
        true,
        'Component has alert-dismissable class'
    );

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
    };

    this.render( hbs`
        {{#sl-alert dismissable=true dismiss="dismissAction"}}
            Dismissable is true with dismiss action
        {{/sl-alert}}
    ` );

    this.on( 'dismissAction', dismissAction );
    this.$( '>:first-child' ).find( 'button' ).click();
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
