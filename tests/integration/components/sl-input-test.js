import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { skip } from 'qunit';

moduleForComponent( 'sl-input', 'Integration | Component | sl input', {
    integration: true
});

test( 'Default rendered state', function( assert ) {
    this.render( hbs`
        {{sl-input}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-ember-components-input' ),
        'Has class "sl-ember-components-input"'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).attr( 'data-trigger' ),
        'focus',
        'dataTrigger defaults to focus'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'input' ).prop( 'type' ),
        'text',
        'type defaults to text'
    );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'form-group' ),
        'Has class "form-group"'
    );

    assert.ok(
        this.$( '>:first-child' ).find( 'input' ).hasClass( 'form-control' ),
        'Has class "form-control"'
    );
});

test( 'Label is supported', function( assert ) {
    this.render( hbs`
        {{sl-input label="Test label"}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).find( 'label' ).hasClass( 'control-label' ),
        'Has class "control-label"'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.control-label' ).text().trim(),
        'Test label',
        'control-label is rendered when label is set'
    );
});

test( 'for attribute value on label matches id of input', function( assert ) {
    this.render( hbs`
        {{sl-input label="test label"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'label' ).attr( 'for' ),
        this.$( '>:first-child' ).find( 'input' ).attr( 'id' ),
        'for value matches id of input'
    );
});

test( 'Optional property is supported', function( assert ) {
    this.render( hbs`
        {{sl-input label="Optional" optional="true"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.text-info' ).length,
        1,
        '"optional" property sets class "text-info"'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.text-info' ).text().trim(),
        'Optional',
        'text-info renders optional when optional is set'
    );
});

test( 'Required property is supported', function( assert ) {
    this.render( hbs`
        {{sl-input label="Required" required="true"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.text-danger' ).length,
        1,
        '"required" property sets class "text-danger"'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.text-danger' ).text().trim(),
        'Required',
        'text-danger renders required when required is set'
    );
});

test( 'type property is supported', function( assert ) {
    this.render( hbs`
        {{sl-input type="email"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'input' ).prop( 'type' ),
        'email',
        'type property is supported'
    );
});

test( 'Click to edit input has the correct class', function( assert ) {
    this.render( hbs`
        {{sl-input clickToEdit="true"}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).find( 'input' ).hasClass( 'click-to-edit' ),
        'click-to-edit class is present upon clickToEdit set to true'
    );
});

test( 'disabled property is supported', function( assert ) {
    this.render( hbs`
        {{sl-input disabled="true"}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).find( 'input' ).prop( 'disabled' ),
        'disabled property is supported'
    );
});

test( 'Help text is displayed', function( assert ) {
    this.render( hbs`
        {{sl-input helpText="help text"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.help-block' ).length,
        1,
        '"helpText" property sets class "help-block"'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.help-block' ).text().trim(),
        'help text',
        'help-block renders helpText when helpText is set'
    );
});

test( 'Placeholder property is supported', function( assert ) {
    this.render( hbs`
        {{sl-input placeholder="placeholder"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'input' ).prop( 'placeholder' ),
        'placeholder',
        'Placeholder text is rendered'
    );
});

test( 'Readonly property is supported', function( assert ) {
    this.render( hbs`
        {{sl-input readonly="true"}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).find( 'input' ).prop( 'readonly' ),
        'readonly is set when readonly is true'
    );
});

test( 'Typeahead classes are present', function( assert ) {
    const colors = [
        'Black',
        'Yellow'
    ];

    this.set( 'suggestions', colors );

    this.render( hbs`
        {{sl-input suggestions=suggestions}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.twitter-typeahead' ).length,
        1,
        'twitter-typeahead class exists'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.typeahead' ).length,
        2,
        'typeahead class exists'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.tt-input' ).length,
        1,
        'tt-input class exists'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.tt-menu' ).length,
        1,
        'tt-menu class exists'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.tt-dataset' ).length,
        1,
        'tt-dataset class exists'
    );
});

test( 'name property is supported', function( assert ) {
    this.render( hbs`
        {{sl-input name="testname"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'input' ).prop( 'name' ),
        'testname',
        'Rendered input has name set'
    );
});

test( 'name applies property to input', function( assert ) {
    this.render( hbs`
        {{sl-input name="testname"}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'input' ).prop( 'name' ),
        'testname',
        'Rendered input has name set'
    );
});

test( 'Tooltip properties are set correctly when title parameter is set', function( assert ) {
    const title = 'test title';

    this.set( 'title', title );

    this.render( hbs`
        {{sl-input title=title}}
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
        'focus',
        'Default trigger is "hover focus"'
    );
});

test( 'Popover properties are set correctly when popover parameter is set', function( assert ) {
    const title = 'test title';
    const popover = 'popover text';

    this.set( 'title', title );
    this.set( 'popover', popover );

    this.render( hbs`
        {{sl-input popover=popover}}
    ` );

    let data = this.$( '>:first-child' ).data();
    let popoverData = data[ 'bs.popover' ];

    assert.strictEqual(
        popoverData.enabled,
        true,
        'Popover is enabled'
    );

    this.render( hbs`
        {{sl-input title=title popover=popover}}
    ` );

    data = this.$( '>:first-child' ).data();
    popoverData = data[ 'bs.popover' ];
    const options = popoverData.getOptions();

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
        'focus',
        'Default trigger is "focus"'
    );
});

skip( 'Typeahead "suggestionNamePath" sets key for suggestions object', function() {
});

skip( 'Typeahead "value" prop is set upon selection of typeahead results', function() {
});
