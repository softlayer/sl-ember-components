import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-radio-group', 'Unit - component: sl-radio-group', {
    needs: [ 'component:sl-radio', 'template:components/sl-radio' ]
});

test( 'The disabled state applies the disabled attribute and class', function( assert ) {
    this.subject({ disabled: true, name: 'test' });

    assert.equal(
        this.$().attr( 'disabled' ),
        'disabled',
        'has "disabled" attribute'
    );
    assert.ok( this.$().hasClass( 'disabled' ), 'has "disabled" class' );
});

test( 'The disabled state applies to sl-radio children', function( assert ) {
    this.subject({
        disabled : true,
        name     : 'test',

        template: Ember.Handlebars.compile(
            '{{sl-radio label="One" value="one"}}' +
            '{{sl-radio label="Two" value="two"}}' +
            '{{sl-radio label="Three" value="three"}}'
        )
    });

    assert.equal(
        this.$( '.sl-radio.disabled' ).length,
        3,
        'Rendered component has three disabled radio buttons'
    );

    assert.equal(
        this.$( '.sl-radio input[disabled]' ).length,
        3,
        'Rendered component has three disabled inputs'
    );
});

test( 'The readonly state applies to sl-radio children', function( assert ) {
    this.subject({
        name     : 'test',
        readonly : true,

        template: Ember.Handlebars.compile(
            '{{sl-radio label="One" value="one"}}' +
            '{{sl-radio label="Two" value="two"}}' +
            '{{sl-radio label="Three" value="three"}}'
        )
    });

    assert.equal(
        this.$( '.sl-radio.readonly' ).length,
        3,
        'Rendered component has three readonly radio buttons'
    );

    assert.equal(
        this.$( '.sl-radio input[readonly]' ).length,
        3,
        'Rendered component has three readonly inputs'
    );
});

test( 'Value changes when sl-radio child selected', function( assert ) {
    var component = this.subject({
            name: 'test',
            template: Ember.Handlebars.compile(
                '{{sl-radio label="One" value="one"}}' +
                '{{sl-radio label="Two" value="two"}}' +
                '{{sl-radio label="Three" value="three"}}'
            ),
            value: 'one'
        });

    assert.equal( component.get( 'value' ), 'one', '"one" value is selected' );

    this.$().find( 'input[value="two"]' ).trigger( 'click' );

    assert.equal( component.get( 'value' ), 'two', '"two" value is selected' );
});

test( "Inline true sets sl-radio children's inline property to true", function( assert ) {
    this.subject({
        inline : true,
        name   : 'test',

        template: Ember.Handlebars.compile(
            '{{sl-radio label="One" value="one"}}' +
            '{{sl-radio label="Two" value="two"}}' +
            '{{sl-radio label="Three" value="three"}}'
        )
    });

    assert.equal(
        this.$( '.sl-radio.radio' ).length,
        0,
        'Rendered component has zero default radio buttons'
    );

    assert.equal(
        this.$( '.sl-radio.radio-inline' ).length,
        3,
        'Rendered component has three inline radio buttons'
    );
});

test( "Inline false sets sl-radio children's inline property to false", function( assert ) {
    this.subject({
        inline : false,
        name   : 'test',

        template: Ember.Handlebars.compile(
            '{{sl-radio inline=true label="One" value="one"}}' +
            '{{sl-radio inline=true label="Two" value="two"}}' +
            '{{sl-radio inline=true label="Three" value="three"}}'
        )
    });

    assert.equal(
        this.$( '.sl-radio.radio-inline' ).length,
        0,
        'Rendered component has zero inline radio buttons'
    );

    assert.equal(
        this.$( '.sl-radio.radio' ).length,
        3,
        'Rendered component has three default (non-inline) radio buttons'
    );
});
