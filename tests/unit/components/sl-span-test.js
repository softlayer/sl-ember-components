import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-span', 'Unit - component: sl-span' );

test( '"value" property is supported', function( assert ) {
    var component  = this.subject({
            value: 'Test content'
        }),
        $component = this.render();

    assert.equal( $.trim( $component.text() ), 'Test content' );
});

test( 'If "isLoading" is true, sl-loading-icon component is displayed', function( assert ) {
    var component  = this.subject({
        isLoading: true
    });

    this.render();

    assert.equal( component._childViews[0]._childViews[0].path, 'sl-loading-icon' );
});
