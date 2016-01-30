import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sl-calendar-month', 'Integration | Component | sl calendar month', {
    integration: true
});

const template = hbs`
    {{#sl-calendar-month}}
        June
    {{/sl-calendar-month}}
`;

test( 'Default rendered state', function( assert ) {
    this.render( template );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'month' ),
        'Has class "month"'
    );
});

test( 'Selected class is present when in active state', function( assert ) {
    this.render( hbs`
        {{sl-calendar-month active=true}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'selected' ),
        'Has class "selected" when active'
    );
});

test( 'Default action is triggered when element is clicked', function( assert ) {
    assert.expect( 1 );

    const done = assert.async();

    this.render( hbs`
        {{sl-calendar-month action="testAction"}}
    ` );

    this.on( 'testAction', function() {
        assert.ok(
            true,
            'Action was fired'
        );

        done();
    });

    this.$( '>:first-child' ).click();
});

test( 'Content is yielded', function( assert ) {
    this.render( template );

    assert.strictEqual(
        this.$( '>:first-child' ).text().trim(),
        'June',
        'Content yields successfully'
    );
});
