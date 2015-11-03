import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

moduleForComponent( 'sl-date-time', 'Integration | Component | sl date time', {
    integration: true
});

test( 'Defaults applied correctly', function( assert ) {

    this.render( hbs`
        {{sl-date-time
            timezone="America/Chicago"
        }}
    ` );

    const element = this.$( '>:first-child' );

    assert.ok(
        element.hasClass( 'sl-datetime' ),
        'Default rendered component has class "sl-datetime"'
    );

    const defaultRendered = element.text().trim();
    const defaultRegEx = /^[a-zA-Z]+[,]\s[a-zA-Z]+\s\d{1,2}[a-z]{2}\s\d{4}[,]\s\d{1,2}[:]\d{2}\s(AM|PM)\s[A-Z]+$/;

    assert.strictEqual(
        defaultRegEx.test( defaultRendered ),
        true,
        'Default datetime string matches default pattern'
    );

    const datetimeAttr = element.attr( 'datetime' );
    const dataOriginalTitleAttr = element.attr( 'data-original-title' );

    assert.strictEqual(
        datetimeAttr,
        dataOriginalTitleAttr,
        'Attributes datetime and data-original-title match'
    );

    const datetimeTZRegex = /^\d{4}[-]\d{2}[-]\d{2}\s\d{1,2}[:]\d{2}\s[A-Z]+$/;

    assert.strictEqual(
        datetimeTZRegex.test( element.attr( 'datetime' ) ),
        true,
        'Attribute datetime matches ISO datetime format plus timezone code'
    );

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
        'Tooltip title text is set correctly'
    );

    assert.strictEqual(
        options.trigger,
        'hover focus',
        'Default tooltip trigger is "hover focus"'
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
        pastRendered,
        window.moment( pastDate ).fromNow(),
        'Relative date is rendered correctly'
    );

    const datetimeAttr = this.$( '>:first-child' ).attr( 'datetime' );
    const dataOriginalTitleAttr = this.$( '>:first-child' ).attr( 'data-original-title' );

    assert.strictEqual(
        datetimeAttr,
        dataOriginalTitleAttr,
        'Attributes datetime and data-original-title match'
    );

    assert.strictEqual(
        /^\d{4}[-]\d{2}[-]\d{2}\s\d{1,2}[:]\d{2}\s[A-Z]+$/.test( datetimeAttr ),
        true,
        'Attribute datetime matches ISO datetime format plus timezone code'
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
        futureRendered,
        'in 3 months',
        'Future datetime string matches default pattern'
    );
});

test( 'Date values applied correctly', function( assert ) {

    const pastDateISO = window.moment().subtract( 3, 'months' ).toISOString();

    this.set( 'value', pastDateISO );

    this.render( hbs`
        {{sl-date-time
            format="date"
            timezone="America/Chicago"
            value=value
        }}
    ` );

    const pastRendered = this.$( '>:first-child' ).text().trim();
    const pastDate = window.moment().subtract( 3, 'months' );

    assert.strictEqual(
        pastRendered,
        pastDate.format( 'YYYY-MM-DD' ),
        'Default date string matches default date pattern'
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
});

test( 'tooltip mixin applied correctly', function( assert ) {
    const spy = sinon.spy( Ember.$.fn, 'tooltip' );

    this.render( hbs`
        {{sl-date-time
            timezone="America/Chicago"
        }}
    ` );

    this.$( '>:first-child' ).triggerHandler( 'hover' );

    const datetimeValue = this.$( '>:first-child' ).attr( 'data-original-title' );
    const tooltipValue = spy.args[0][0].title;

    assert.strictEqual(
        datetimeValue,
        tooltipValue,
        'Tooltip exists and value matches tooltip date pattern'
    );
});
