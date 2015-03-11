import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-radio', 'Unit - component: sl-radio' );

test( 'Disabled state applies disabled attribute and class', function( assert ) {
    var $component;

    this.subject({ disabled: true });
    $component = this.render();

    assert.ok( $component.prop( 'disabled' ), 'has attribute "disabled"' );
    assert.ok( $component.hasClass( 'disabled' ), 'has class "disabled"' );
});

test( 'Inline property sets relevant class', function( assert ) {
    var $component;

    this.subject({ inline: true });
    $component = this.render();

    assert.ok( $component.hasClass( 'radio-inline' ), 'has class "radio-inline"' );
});
