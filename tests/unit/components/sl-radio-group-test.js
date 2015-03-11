import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-radio-group', 'Unit - component: sl-radio-group', {
    needs: [ 'component:sl-radio', 'template:components/sl-radio' ]
});

test( 'The disabled state applies the disabled attribute and class', function( assert ) {
    var $component;

    this.subject({ disabled: true, name: 'test' });
    $component = this.render();

    assert.ok( $component.prop( 'disabled' ), 'has "disabled" attribute' );
    assert.ok( $component.hasClass( 'disabled' ), 'has "disabled" class' );
});

test( 'The disabled state applies to sl-radio children', function( assert ) {
    var $component;

    this.subject({
        disabled : true,
        name     : 'test',

        template: Ember.Handlebars.compile(
            '{{sl-radio label="One" value="one"}}' +
            '{{sl-radio label="Two" value="two"}}' +
            '{{sl-radio label="Three" value="three"}}'
        )
    });
    $component = this.render();

    assert.equal( $component.find( '.sl-radio.disabled' ).length, 3 );
    assert.equal( $component.find( '.sl-radio input[disabled]' ).length, 3 );
});

test( 'The readonly state applies to sl-radio children', function( assert ) {
    var $component;

    this.subject({
        name     : 'test',
        readonly : true,

        template: Ember.Handlebars.compile(
            '{{sl-radio label="One" value="one"}}' +
            '{{sl-radio label="Two" value="two"}}' +
            '{{sl-radio label="Three" value="three"}}'
        )
    });
    $component = this.render();

    assert.equal( $component.find( '.sl-radio.readonly' ).length, 3 );
    assert.equal( $component.find( '.sl-radio input[readonly]' ).length, 3 );
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
        }),
        $component = this.render();

    assert.equal( component.get( 'value' ), 'one' );
    $component.find( 'input[value="two"]' ).trigger( 'click' );
    assert.equal( component.get( 'value' ), 'two' );
});

test( "Inline true sets sl-radio children's inline property to true", function( assert ) {
    var $component;

    this.subject({
        inline : true,
        name   : 'test',

        template: Ember.Handlebars.compile(
            '{{sl-radio label="One" value="one"}}' +
            '{{sl-radio label="Two" value="two"}}' +
            '{{sl-radio label="Three" value="three"}}'
        )
    });
    $component = this.render();

    assert.equal( $component.find( '.sl-radio.radio' ).length, 0 );
    assert.equal( $component.find( '.sl-radio.radio-inline' ).length, 3 );
});

test( "Inline false sets sl-radio children's inline property to false", function( assert ) {
    var $component;

    this.subject({
        inline : false,
        name   : 'test',

        template: Ember.Handlebars.compile(
            '{{sl-radio inline=true label="One" value="one"}}' +
            '{{sl-radio inline=true label="Two" value="two"}}' +
            '{{sl-radio inline=true label="Three" value="three"}}'
        )
    });
    $component = this.render();

    assert.equal( $component.find( '.sl-radio.radio-inline' ).length, 0 );
    assert.equal( $component.find( '.sl-radio.radio' ).length, 3 );
});
