import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

moduleForComponent( 'sl-button', 'Integration | Component | sl button', {
    integration: true
});

const mockStreamService = {
    send() {}
};

const template = hbs`
    {{#sl-button}}
        Default Text
    {{/sl-button}}
`;

/**
 * While it appears that core Ember functionality is being tested this test is
 * ensuring that the implied contract about which DOM element is rendered is
 * adhered to.
 */

test( 'Renders as a button tag', function( assert ) {
    this.render( template );

    assert.equal(
        this.$( '>:first-child' ).length,
        1,
        'button tag was rendered'
    );
});

test( 'Default action is triggered when element is clicked event when clicked', function( assert ) {
    assert.expect( 1 );

    const externalAction = () => {
        assert.ok(
            true,
            'External action was called'
        );
    };

    this.on( 'externalAction', externalAction );

    this.render( hbs`
        {{#sl-button action="externalAction"}}
            Default Text
        {{/sl-button}}
    ` );

    this.$( '>:first-child' ).click();
});

test( 'Button is enabled by default', function( assert ) {
    this.render( template );

    assert.strictEqual(
        this.$().is( ':disabled' ),
        false,
        'Component is disabled by default'
    );
});

test( 'Button is disabled when disabled is set to true', function( assert ) {
    this.render( hbs`
        {{#sl-button disabled=true}}
            Default Text
        {{/sl-button}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).is( ':disabled' ),
        true,
        'Component becomes disabled'
    );
});

test( 'Expected default classes are applied', function( assert ) {
    this.render( template );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'btn' ),
        'Has class "btn"'
    );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-button' ),
        'Has class "sl-button"'
    );
});

test( 'Labels are correctly initialized', function( assert ) {
    this.render( hbs`
        {{#sl-button label="Test"}}
            Default Text
        {{/sl-button}}
    ` );

    assert.equal(
        this.$( '>:first-child' ).text().trim(),
        'Test',
        'Expected label is present as text'
    );
});

test( 'Correct size class is set', function( assert ) {
    this.render( hbs`
        {{#sl-button size="large"}}
            Default Text
        {{/sl-button}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'btn-lg' ),
        'Has expected class "btn-lg"'
    );

    this.render( hbs`
        {{#sl-button size="small"}}
            Default Text
        {{/sl-button}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'btn-sm' ),
        'Has expected class "btn-sm"'
    );

    this.render( hbs`
        {{#sl-button size="extra-small"}}
            Default Text
        {{/sl-button}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'btn-xs' ),
        'Has expected class "btn-xs"'
    );
});

test( 'Theme class is set correctly', function( assert ) {
    this.render( hbs`
        {{#sl-button theme="success"}}
            Default Text
        {{/sl-button}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'btn-success' ),
        'Has expected class "btn-success"'
    );
});

test( 'Label changes for pending state', function( assert ) {
    const pendingLabelText = 'Pending';
    const staticText = 'Static';

    this.set( 'staticText', staticText );

    this.render( hbs`
        {{#sl-button}}
            {{staticText}}
        {{/sl-button}}
    ` );

    assert.equal(
        this.$( '>:first-child' ).text().trim(),
        staticText,
        'Static text is set initially'
    );

    this.set( 'pendingLabel', pendingLabelText );

    this.render( hbs`
        {{#sl-button pendingLabel=pendingLabel pending=true}}
            Default Text
            {{staticText}}
        {{/sl-button}}
    ` );

    assert.equal(
        this.$( '>:first-child' ).text().trim(),
        pendingLabelText,
        'Pending text is set while pending'
    );
});

test( 'showModalWithStreamName property triggers modal to open', function( assert ) {
    const sendSpy = sinon.spy( mockStreamService, 'send' );

    this.set( 'streamService', mockStreamService );

    this.render( hbs`
        {{#sl-button showModalWithStreamName="test" streamService=streamService}}
            Default Text
        {{/sl-button}}
    ` );

    this.$( '>:first-child' ).trigger( 'click' );

    assert.ok(
        sendSpy.called,
        'The send() method of the mock stream service was called'
    );
});
