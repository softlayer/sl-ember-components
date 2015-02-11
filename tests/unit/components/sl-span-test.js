import Ember from 'ember';
import { test, moduleFor, moduleForComponent } from 'ember-qunit';

moduleForComponent( 'sl-span', 'Unit - component:sl-span' );

test( '"value" property is supported', function() {
    var component  = this.subject({
            value: 'Test content'
        }),
        $component = this.render();

    equal( $.trim( $component.text() ), 'Test content' );
});

test( 'If "isLoading" is true, sl-loading-icon component is displayed', function() {
    var component  = this.subject({
        isLoading: true
    });

    this.render();

    equal( component._childViews[0]._childViews[0].path, 'sl-loading-icon' );
});
