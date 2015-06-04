import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-pagination', 'Unit | Component | sl-pagination', {
    unit: true
});

test( 'Default classes are present', function( assert ) {
    assert.ok(
        this.$().hasClass( 'pagination' ),
        'Default rendered component has class "pagination"'
    );

    assert.ok(
        this.$().hasClass( 'sl-pagination' ),
        'Default rendered component has class "sl-pagination"'
    );
});

test( 'Property "onFirstPage" works correctly', function( assert ) {
    var component = this.subject({ currentPage: 2 });

    assert.equal(
        component.get( 'onFirstPage' ),
        false,
        'Rendered component is not initially "onFirstPage"'
    );

    Ember.run( () => {
        component.set( 'currentPage', 1 );
    });
    assert.ok(
        component.get( 'onFirstPage' ),
        'Rendered component is "onFirstPage" when currentPage = 1'
    );
});

test( 'Changing to previous page behaves correctly', function( assert ) {
    var component = this.subject({ currentPage: 1, totalPages: 3 });

    this.$( '.previous-page-button' ).trigger( 'click' );
    assert.equal(
        component.get( 'currentPage' ),
        1,
        'Current page is not decremented when on the first page'
    );

    Ember.run( () => {
        component.set( 'currentPage', 2 );

        // These properties have to be set after currentPage is 2
        component.setProperties({
            pageChange: 'test',
            targetObject: {
                test( currentPage ) {
                    assert.equal(
                        currentPage,
                        1,
                        'Current page is decremented as expected'
                    );
                }
            }
        });
    });
    this.$( '.previous-page-button' ).trigger( 'click' );
});

test( 'Changing to next page behaves correctly', function( assert ) {
    var component = this.subject({ currentPage: 3, totalPages: 3 });

    this.$( '.next-page-button' ).trigger( 'click' );
    assert.equal(
        component.get( 'currentPage' ),
        3,
        'Current page is not incremented when on the last page'
    );

    Ember.run( () => {
        component.set( 'currentPage', 2 );

        // These properties have to be set after currentPage is 2
        component.setProperties({
            pageChange: 'test',
            targetObject: {
                test( currentPage ) {
                    assert.equal(
                        currentPage,
                        3,
                        'Current page is incremented as expected'
                    );
                }
            }
        });
    });
    this.$( '.next-page-button' ).trigger( 'click' );
});
