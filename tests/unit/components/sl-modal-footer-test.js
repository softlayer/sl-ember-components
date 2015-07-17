import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent( 'sl-modal-footer', 'Unit | Component | sl modal footer', {
    unit: true
});

test( 'It renders', function( assert ) {
    const component = this.subject();

    assert.equal(
        component._state,
        'preRender'
    );

    this.render();

    assert.equal(
        component._state,
        'inDOM'
    );
});

test( 'Footer class exists', function ( assert ) {
    assert.equal(
        this.$('.modal-footer').length,
        1
    );
});

test( 'Close button exists', function( assert ) {
    assert.equal(
        this.$('button[data-dismiss="modal"]').length,
        1
    );
});

test( 'Close button text is customizable', function( assert ) {
    const buttonText = 'Custom Close Text';

    this.subject({
        buttonText: buttonText
    });

    assert.equal(
        this.$('button[data-dismiss="modal"]').text().trim(),
        buttonText
    );
});

test( 'Content is yielded', function( assert ) {
    const content = '<div class="test"></div>';

    this.subject({
        template: Ember.Handlebars.compile( content )
    });

    assert.equal(
        this.$('.test').length,
        1
    );
});
