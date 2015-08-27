import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-alert', 'Integration | Component | sl alert', {
    integration: true
});

test( 'Defaults applied correctly', function( assert ) {

    this.render( hbs`
        {{#sl-alert}}
            Default info alert
        {{/sl-alert}}
    ` );

    assert.ok(
        this.$( '.sl-alert' ).hasClass( 'alert' ),
        'Has class "alert"'
    );

    assert.ok(
        this.$( '.sl-alert' ).hasClass( 'alert-info' ),
        'Default theme class is applied'
    );

    assert.equal(
        this.$( '.sl-alert' ).attr( 'role' ),
        'alert',
        'ARIA role is applied'
    );

    assert.equal(
        this.$( '.sl-alert button' ).length,
        0,
        'Dismissable button was not set on default component'
    );
});

test( 'Theme properties applied correctly', function( assert ) {

    this.render( hbs`
        {{#sl-alert theme="info"}}
            Info alert
        {{/sl-alert}}
    ` );

    assert.ok(
        this.$( '.sl-alert' ).hasClass( 'alert-info' ),
        'Info theme class is applied'
    );

    this.render( hbs`
        {{#sl-alert theme="success"}}
            Success alert
        {{/sl-alert}}
    ` );

    assert.ok(
        this.$( '.sl-alert' ).hasClass( 'alert-success' ),
        'Success theme class is applied'
    );

    this.render( hbs`
        {{#sl-alert theme="warning"}}
            Warning alert
        {{/sl-alert}}
    ` );

    assert.ok(
        this.$( '.sl-alert' ).hasClass( 'alert-warning' ),
        'Warning theme class is applied'
    );

    this.render( hbs`
        {{#sl-alert theme="danger"}}
            Danger alert
        {{/sl-alert}}
    ` );

    assert.ok(
        this.$( '.sl-alert' ).hasClass( 'alert-danger' ),
        'Danger theme class is applied'
    );
});

test( 'Dismissable Button is rendered when set', function( assert ) {

    this.render( hbs`
        {{#sl-alert dismissable=true}}
            Default info alert with dismissable
        {{/sl-alert}}
    ` );

    assert.equal(
        this.$( '.sl-alert button' ).length,
        1,
        'Dismissable button was rendered'
    );
});

test( 'Dismiss Action is called on button click', function( assert ) {

    const dismissAction = () => {
        assert.ok( 'A dismiss action was called' );

        assert.strictEqual(
            this.$( '.sl-alert' ).hasClass( 'alert-dismissable' ),
            true,
            'Component has alert-dismissable class'
        );
    };

    this.render( hbs`
        {{#sl-alert dismissable=true dismiss='dismissAction'}}
            Dismissable is true with dismiss action
        {{/sl-alert}}
    ` );

    const $button = this.$( '.sl-alert button' );
    this.on( 'dismissAction', dismissAction );
    $button.click();
});

test( 'Dismiss Action is not possible when dismissable is false', function( assert ) {

    this.render( hbs`
        {{#sl-alert dismiss='dismissAction'}}
            Dismissable is false with dismiss action
        {{/sl-alert}}
    ` );

    assert.equal(
        this.$( '.sl-alert button' ).length,
        0,
        'Dismissable button was not rendered'
    );

    assert.strictEqual(
        this.$( '.sl-alert' ).hasClass( 'alert-dismissable' ),
        false,
        'Component does not indicate dismissable'
    );
});
