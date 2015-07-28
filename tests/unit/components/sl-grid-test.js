import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import { skip } from 'qunit';

const columns = new Ember.A([
    { title: 'Name', valuePath: 'name' },
    { title: 'ID', valuePath: 'id' }
]);

const content = new Ember.A([
    { id: 4, name: 'Alice' },
    { id: 8, name: 'Bob' },
    { id: 15, name: 'Charlie' }
]);

moduleForComponent( 'sl-grid', 'Unit | Component | sl grid', {
    needs: [
        'component:sl-button',
        'component:sl-drop-button',
        'component:sl-drop-option',
        'component:sl-grid-cell',
        'component:sl-grid-column-header',
        'component:sl-grid-row',
        'component:sl-pagination'
    ],

    unit: true
});

test( 'Default classes are present', function( assert ) {
    this.subject({ columns, content });

    assert.ok(
        this.$().hasClass( 'sl-grid' ),
        'Rendered component has class "sl-grid"'
    );
});

test( 'Loading state adds loading class', function( assert ) {
    const component = this.subject({ columns, content });

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
        columns,
        content,
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
        content,
        sortColumn: 'test',

        columns: new Ember.A([
            {
                sortable: true,
                title: 'Name',
                valuePath: 'name'
            }
        ]),

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
        columns: new Ember.A([
            {
                primary: true,
                title: 'Name',
                valuePath: 'name'
            }, {
                title: 'ID',
                valuePath: 'id'
            }
        ]),

        content,

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
    let expectedOffset = 1;

    const component = this.subject({
        columns,
        content,
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

test( 'Actions button label text is settable', function( assert ) {
    this.subject({
        actionsButtonLabel: 'Test',
        columns,
        content,
        rowActions: new Ember.A( [ { action: 'test', label: 'Test' } ] )
    });

    assert.equal(
        Ember.$.trim( this.$( 'td.actions-cell button' ).first().text() ),
        'Test',
        'Actions column header has expected title'
    );
});

test( 'Auto height is enabled by default', function( assert ) {
    const component = this.subject({ columns, content });

    assert.equal(
        component.get( 'height' ),
        'auto',
        'Default component height is "auto"'
    );
});

test( 'Fixed height values are supported', function( assert ) {
    let totalHeight;

    this.subject({ columns, content, height: 1000 });
    this.render();

    totalHeight = (
        parseInt( this.$( '.grid-header' ).css( 'height' ) ) +
        parseInt( this.$( '.list-pane .column-headers' ).css( 'height' ) ) +
        parseInt( this.$( '.list-pane .content' ).css( 'height' ) ) +
        parseInt( this.$( '.list-pane footer' ).css( 'height' ) )
    );

    assert.equal(
        totalHeight,
        1000,
        'Total calculated height is expected value'
    );
});

test( 'Continuous mode and requestData are supported', function( assert ) {
    this.subject({
        columns,
        content,
        continuous: true,
        hasMoreData: true,
        requestData: 'test',

        targetObject: {
            test() {
                assert.strictEqual(
                    arguments.length,
                    0,
                    'Continuous-enabled requestData fired as expected'
                );
            }
        }
    });

    Ember.run( () => {
        this.$( '.list-pane .content' ).trigger( 'scroll' );
    });
});

test( 'handleNewContent unsets loading state when content data changes', function( assert ) {
    const myContent = new Ember.A();

    const component = this.subject({
        columns,
        content: myContent,
        loading: true
    });

    this.render();

    assert.ok(
        component.get( 'loading' ),
        'Initial loading can be set to true'
    );

    Ember.run( () => {
        myContent.pushObject({ id: 1, name: 'Danielle' });
    });

    assert.equal(
        component.get( 'loading' ),
        false,
        'Component is not in loading state after content update'
    );
});

test( 'Total pages count is computed correctly', function( assert ) {
    const component = this.subject({
        columns,
        content,
        pageSize: 10,
        totalCount: 999
    });

    assert.equal(
        component.get( 'totalPages' ),
        100,
        'Total calculated pages is expected value'
    );
});

test( 'Pagination data is handled correctly', function( assert ) {
    const component = this.subject({
        columns,
        content,
        pageSize: 1,
        totalCount: content.length
    });

    assert.equal(
        component.get( 'currentPage' ),
        1,
        'Initial currentPage is 1'
    );

    this.$( '.next-page-button' ).trigger( 'click' );

    assert.equal(
        component.get( 'currentPage' ),
        2,
        'Current page incremented correctly'
    );

    Ember.run( () => {
        component.set( 'loading', false );
    });

    this.$( '.previous-page-button' ).trigger( 'click' );

    assert.equal(
        component.get( 'currentPage' ),
        1,
        'Current page decremented correctly'
    );
});

test( 'Window resize triggers updateHeight() with "auto" width', function( assert ) {
    const component = this.subject({ columns, content, height: 'auto' });

    this.render();

    const spy = window.sinon.spy( component, 'updateHeight' );

    assert.equal(
        spy.calledOnce,
        false,
        'updateHeight() has not been called initially'
    );

    Ember.$( window ).trigger( 'resize' );

    assert.equal(
        spy.calledOnce,
        true,
        'updateHeight() is called after window resize'
    );
});

// These tests require valid registered template paths for proper testing.
skip( 'Sub-template paths are determined correctly' );
skip( 'Toggling detail pane is supported' );
skip( 'Toggling filter pane is supported' );
skip(
    'Bindings run for showActions and detail controller actions'
);
skip( 'Filter button label text is settable' );
