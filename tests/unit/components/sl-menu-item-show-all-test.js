import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-menu-item-show-all', 'Unit | Component | sl menu item show all', {
    unit: true
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
