import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import startApp from '../../helpers/start-app';

var App;

moduleForComponent( 'sl-grid', 'Unit - component: sl-grid', {

    needs: [
        'component:sl-pagination',
        'view:sl-grid-cell',
        'view:sl-grid-column-header',
        'view:sl-grid-row'
    ],

    beforeEach() {
        App = startApp();
    },

    afterEach() {
        Ember.run( App, App.destroy );
    }

});

test( 'Default classes are present', function( assert ) {
    this.subject({ columns: Ember.A(), content: Ember.A() });

    assert.ok(
        this.$().hasClass( 'sl-grid' ),
        'Rendered component has class "sl-grid"'
    );
});

test( 'Loading state adds loading class', function( assert ) {
    var component = this.subject({ columns: Ember.A(), content: Ember.A() });

    assert.strictEqual(
        this.$().hasClass( 'sl-loading' ),
        false,
        'Default rendered component does not have "sl-loading" class'
    );

    Ember.run( () => {
        component.set( 'loading', true );
    });

    assert.ok(
        this.$().hasClass( 'sl-loading' ),
        'Rendered component gains "sl-loading" class'
    );
});

test( 'rowClick action binding is supported', function( assert ) {
    this.subject({
        columns: Ember.A([{
            title: 'Name',
            valuePath: 'name'
        }]),

        content: Ember.A([
            { name: 'Alice' },
            { name: 'Bob' },
            { name: 'Charlie' }
        ]),

        rowClick: 'test',

        targetObject: {
            test( row ) {
                assert.equal(
                    row.name,
                    'Alice',
                    'rowClick action is fired and passed row data correctly'
                );
            }
        }
    });

    this.$( 'td' ).first().trigger( 'click' );
});

test( 'Sortable columns and sortColumn actions are supported', function( assert ) {
    this.subject({
        columns: Ember.A([{
            sortable: true,
            title: 'Name',
            valuePath: 'name'
        }]),

        content: Ember.A([
            { name: 'Alice' },
            { name: 'Bob' },
            { name: 'Charlie' },
        ]),

        sortColumn: 'test',

        targetObject: {
            test( column ) {
                assert.equal(
                    column.valuePath,
                    'name',
                    'sortColumn is fired and passed column data correctly'
                );
            }
        }
    });

    this.$( 'th' ).first().trigger( 'click' );
});

test( 'Only primary columns remain visible when detail-pane is open', function( assert ) {
    this.subject({
        columns: Ember.A([
            {
                primary: true,
                title: 'Name',
                valuePath: 'name'
            }, {
                title: 'ID',
                valuePath: 'id'
            }
        ]),

        content: Ember.A([
            {
                id: 4,
                name: 'Alice'
            }, {
                id: 8,
                name: 'Bob'
            }, {
                id: 15,
                name: 'Charlie'
            }
        ]),

        detailPaneOpen: true
    });

    assert.equal(
        this.$( 'th:visible' ).length,
        1,
        'Only one column is visible with the detail-pane open'
    );

    assert.equal(
        Ember.$.trim( this.$( 'th:visible' ).text() ),
        'Name',
        'Visible column is expected primary column'
    );
});

test( 'requestData action is triggered correctly in paginated mode', function( assert ) {
    var expectedOffset = 1,
        component = this.subject({
            columns: Ember.A([ { title: 'Name', valuePath: 'name' } ]),
            content: Ember.A([ { name: 'Alice' } ]),
            pageSize: 1,
            requestData: 'test',
            totalCount: 2,

            targetObject: {
                test( limit, offset ) {
                    assert.equal(
                        offset,
                        expectedOffset,
                        `Triggered page change with expected offset ${expectedOffset}`
                    );
                }
            }
        });

    assert.expect( 2 );

    this.$( '.next-page-button' ).trigger( 'click' );

    Ember.run( () => {
        // Set loading to false so the pagination is not in "busy" state
        component.set( 'loading', false );
    });

    expectedOffset = 0;
    this.$( '.previous-page-button' ).trigger( 'click' );
});

test( 'sortColumn action is triggered correctly', function( assert ) {
    // register( fullName, factory, options )
    App.registry.register( 'controller:test-detail', Ember.Controller.extend({
        layout: '<p>Test content</p>'
    }));

    this.subject({
        columns: Ember.A([ { title: 'Name', valuePath: 'name' } ]),
        content: Ember.A([ { name: 'Alice' }, { name: 'Bob' } ]),
        detailPath: 'test-detail',
        sortColumn: 'test',

        targetObject: {
            test( column, ascending ) {
                console.log( 'Sorting', column, ascending );
            }
        }
    });

    console.log( this.$( 'th' ) );
});

/* Things to test:
 * open/close detail pane action(s)
 * toggleFilterPane
 * actionsButtonLabel
 * continuous mode
 * pagination data
 * sub-template paths (detail-footer, detail-header, detail, filter, footer, header)
 * filterButtonLabel
 * height: "auto" vs. fixed
 * Continuous grid nextPageScrollPoint and action
 * showActions and detail controller actions bindings
 * handleNewContent unsets loading state when content data changes
 * window resize causes updateHeight() to fire when width is "auto"
 * totalPages is computed correctly
 * disable and enable continuous paging
 * handleListContentScroll() on list-pane scroll
 * requestMoreData binding
*/
