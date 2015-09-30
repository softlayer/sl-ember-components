import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-date-time', 'Integration | Component | sl date time', {
    integration: true
});

test( 'Defaults applied correctly', function( assert ) {

    this.render( hbs`
        {{sl-date-time
            timezone="America/Chicago"
        }}
    ` );

    const defaultRendered = this.$( '>:first-child' ).text().trim();
    const defaultRegEx = /^[a-zA-Z]+[,]\s[a-zA-Z]+\s\d{1,2}[a-z]{2}\s\d{4}[,]\s\d{1,2}[:]\d{2}\s(AM|PM)\s[A-Z]+$/;

    assert.strictEqual(
        defaultRegEx.test( defaultRendered ),
        true,
        'Default datetime string matches default pattern'
    );

    const datetimeAttr = this.$( '>:first-child' ).attr( 'datetime' );
    const dataOriginalTitleAttr = this.$( '>:first-child' ).attr( 'data-original-title' );

    assert.strictEqual(
        datetimeAttr,
        dataOriginalTitleAttr,
        'Attributes datetime and data-original-title match'
    );

    assert.strictEqual(
        /^\d{4}[-]\d{2}[-]\d{2}\s\d{1,2}[:]\d{2}\s[A-Z]+$/.test( this.$( '>:first-child' ).attr( 'datetime' ) ),
        true,
        'Attribute datetime matches ISO datetime format plus timezone code'
    );

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
        dataOriginalTitleAttr,
        'Title text is set correctly'
    );

    assert.strictEqual(
        options.trigger,
        'hover focus',
        'Default trigger is "hover focus"'
    );
});

test( 'Relative values applied correctly', function( assert ) {

    const pastDate = window.moment().subtract( 4321, 'minutes' ).toISOString();

    this.set( 'value', pastDate );

    this.render( hbs`
        {{sl-date-time
            timezone="America/Chicago"
            format="relative"
            value=value
        }}
    ` );

    const pastRendered = this.$( '>:first-child' ).text().trim();

    assert.strictEqual(
        /^((\d+|a|an)\s[a-zA-Z]+|a few seconds)\s(ago)$/.test( pastRendered ),
        true,
        'Default datetime string matches default pattern'
    );

    const datetimeAttr = this.$( '>:first-child' ).attr( 'datetime' );
    const dataOriginalTitleAttr = this.$( '>:first-child' ).attr( 'data-original-title' );

    assert.strictEqual(
        datetimeAttr,
        dataOriginalTitleAttr,
        'Attributes datetime and data-original-title match'
    );

    assert.strictEqual(
        /^\d{4}[-]\d{2}[-]\d{2}\s\d{1,2}[:]\d{2}\s[A-Z]+$/.test( this.$( '>:first-child' ).attr( 'datetime' ) ),
        true,
        'Attribute datetime matches ISO datetime format plus timezone code'
    );

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
        dataOriginalTitleAttr,
        'Title text is set correctly'
    );

    assert.strictEqual(
        options.trigger,
        'hover focus',
        'Default trigger is "hover focus"'
    );

    const futureDate = window.moment().add( 123456, 'minutes' ).toISOString();

    this.set( 'value', futureDate );

    this.render( hbs`
        {{sl-date-time
            timezone="America/Chicago"
            format="relative"
            value=value
        }}
    ` );

    const futureRendered = this.$( '>:first-child' ).text().trim();

    assert.strictEqual(
        /^(in)\s(\d+\s[a-z]+|a few seconds)$/.test( futureRendered ),
        true,
        'Future datetime string matches default pattern'
    );
});

test( 'Date values applied correctly', function( assert ) {

    const pastDate = window.moment().subtract( 3, 'months' ).toISOString();

    this.set( 'value', pastDate );

    this.render( hbs`
        {{sl-date-time
            format="date"
            timezone="America/Chicago"
            value=value
        }}
    ` );

    const pastRendered = this.$( '>:first-child' ).text().trim();

    assert.strictEqual(
        /^\d{4}[-]\d{2}[-]\d{2}$/.test( pastRendered ),
        true,
        'Default date string matches default ISO date pattern'
    );

    const datetimeAttr = this.$( '>:first-child' ).attr( 'datetime' );
    const dataOriginalTitleAttr = this.$( '>:first-child' ).attr( 'data-original-title' );

    assert.strictEqual(
        datetimeAttr,
        dataOriginalTitleAttr,
        'Attributes datetime and data-original-title match'
    );

    assert.strictEqual(
        /^\d{4}[-]\d{2}[-]\d{2}\s\d{1,2}[:]\d{2}\s[A-Z]+$/.test( this.$( '>:first-child' ).attr( 'datetime' ) ),
        true,
        'Attribute datetime matches ISO datetime format plus timezone code'
    );

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
        dataOriginalTitleAttr,
        'Title text is set correctly'
    );

    assert.strictEqual(
        options.trigger,
        'hover focus',
        'Default trigger is "hover focus"'
    );
});
