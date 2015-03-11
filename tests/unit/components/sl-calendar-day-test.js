import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-calendar-day', 'Unit - component: sl-calendar-day' );

test( 'Default state of calendar-day is not active, new or old', function( assert ) {
    var component  = this.subject(),
        $component = this.render();

    assert.strictEqual( component.get( 'active' ), false, 'Default component is not active' );
    assert.strictEqual( $component.hasClass( 'active' ), false, 'Default component does not have "active" class' );

    assert.strictEqual( component.get( 'new' ), false, 'Default component is not "new"' );
    assert.strictEqual( $component.hasClass( 'new' ), false, 'Default component does not have "new" class' );

    assert.strictEqual( component.get( 'old' ), false, 'Default component is not "old"' );
    assert.strictEqual( $component.hasClass( 'old' ), false, 'Default component does not have "old" class' );
});

test( 'Active state is applied correctly', function( assert ) {
    var component  = this.subject({ active: true }),
        $component = this.render();

    assert.ok( component.get( 'active' ), 'Component is set to active state' );
    assert.ok( $component.hasClass( 'active' ), 'Component element has class "active"' );
});

test( 'New state is applied correctly', function( assert ) {
    var component  = this.subject({ 'new': true }),
        $component = this.render();

    assert.ok( component.get( 'new' ), 'Component is set to new state' );
    assert.ok( $component.hasClass( 'new' ), 'Component element has class "new"' );
});

test( 'Old state is applied correctly', function( assert ) {
    var component  = this.subject({ old: true }),
        $component = this.render();

    assert.ok( component.get( 'old' ), 'Component is set to old state' );
    assert.ok( $component.hasClass( 'old' ), 'Component element has class "old"' );
});

test( 'Property "day" populates component content', function( assert ) {
    var $component;

    this.subject({ day: 42 });
    $component = this.render();

    assert.strictEqual( Ember.$.trim( $component.text() ), '42', '"day" value is set to element content' );
});

test( 'Action bindings sends action with expected day content', function( assert ) {
    var dayContent = { day: 42 },
        $component;

    this.subject({
        action: 'test',
        content: dayContent,
        targetObject: {
            test: function( content ) {
                assert.strictEqual( content, dayContent, 'Test action fired with expected value' );
            }
        }
    });
    $component = this.render();

    assert.expect( 1 );

    $component.trigger( 'click' );
});
