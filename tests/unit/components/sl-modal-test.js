import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

let template = ['{{#sl-modal name="simpleDemo"}}',
                   '{{sl-modal-header title="Simple Example"}}',
                   '{{#sl-modal-body}}',
                        '<p>A simple modal example</p>',
                    '{{/sl-modal-body}}',
                    '{{sl-modal-footer}}',
                    '{{/sl-modal}}'].join(' ');


moduleForComponent( 'sl-modal', 'Unit | Component | sl modal', {
    needs: [
        'component:sl-modal-header',
        'component:sl-modal-body',
        'component:sl-modal-footer',
        'service:sl-modal'
    ],
    unit: true
});

//test( 'It renders', function( assert ) {
//    assert.expect(2);
//
//    let component = this.subject();
//    assert.equal( component._state, 'preRender' );
//
//    this.render();
//    assert.equal( component._state, 'inDOM' );
//});

//test( 'Default classes are present', function( assert ) {
//    assert.ok(
//        this.$().hasClass( 'modal' ),
//        'Has class "modal"'
//    );
//
//    assert.ok(
//        this.$().hasClass( 'fade' ),
//        'Has class "fade"'
//    );
//});

test( 'Property isOpen is true when modal is shown', function( assert ) {
    let done = assert.async();

    assert.expect( 1 );

    let component = this.subject({
        template: Ember.Handlebars.compile( template ),
        afterShow: 'testModalIsOpen',
        targetObject: {
            testModalIsOpen() {
                assert.equal( component.get( 'isOpen' ), true );
                done();
            }
        }
    });

    this.render();
    component.show();
});


