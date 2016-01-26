import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-calendar-day', 'Unit | Component | sl calendar day', {
    unit: true
});

test( 'Default state of calendar-day is not active, new or old', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'active' ),
        false,
        'Default component is not active'
    );

    assert.strictEqual(
        this.$().hasClass( 'selected' ),
        false,
        'Default component does not have "selected" class'
    );

    assert.strictEqual(
        component.get( 'new' ),
        false,
        'Default component is not "new"'
    );

    assert.strictEqual(
        this.$().hasClass( 'new' ),
        false,
        'Default component does not have "new" class'
    );

    assert.strictEqual(
        component.get( 'old' ),
        false,
        'Default component is not "old"'
    );

    assert.strictEqual(
        this.$().hasClass( 'old' ),
        false,
        'Default component does not have "old" class'
    );
});

test( 'Active state is applied correctly', function( assert ) {
    const component = this.subject({ active: true });

    assert.ok(
        component.get( 'active' ),
        'Component is set to active state'
    );

    assert.ok(
        this.$().hasClass( 'selected' ),
        'Component element has class "selected"'
    );
});

test( 'New state is applied correctly', function( assert ) {
    const component = this.subject({ 'new': true });

    assert.ok(
        component.get( 'new' ),
        'Component is set to new state'
    );

    assert.ok(
        this.$().hasClass( 'new' ),
        'Component element has class "new"'
    );
});

test( 'Old state is applied correctly', function( assert ) {
    const component = this.subject({ old: true });

    assert.ok(
        component.get( 'old' ),
        'Component is set to old state'
    );

    assert.ok(
        this.$().hasClass( 'old' ),
        'Component element has class "old"'
    );
});

test( 'Action bindings sends action with expected day content', function( assert ) {
    assert.expect( 1 );

    const done = assert.async();

    const dayContent = { day: 42 };

    this.subject({
        action: 'test',
        content: dayContent,
        targetObject: {
            test( content ) {
                assert.strictEqual(
                    content,
                    dayContent,
                    'Test action fired with expected value'
                );

                done();
            }
        }
    });

    this.$().trigger( 'click' );
});
