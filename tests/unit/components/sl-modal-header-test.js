import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent( 'sl-modal-header', 'Unit | Component | sl modal header', {
    unit: true
});

test( 'It renders', function( assert ) {
   let component = this.subject();

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

test( 'Modal header class exists on child element', function( assert ) {
    assert.equal(
        this.$().find( '.modal-header' ).length,
        1
    );
});

test( 'Close button exists', function( assert ) {
    assert.equal(
        this.$().find( '.close' ).length,
        1
    );
});

test( 'Setting title on header works', function( assert ) {
    let title = 'hello world';

    this.subject({
        title: title
    });

    assert.equal(
        this.$().find( '.modal-title' ).text(),
        title
    );
});

test( 'Content is yielded', function( assert ) {
    let content = '<div class="test"></div>';

    this.subject({
        template: Ember.Handlebars.compile( content )
    });

    assert.equal(
        this.$( '.test' ).length,
        1
    );
});