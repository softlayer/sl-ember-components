import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import sinon from 'sinon';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-radio-group', 'Unit | Component | sl radio group', {
    needs: [ 'component:sl-radio' ],
    unit: true
});

test( 'Event handlers are registered and unregistered', function( assert ) {
    const spyOn = sinon.spy( Ember.$.fn, 'on' );
    const spyOff = sinon.spy( Ember.$.fn, 'off' );

    this.registry.register( 'template:test-template', hbs`
        {{sl-radio}}
        {{sl-radio}}
        {{sl-radio}}
    ` );

    const component = this.subject({
        name: 'testName',
        templateName: 'test-template'
    });

    this.render();

    const radioButtonsArray = this.$( 'input:radio' ).toArray();

    const matchElements = sinon.match( ( elements ) => {
        return elements.toArray().every( function( element ) {
            const found = radioButtonsArray.find( ( radioElement )  => {
                return element === radioElement;
            });

            return Boolean( found );
        });
    });

    this.render();

    spyOn.reset();

    component.trigger( 'didInsertElement' );

    assert.ok(
        spyOn.calledWith( component.namespaceEvent( 'change' ) ),
        'on() was called with namespaced change event'
    );

    assert.ok(
        spyOn.calledOn( matchElements ),
        'on() was called on expected radio buttons'
    );

    spyOff.reset();

    component.trigger( 'willClearRender' );

    assert.ok(
        spyOff.calledWith( component.namespaceEvent( 'change' ) ),
        'off() was called with namespaced change event'
    );

    assert.ok(
        spyOff.calledOn( matchElements ),
        'off() was called on expected radio buttons'
    );

    Ember.$.fn.on.restore();
    Ember.$.fn.off.restore();
});
