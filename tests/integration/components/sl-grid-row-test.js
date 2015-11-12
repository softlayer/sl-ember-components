import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

moduleForComponent( 'sl-grid-row', 'Integration | Component | sl grid row', {
    integration: true
});

const defaultTemplate = hbs`
    {{sl-grid-row}}
`;

test( 'Default rendered state', function( assert ) {
    this.render( defaultTemplate );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-grid-row' ),
        'sl-grid-row class is present'
    );
});

test( 'Active row class is supported', function( assert ) {
    let row = {};

    this.set( 'row', row );

    this.render( hbs`
        {{sl-grid-row row=row}}
    `);

    assert.equal(
        this.$( '>:first-child' ).hasClass( 'active' ),
        false,
        'Component with non-active row does not have "active" class'
    );

    row = { active: true };
    this.set( 'row', row );

    assert.equal(
        this.$( '>:first-child' ).hasClass( 'active' ),
        true,
        'Component with active row has "active" class'
    );
});

test( 'rowClick action handler is called when row is clicked',
    function( assert ) {
        const row = { active: true };
        const spy = sinon.spy();

        this.set( 'row', row );
        this.on( 'rowClick', spy );

        this.render( hbs`
            {{sl-grid-row row=row rowClick='rowClick'}}
        ` );

        this.$( '>:first-child' ).click();

        assert.ok(
            spy.called
        );
    }
);
