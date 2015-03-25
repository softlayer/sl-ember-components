import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-span', 'Unit - component: sl-span', {
    needs: [ 'component:sl-loading-icon' ]
});

test( '"value" property is supported', function( assert ) {
    var component  = this.subject({
            value: 'Test content'
        }),
        $component = this.render();

    assert.equal( $.trim( $component.text() ), 'Test content' );
});

test( 'If "loading" is true, sl-loading-icon component is displayed', function( assert ) {
    let component  = this.subject({
            loading: true
        }),
        $component = this.render();

    assert.strictEqual(
        $component.find( '.sl-loading-icon' ).length,
        1,
        'Loading icon is present'
    );
});
