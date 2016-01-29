import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sl-calendar-day', 'Integration | Component | sl calendar day', {
    integration: true
});

const template = hbs`
    {{#sl-calendar-day}}
        5
    {{/sl-calendar-day}}
`;

test( 'Default rendered state', function( assert ) {
    this.render( template );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'day' ),
        'Has class "day"'
    );
});

test( 'Selected class is present when in active state', function( assert ) {
    this.render( hbs`
        {{sl-calendar-day active=true}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'selected' ),
        'Has class "selected" when active'
    );
});

test( 'New class is present when new is true', function( assert ) {
    this.render( hbs`
        {{sl-calendar-day new=true}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'new' ),
        'Has class "new" when new'
    );
});

test( 'Old class is present when old is true', function( assert ) {
    this.render( hbs`
        {{sl-calendar-day old=true}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'old' ),
        'Has class "old" when old'
    );
});

test( 'Today class is present when isToday is true', function( assert ) {
    this.render( hbs`
        {{sl-calendar-day isToday=true}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'today' ),
        'Has class "today" when isToday'
    );
});

test( 'Disabled class is present when in restricted state', function( assert ) {
    this.render( hbs`
        {{sl-calendar-day restricted=true}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'disabled' ),
        'Has class "disabled" when restricted'
    );
});

test( 'Default action is triggered when element is clicked', function( assert ) {
    assert.ok(
        false
    );
});

test( 'ariaRole', function( assert ) {
    assert.ok(
        false
    );
});

test( 'ariaSelected', function( assert ) {
    assert.ok(
        false
    );
});

test( 'tabIndex', function( assert ) {
    assert.ok(
        false
    );
});

test( 'Content is yielded', function( assert ) {
    this.render( template );

    assert.strictEqual(
        this.$( '>:first-child' ).text().trim(),
        '5',
        'Content yields successfully'
    );
});
