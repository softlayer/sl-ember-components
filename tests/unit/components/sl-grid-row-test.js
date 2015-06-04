import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-grid-row', 'Unit | Component | sl-grid-row', {
    unit: true
});

test( 'Active row class is supported', function( assert ) {
    var row = {};

    this.subject({ row });

    assert.equal(
        this.$().hasClass( 'active' ),
        false,
        'Component with non-active row does not have "active" class'
    );

    Ember.run( () => {
        Ember.set( row, 'active', true );
    });

    assert.equal(
        this.$().hasClass( 'active' ),
        true,
        'Component with active row has "active" class'
    );
});

test( 'Click event triggers rowClick action with row record', function( assert ) {
    var row = { testValue: true };

    this.subject({
        row,
        rowClick: 'test',

        targetObject: {
            test( passedRow ) {
                assert.equal(
                    passedRow,
                    row,
                    'Row record passed from rowClick is expected value'
                );
            }
        }
    });

    this.$().trigger( 'click' );
});
