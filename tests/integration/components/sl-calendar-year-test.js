import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sl-calendar-year', 'Integration | Component | sl calendar year', {
    integration: true
});

const template = hbs`
    {{#sl-calendar-year}}
        1999
    {{/sl-calendar-year}}
`;

test( 'Default rendered state', function( assert ) {
    this.render( template );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'year' ),
        'Has class "year"'
    );
});

test( 'Selected class is present when in active state', function( assert ) {
    this.render( hbs`
        {{sl-calendar-year active=true}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'selected' ),
        'Has class "selected" when active'
    );
});

test( 'New class is present when new is true', function( assert ) {
    this.render( hbs`
        {{sl-calendar-year new=true}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'new' ),
        'Has class "new" when new'
    );
});

test( 'Old class is present when old is true', function( assert ) {
    this.render( hbs`
        {{sl-calendar-year old=true}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'old' ),
        'Has class "old" when old'
    );
});

test( 'Default action is triggered when element is clicked', function( assert ) {
    assert.ok(
        false
    );
});

test( 'Content is yielded', function( assert ) {
    this.render( template );

    assert.strictEqual(
        this.$( '>:first-child' ).text().trim(),
        '1999',
        'Content yields successfully'
    );
});
