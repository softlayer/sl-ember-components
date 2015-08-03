import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-menu-item-show-all', 'Unit | Component | sl menu item show all', {
    unit: true
});

test( 'Default class name is present', function( assert ) {
    this.subject();

    assert.ok(
        this.$().hasClass( 'show-all' ),
        'Rendered element has class "show-all"'
    );
});

test( 'Bound action onMouseEnter is sent on mouseenter', function( assert ) {
    this.subject({
        onMouseEnter: 'test',

        targetObject: {
            test() {
                assert.ok(
                    true,
                    'Bound action triggered correctly'
                );
            }
        }
    });

    this.$().trigger( 'mouseenter' );
});
