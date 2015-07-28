import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent( 'sl-modal-header', 'Unit | Component | sl modal header', {
    unit: true
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
    const title = 'hello world';

    this.subject({
        title: title
    });

    assert.equal(
        this.$().find( '.modal-title' ).text(),
        title
    );
});

test( 'Content is yielded', function( assert ) {
    const content = '<div class="test"></div>';

    this.subject({
        template: Ember.Handlebars.compile( content )
    });

    assert.equal(
        this.$( '.test' ).length,
        1
    );
});

test( 'Modal title\'s id is set to ariaLabelledBy property value', function( assert ) {
    const component = this.subject({
        title: 'labelTest'
    });

    assert.equal(
        this.$( '.modal-title' ).prop( 'id' ),
        component.get( 'ariaLabelledBy' )
    );
});

test( 'aria-labelledby can be bound in a custom header', function( assert ) {
    const template = '<span class="modal-title" id={{ariaLabelledBy}}>Custom Title</span>';

    const component = this.subject({
        layout: Ember.Handlebars.compile( template ),
        ariaLabelledBy: 'mockUniqueString'
    });

    assert.equal(
        this.$( '.modal-title' ).prop( 'id' ),
        component.get( 'ariaLabelledBy' )
    );
});
