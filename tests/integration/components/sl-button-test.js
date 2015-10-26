import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-button', 'Integration | Component | sl button', {
    integration: true
});

const template = hbs`
    {{#sl-button}}
        Default Text
    {{/sl-button}}
`;

test( 'Default action is triggered when element is clicked', function( assert ) {
    assert.expect( 1 );

    this.on( 'externalAction', () => {
        assert.ok(
            true,
            'External action was called'
        );
    });

    this.render( hbs`
        {{#sl-button action="externalAction"}}
            Default Text
        {{/sl-button}}
    ` );

    this.$( '>:first-child' ).click();
});

test( 'Default rendered state', function( assert ) {
    this.render( template );

    const element = this.$( '>:first-child' );
    const classes = [ 'btn-xs', 'btn-sm', 'btn-lg' ];
    const noSizeClassByDefault = classes.every( cls => !element.hasClass( cls ) );

    assert.ok(
        element.hasClass( 'btn' ),
        'Has class "btn"'
    );

    assert.ok(
        element.hasClass( 'sl-button' ),
        'Has class "sl-button"'
    );

    assert.ok(
        element.hasClass( 'btn-default' ),
        'Has default theme class'
    );

    assert.ok(
        noSizeClassByDefault,
        'No size class is applied by default'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).is( ':disabled' ),
        false,
        'Component is enabled by default'
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

test( 'Class property is supported', function( assert ) {
    this.render( hbs`
        {{#sl-button class="testClass"}}
           Test Button
        {{/sl-button}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'testClass' )
    );
});

test( 'Labels are correctly initialized', function( assert ) {
    const labelText = 'Test';

    this.set( 'label', labelText );
    this.render( hbs`
        {{#sl-button label=label}}
            Default Text
        {{/sl-button}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).text().trim(),
        labelText,
        'Expected label text is present'
    );
});

test( 'Correct size class is applied', function( assert ) {
    this.render( hbs`
        {{#sl-button size="large"}}
            Default Text
        {{/sl-button}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'btn-lg' ),
        'Has expected class "btn-lg"'
    );
});

test( 'Theme class is applied correctly', function( assert ) {
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

test( 'Label is correct for pending state', function( assert ) {
    const pendingLabelText = 'Pending';
    const changedPendingLabelText = 'Changed pending label text';
    const staticText = 'Static';

    this.set( 'staticText', staticText );

    this.render( hbs`
        {{#sl-button}}
            {{staticText}}
        {{/sl-button}}
    ` );

    assert.strictEqual(
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

    assert.strictEqual(
        this.$( '>:first-child' ).text().trim(),
        pendingLabelText,
        'Pending text is set while pending'
    );

    this.set( 'pendingLabel', changedPendingLabelText );

    assert.strictEqual(
        this.$( '>:first-child' ).text().trim(),
        changedPendingLabelText,
        'Pending label text is set correctly when updated dynamically'
    );
});

test( 'Pending class is present when in pending state', function( assert ) {
    this.render( hbs`
        {{#sl-button pendingLabel="pending" pending=true}}
            Default Text
        {{/sl-button}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'pending' )
    );
});

test( 'Tooltip properties are set correctly when title parameter is set', function( assert ) {
    const title = 'test title';

    this.set( 'title', title );

    this.render( hbs`
        {{#sl-button title=title}}
            default text
        {{/sl-button}}
    ` );

    const element = this.$( '>:first-child' );
    const data = element.data();
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
        {{#sl-button title=title popover=popover}}
            default text
        {{/sl-button}}
    ` );

    const element = this.$( '>:first-child' );
    const data = element.data();
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
