import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import TooltipEnabledMixin from 'sl-ember-components/mixins/sl-tooltip-enabled';

moduleForComponent( 'sl-tooltip', 'Unit | Component | sl tooltip', {
    unit: true
});

test( 'Expected Mixin is present', function( assert ) {
    assert.ok(
        TooltipEnabledMixin.detect( this.subject( { title: 'Tooltip Text' } ) ),
        'Expected Mixin is present'
    );
});

test( 'Default values are correct', function( assert ) {
    const component = this.subject( { title: 'test' } );

    assert.equal(
        component.get( 'tagName' ),
        'span'
    );
});

test( '"title" property needs to be a string', function( assert ) {

    const properties = Ember.Object.create();

    const callSubject = () => this.subject( properties );

    // Empty Property

    assert.throws(
        callSubject,
        'Property was empty'
    );

    // Null Property

    properties.set( 'title', null );

    assert.throws(
        callSubject,
        'Property was null'
    );


    // Number Property

    properties.set( 'title', 3 );

    assert.throws(
        callSubject,
        'Property was a number'
    );

    // Boolean Property

    properties.set( 'title', true );

    assert.throws(
        callSubject,
        'Property was a boolean'
    );

    // Array Property

    properties.set( 'title', [] );

    assert.throws(
        callSubject,
        'Property was an array'
    );

    // Function Property

    properties.set( 'title', function() { } );

    assert.throws(
        callSubject,
        'Property was a function'
    );

    // Object Property

    properties.set( 'title', {} );

    assert.throws(
        callSubject,
        'Property was an object'
    );

    // Undefined Property

    properties.set( 'title', undefined );

    assert.throws(
        callSubject,
        'Property was undefined'
    );

    // String Property

    properties.set( 'title', 'Test title' );

    assert.ok(
        callSubject(),
        'Property was a string'
    );
});

test( '"popover" property needs to be a string or undefined', function( assert ) {

    const properties = Ember.Object.create({
        title: 'Tooltip text'
    });

    const callSubject = () => this.subject( properties );

    // Null Property

    properties.set( 'popover', null );

    assert.throws(
        callSubject,
        'Property was null'
    );

    // Number Property

    properties.set( 'popover', 3 );

    assert.throws(
        callSubject,
        'Property was a number'
    );

    // Boolean Property

    properties.set( 'popover', true );

    assert.throws(
        callSubject,
        'Property was a number'
    );

    // Array Property

    properties.set( 'popover', [] );

    assert.throws(
        callSubject,
        'Property was an array'
    );

    // Function Property

    properties.set( 'popover', function() { } );

    assert.throws(
        callSubject,
        'Property was a function'
    );

    // Object Property

    properties.set( 'popover', {} );

    assert.throws(
        callSubject,
        'Property was an object'
    );

    // Undefined Property

    // Delete previously populated popover property
    delete properties.popover;

    assert.ok(
        callSubject(),
        'Property was undefined'
    );

    // String Property

    properties.set( 'popover', 'Popover text' );

    assert.ok(
        callSubject(),
        'Property was a string'
    );
});
