import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import sinon from 'sinon';

const columns = Ember.A([
    { title: 'Name', valuePath: 'name' },
    { title: 'ID', valuePath: 'id' }
]);

const content = Ember.A([
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

test( 'Default values are set correctly', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'tagName' ),
        'div',
        'tagName is div'
    );

    assert.strictEqual(
        component.get( 'actionsButtonLabel' ),
        'Actions',
        'actionsButtonLabel is set to "Actions"'
    );

    assert.strictEqual(
        component.get( 'activeRecord' ),
        null,
        'activeRecord is set to null'
    );

    assert.deepEqual(
        component.get( 'columns' ),
        [],
        'columns is set to an empty array'
    );

    assert.strictEqual(
        component.get( 'content' ),
        null,
        'content is set to null'
    );

    assert.strictEqual(
        component.get( 'continuous' ),
        false,
        'continuous is set to false'
    );

    assert.strictEqual(
        component.get( 'currentPage' ),
        1,
        'currentPage is set to 1'
    );

    assert.strictEqual(
        component.get( 'detailComponent' ),
        null,
        'detailComponent is set to null'
    );

    assert.strictEqual(
        component.get( 'detailFooterComponent' ),
        null,
        'detailFooterComponent is set to null'
    );

    assert.strictEqual(
        component.get( 'detailHeaderComponent' ),
        null,
        'detailHeaderComponent is set to null'
    );

    assert.strictEqual(
        component.get( 'detailPaneOpen' ),
        false,
        'detailPaneOpen is false'
    );

    assert.strictEqual(
        component.get( 'filterButtonLabel' ),
        'Filter',
        'filterButtonLabel is "Filter"'
    );

    assert.strictEqual(
        component.get( 'filterPaneOpen' ),
        false,
        'filterPaneOpen is false'
    );

    assert.strictEqual(
        component.get( 'filterComponent' ),
        null,
        'filterComponent is null'
    );

    assert.strictEqual(
        component.get( 'footerPath' ),
        null,
        'footerPath is null'
    );

    assert.strictEqual(
        component.get( 'height' ),
        'auto',
        'height is "auto"'
    );

    assert.strictEqual(
        component.get( 'loading' ),
        false,
        'loading is false'
    );

    assert.strictEqual(
        component.get( 'nextPageScrollPoint' ),
        0,
        'nextPageScrollPoint is 0'
    );

    assert.strictEqual(
        component.get( 'pageSize' ),
        25,
        'pageSize is 25'
    );

    assert.strictEqual(
        component.get( 'rowActions' ),
        null,
        'rowActions is null'
    );

    assert.strictEqual(
        component.get( 'rowClick' ),
        null,
        'rowClick is null'
    );

    assert.strictEqual(
        component.get( 'sortAscending' ),
        true,
        'sortAscending is true'
    );

    assert.strictEqual(
        component.get( 'sortedColumnTitle' ),
        null,
        'sortedColumnTitle is null'
    );
});

test( 'Dependent keys are correct', function( assert ) {
    const component = this.subject();

    const showPaginationDependentKeys = [
        'continuous',
        'totalPages'
    ];

    const sortedColumnDependentKeys = [
        'columns',
        'sortedColumnTitle'
    ];

    const totalPagesDependentKeys = [
        'continuous',
        'pageSize',
        'totalCount'
    ];

    assert.deepEqual(
        component.showPagination._dependentKeys,
        showPaginationDependentKeys
    );

    assert.deepEqual(
        component.sortedColumn._dependentKeys,
        sortedColumnDependentKeys
    );

    assert.deepEqual(
        component.totalPages._dependentKeys,
        totalPagesDependentKeys
    );
});

test( 'changePage() triggers requestData action with correct arguments', function( assert ) {
    const spy = sinon.spy();
    const pageSize = 10;

    const component = this.subject({
        pageSize: pageSize,
        requestData: 'requestData',
        targetObject: {
            requestData: spy
        }
    });

    this.render();

    Ember.run( () => {
        component.send( 'changePage', 1 );
    });

    assert.ok(
        spy.calledWith( pageSize, 0 )
    );

    assert.strictEqual(
        component.get( 'loading' ),
        true,
        'Loading is set to true'
    );

    spy.reset();

    Ember.run( () => {
        component.send( 'changePage', 1 );
    });

    assert.ok(
        spy.notCalled,
        'Action is not fired if component is in loading state'
    );

    spy.reset();

    Ember.run( () => {
        component.set( 'loading', false );
        component.send( 'changePage', 2 );
    });

    assert.ok(
        spy.calledWith( pageSize, 10 )
    );
});

test( 'openDetailPane() updates component state', function( assert ) {
    const row = { title: 'Name', valuePath: 'name', active: false };
    const activeRecord = { title: 'Id', valuePath: 'id', active: true };
    const updateHeightSpy = sinon.spy();

    const component = this.subject({
        activeRecord: activeRecord,
        updateHeight: updateHeightSpy
    });

    Ember.run( () => {
        component.send( 'openDetailPane', row );
    });

    assert.strictEqual(
        activeRecord.active,
        false,
        'Active flag on previously active record was set to false'
    );

    assert.strictEqual(
        row.active,
        true,
        'Active flag on row was set to true'
    );

    assert.deepEqual(
        component.get( 'activeRecord' ),
        row,
        'Active record was set to passed in row'
    );

    assert.strictEqual(
        component.get( 'detailPaneOpen' ),
        true,
        'detailPaneOpen is set to true'
    );

    assert.ok(
        updateHeightSpy.calledOnce,
        true,
        'Update height was called'
    );
});

test( 'rowClick() fires rowClick action', function( assert ) {
    const rowClickSpy = sinon.spy();
    const row = { title: 'Name', valuePath: 'name', active: false };

    const component = this.subject({
        rowClick: 'rowClick',
        targetObject: {
            rowClick: rowClickSpy
        }
    });

    component.send( 'rowClick', row );

    assert.ok(
        rowClickSpy.calledWith( row ),
        'rowClick action was fired with correct row data'
    );
});

test( 'closeDetailPane() updates component state', function( assert ) {
    const activeRecord = { 'active': true };
    const updateHeightSpy = sinon.spy();

    const component = this.subject({
        activeRecord: activeRecord,
        updateHeight: updateHeightSpy
    });

    Ember.run( () => {
        component.send( 'closeDetailPane' );
    });

    assert.strictEqual(
        activeRecord.active,
        false,
        'Active record key "active" was set to false'
    );

    assert.strictEqual(
        component.get( 'activeRecord' ),
        null,
        'Active record was set to null'
    );

    assert.strictEqual(
        component.get( 'detailPaneOpen' ),
        false,
        'detailPaneOpen was set to false'
    );

    assert.ok(
        updateHeightSpy.calledOnce,
        'Update height was called'
    );
});

test( 'showPagination() returns correct value', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
       component.get( 'showPagination' ),
       false,
       'showPagination is false when continuous is false and totalPages is 0'
    );

    component.set( 'totalPages', 2 );

    assert.strictEqual(
       component.get( 'showPagination' ),
       true,
       'showPagination is true when continuous is false and totalPages is more than one'
    );

    component.set( 'continuous', true );

    assert.strictEqual(
       component.get( 'showPagination' ),
       false,
       'showPagination is false when continuous is true and totalPages is more than one'
    );

    component.set( 'totalPages', 0 );

    assert.strictEqual(
       component.get( 'showPagination' ),
       false,
       'showPagination is false when continuous is true and totalPages is 0'
    );
});

test( 'sortedColumns() returns the correct column', function( assert ) {
    const component = this.subject({
        sortedColumnTitle: null,
        columns
    });

    assert.strictEqual(
        component.get( 'sortedColumn' ),
        null,
        'null is returned when sortedColumnTitle is null'
    );

    component.set( 'sortedColumnTitle', 'Gender' );

    assert.strictEqual(
        component.get( 'sortedColumn' ),
        null,
        'null is returned when title provided is not present within the columns'
    );

    component.set( 'sortedColumnTitle', 'Name' );

    assert.deepEqual(
        component.get( 'sortedColumn' ),
        columns.findBy( 'title', 'Name' ),
        'Column returned is the correct column'
    );
});

test( 'totalPages() returns the correct value', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'totalPages' ),
        null,
        'totalPages is null when continuous is false, totalCount is 0 and pageSize is 0'
    );

    const totalCount = 99;
    const pageSize = 10;

    Ember.run( () => {
        component.set( 'totalCount', totalCount );
        component.set( 'pageSize', pageSize );
    });

    const totalPages = Math.ceil( totalCount / pageSize );

    assert.strictEqual(
        totalPages,
        component.get( 'totalPages' )
    );
});

test( 'handleNewContent() unsets loading state when content data changes', function( assert ) {
    const content = Ember.A();

    const component = this.subject({
        columns,
        content: content,
        loading: true
    });

    this.render();

    assert.ok(
        component.get( 'loading' ),
        'Initial loading is true'
    );

    Ember.run( () => {
        content.pushObject({
            id: 1,
            name: 'Danielle'
        });
    });

    assert.equal(
        component.get( 'loading' ),
        false,
        'Component is not in loading state after content update'
    );
});

test( 'handleNewContent() unbinds scroll event when there is no more data to request', function( assert ) {
    const content = Ember.A();

    const component = this.subject({
        columns,
        content: content,
        hasMoreData: false
    });

    this.render();

    const spy = sinon.spy( Ember.$.fn, 'off' );

    Ember.run( () => {
        content.pushObject({
            id: 1,
            name: 'Danielle'
        });
    });

    assert.ok(
        spy.calledWith( component.namespaceEvent( 'scroll' ) ),
        'off was called with scroll'
    );

    Ember.$.fn.off.restore();
});

test( 'setupAutoHeight() - updateHeight() is called on window resize when height is not specified', function( assert ) {
    const spy = sinon.spy();

    this.subject({
        columns,
        content,
        updateHeight: spy
    });

    this.render();

    spy.reset();

    Ember.$( window ).trigger( 'resize' );

    assert.ok(
        spy.calledOnce,
        'updateHeight was called on resize of window'
    );
});

test( 'setupContinuousPaging() enables continuous paging', function( assert ) {
    const spy = sinon.spy();

    const component = this.subject({
        columns,
        content,
        continuous: true,
        hasMoreData: true,
        enableContinuousPaging: spy
    });

    this.render();

    spy.reset();

    component.setupContinuousPaging();

    assert.ok(
        spy.calledOnce,
        'enableContinuousPaging was called'
    );

    spy.reset();

    Ember.run( () => {
        component.set( 'hasMoreData', false );
        component.setupContinuousPaging();
    });

    assert.notOk(
        spy.called,
        'enableContinuousPaging was not called when hasMoreData is false'
    );

    spy.reset();

    Ember.run( () => {
        component.set( 'continuous', false );
        component.set( 'hasMoreData', true );
        component.setupContinuousPaging();
    });

    assert.notOk(
        spy.called,
        'enableContinuousPaging was not called when continuous is false'
    );
});

test( 'updateHeight() sets correct height on content elements', function( assert ) {
    const heights = {
        detailContentHeight: 100,
        listContentHeight: 200
    };

    const stub = sinon.stub().returns( heights );
    const component = this.subject({
        columns,
        content,
        getContentHeights: stub
    });

    this.render();

    this.$( '.detail-pane .content' ).height( 0 ),
    this.$( '.list-pane .content' ).height( 0 ),

    component.updateHeight();

    assert.strictEqual(
        this.$( '.detail-pane .content' ).height(),
        heights.detailContentHeight,
        'detail content height was set correctly'
    );

    assert.strictEqual(
        this.$( '.list-pane .content' ).height(),
        heights.listContentHeight,
        'list content height was set correctly'
    );
});

test( 'getHeights() returns correct height values', function( assert ) {
    const elements = {};
    const component = this.subject({
        columns,
        content
    });

    this.render();

    elements.gridHeader =  {
        element: this.$( '.grid-header' ).height( 26 ),
        height: 26
    };


    elements.detailHeader = {
        element: this.$( '.detail-pane header' ).height( 50 ),
        height: 50
    };


    elements.detailFooter = {
        element: this.$( '.detail-pane footer' ).height( 100 ),
        height: 100
    };

    elements.listHeader = {
        element: this.$( '.list-pane .column-headers' ).height( 38 ),
        height: 38
    };

    elements.listFooter = {
        element: this.$( '.list-pane footer' ).height( 50 ),
        height: 50
    };

    elements.filterPane = {
        element: this.$( '.filter-pane' ).height( 220 ),
        height: 220
    };

    const heights = component.getHeights();

    for( const key in elements ) {
        const element = elements[ key ];
        const keyName = `${ key }Height`;

        assert.strictEqual(
            heights[ keyName ],
            element.height,
            `${ key } height was returned correctly`
        );
    }
});

test( 'getMaxHeight() returns correct height', function( assert ) {
    const component = this.subject({
        columns,
        content
    });

    this.render();

    const computedHeight = Ember.$( window ).innerHeight() - this.$().position().top;

    assert.strictEqual(
        component.getMaxHeight(),
        computedHeight,
        'When height is not set, computed height returned is correct'
    );

    Ember.run( () => component.set( 'height', 200 ) );

    assert.strictEqual(
        component.getMaxHeight(),
        200,
        'Static height is returned when height is set'
    );
});

test( 'getContentHeights() returns correct value for content heights', function( assert ) {
    const heights = {};
    const maxHeight = 1000;
    const component = this.subject({
        filterPaneOpen: false
    });

    sinon.stub( component, 'getMaxHeight' ).returns( maxHeight );
    sinon.stub( component, 'getHeights' ).returns( heights );

    const resetHeights = () => {
        heights.detailHeaderHeight = 0;
        heights.detailFooterHeight = 0;
        heights.listHeaderHeight = 0;
        heights.listFooterHeight = 0;
        heights.gridHeaderHeight = 0;
        heights.filterPaneHeight = 0;
    };

    resetHeights();

    let {
        detailContentHeight,
        listContentHeight
    } = component.getContentHeights();

    assert.strictEqual(
        detailContentHeight,
        1000,
        `detailContentHeight is ${ maxHeight }`
    );

    assert.strictEqual(
        listContentHeight,
        1000,
        `listContentHeight is ${ maxHeight }`
    );

    // Test detailContentHeight is computed correctly
    // when detailContentHeight is set

    heights.detailHeaderHeight = 100;

    ( { detailContentHeight } = component.getContentHeights() );

    assert.strictEqual(
        detailContentHeight,
        maxHeight - 100,
        `detailContentHeight is ${ maxHeight - 100 } when detailHeaderHeight is set`
    );

    // Test detailContentHeight is computed correctly
    // when detaiFooterHeight is set

    resetHeights();
    heights.detailFooterHeight = 100;
    ( { detailContentHeight } = component.getContentHeights() );

    assert.strictEqual(
        detailContentHeight,
        maxHeight - 100,
        `detailContentHeight is ${ maxHeight - 100 } when detailFooterHeight is set`
    );

    // Test listContentHeight and detailContentHeight is computed correctly
    // when filterPaneHeight is set

    resetHeights();
    heights.filterPaneHeight = 100;
    Ember.run( () => component.set( 'filterPaneOpen', true ) );

    ( { detailContentHeight, listContentHeight } = component.getContentHeights() );

    assert.strictEqual(
        detailContentHeight,
        maxHeight - 100,
        `detailContentHeight is ${ maxHeight - 100 } when filterPaneHeight is set`
    );

    assert.strictEqual(
        listContentHeight,
        maxHeight - 100,
        `listContentHeight is ${ maxHeight - 100 } when filterPaneHeight is set`

    );

    // Test listContentHeight and detailContentHeight is computed correctly
    // when gridHeaderHeight is set

    resetHeights();
    heights.gridHeaderHeight = 100;
    ( { detailContentHeight, listContentHeight } = component.getContentHeights() );

    assert.strictEqual(
        detailContentHeight,
        maxHeight - 100,
        `detailContentHeight is ${ maxHeight - 100 } when gridHeaderHeight is set`
    );

    assert.strictEqual(
        listContentHeight,
        maxHeight - 100,
        `listContentHeight is ${ maxHeight - 100 } when gridHeaderHeight is set`
    );

    // Test listContentHeight is computed correctly
    // when listHeaderHeight is set

    resetHeights();
    heights.listHeaderHeight = 100;
    ( { listContentHeight } = component.getContentHeights() );

    assert.strictEqual(
        listContentHeight,
        maxHeight - 100,
        `listContentHeight is ${ maxHeight - 100 } when listHeaderHeight is set`
    );

    // Test listContentHeight is computed correctly
    // when listFooterHeight is set

    resetHeights();
    heights.listFooterHeight = 100;
    ( { listContentHeight } = component.getContentHeights() );

    assert.strictEqual(
        listContentHeight,
        maxHeight - 100,
        `listContentHeight is ${ maxHeight - 100 } when listFooterHeight is set`
    );
});

test( 'enableContinuousPaging() binds scroll event', function( assert ) {
    const handleListContentSpy = sinon.spy();

    const component = this.subject({
        columns,
        content,
        setupContinuousPaging: function() { },
        handleListContentScroll: handleListContentSpy
    });

    this.render();

    component.enableContinuousPaging();

    this.$( '.list-pane .content' ).trigger( 'scroll' );

    Ember.run.later( () => {
        assert.ok(
            handleListContentSpy.called,
            'handleListContentScroll was called when scroll event was triggered'
        );
    });
});

test( 'handleListContentScroll() requests data as expected', function( assert ) {
    const spy = sinon.spy();

    const component = this.subject({
        columns,
        content,
        loading: false,
        continuous: true,
        requestMoreData: spy
    });

    this.render();

    const evt = {
        target: this.$( '.list-pane .content' )
    };

    Ember.run( () => {
        component.handleListContentScroll( evt );
    });

    assert.ok(
        spy.calledOnce,
        'requestData action was fired'
    );
});

test( 'hasMoreData() returns correct value', function( assert ) {
    const content = Ember.A();
    const component = this.subject({
        columns,
        content,
        totalCount: 0
    });

    assert.strictEqual(
        component.get( 'hasMoreData' ),
        false,
        'hasMoreData is false when there is no content and totalCount is 0'
    );

    content.push({
        id: 4,
        name: 'Alice'
    });

    component.set( 'totalCount', content.length );

    assert.strictEqual(
        component.get( 'hasMoreData' ),
        false,
        'hasMoreData is false when content length matches totalCount'
    );

    component.set( 'totalCount', content.length + 1 );

    assert.strictEqual(
        component.get( 'hasMoreData' ),
        true,
        'hasMoreData is true when content length is less then totalCount'
    );
});

test( 'requestMoreData() sets correct component state and fires requestData action', function( assert ) {
    const spy = sinon.spy();
    const component = this.subject({
        columns,
        content,
        hasMoreData: false,
        loading: false,
        requestData: spy,
        targetObject: {
            requestData: 'requestData'
        }
    });

    this.render();

    component.requestMoreData();

    assert.notOk(
        spy.called,
        'requestData was not fired when hasMoreData is false'
    );

    assert.strictEqual(
        component.get( 'loading' ),
        false,
        'component is not in loading state'
    );

    Ember.run( () => {
        component.set( 'hasMoreData', true );
        component.requestMoreData();
    });

    assert.ok(
        spy.calledOnce,
        'requestData action was fired when hasMoreData is true'
    );

    assert.strictEqual(
        component.get( 'loading' ),
        true,
        'component is in loading state'
    );
});

test( 'sortColumn() sets correct component state and fires sortColumn action', function( assert ) {
    const columns = Ember.A([
        { title: 'Name', valuePath: 'name' },
        { title: 'ID', valuePath: 'id' }
    ]);

    const sortColumnSpy = sinon.spy();

    const component = this.subject({
        columns,
        content,
        sortColumn: 'sortColumn',
        targetObject:  {
            sortColumn: sortColumnSpy
        }
    });

    Ember.run( () => {
        component.send( 'sortColumn', columns[ 0 ] );
    });

    assert.strictEqual(
        component.get( 'sortedColumnTitle' ),
        columns[ 0 ].title,
        'Sorted column title matches title of row passed in'

    );

    assert.strictEqual(
        component.get( 'sortDirection' ),
        true,
        'On first sort, sort direction is ascending'
    );

    assert.strictEqual(
       columns[ 0 ].sortAscending,
       true,
       'sortAscending is set to true on column that was passed in'
    );

    Ember.run( () => {
        component.send( 'sortColumn', columns[ 0 ] );
    });

    assert.strictEqual(
        component.get( 'sortedColumnTitle' ),
        columns[ 0 ].title,
        'Sorted column title has not changed'
    );

    assert.strictEqual(
        component.get( 'sortDirection' ),
        false,
        'sortDirection is descending'
    );

    assert.strictEqual(
       columns[ 0 ].sortAscending,
       false,
       'sortAscending is set to false on column that was passed in'
    );

    Ember.run( () => {
        component.send( 'sortColumn', columns[ 1 ] );
    });

    assert.strictEqual(
       columns[ 0 ].sortAscending,
       null,
       'sortAscending is set to null on previously sorted column'
    );
});

test( 'toggleFilterPane() toggles filter pane and updates height of container', function( assert ) {
    const updateHeightSpy = sinon.spy();
    const component = this.subject({
        updateHeight: updateHeightSpy
    });

    const filterPaneOpen = component.get( 'filterPaneOpen' );

    Ember.run( () => {
        component.send( 'toggleFilterPane' );
    });

    assert.strictEqual(
       component.get( 'filterPaneOpen' ),
       !filterPaneOpen,
       'filterPaneOpen property was toggled'
    );

    assert.ok(
        updateHeightSpy.calledOnce,
        'updateHeight was called'
    );
});


test( 'pagination data is handled correctly', function( assert ) {
    const component = this.subject({
        columns,
        content,
        pageSize: 1,
        totalCount: content.length
    });

    assert.equal(
        component.get( 'showPagination' ),
        true,
        'Pagination control is shown'
    );

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

    this.$( '.next-page-button' ).trigger( 'click' );

    assert.equal(
        component.get( 'hasMoreData' ),
        false,
        'Current page is the last page'
    );

    Ember.run( () => {
        component.set( 'loading', false );
    });

    this.$( '.previous-page-button' ).trigger( 'click' );

    assert.equal(
        component.get( 'currentPage' ),
        2,
        'Current page decremented correctly'
    );
});

test( 'Window resize triggers updateHeight() with "auto" width', function( assert ) {
    const spy = sinon.spy();
    this.subject({
        columns,
        content,
        height: 'auto',
        updateHeight: spy
    });

    this.render();

    spy.reset();

    Ember.$( window ).trigger( 'resize' );

    assert.ok(
        spy.calledOnce,
        'updateHeight() is called after window resize'
    );
});

test( 'dropButtonSelect action sends an action to the targetObject', function( assert ) {
    const testActionSpy = sinon.spy();
    const rowData = { foo: 'bar' };

    const component = this.subject({
        columns,
        content,
        testAction: 'testAction',
        targetObject: {
            testAction: testActionSpy
        }
    });

    component.send( 'dropButtonSelect', rowData, 'testAction' );

    assert.ok(
        testActionSpy.calledWith( rowData ),
        'testAction was sent with the correct argument'
    );
});

test( 'Event handlers are registered and unregistered', function( assert ) {
    const spyOn = sinon.spy( Ember.$.fn, 'on' );
    const spyOff = sinon.spy( Ember.$.fn, 'off' );

    const component = this.subject({
        continuous: false,
        hasMoreData: false
    });

    this.render();

    spyOn.reset();

    component.trigger( 'didInsertElement' );

    assert.ok(
        spyOn.calledWith( component.namespaceEvent( 'resize' ) ),
        'resize event bound'
    );

    spyOn.reset();

    component.enableContinuousPaging();

    assert.ok(
        spyOn.calledWith( component.namespaceEvent( 'scroll' ) ),
        'scroll event bound'
    );

    spyOff.reset();

    component.trigger( 'willClearRender' );

    assert.ok(
        spyOff.calledWith( component.namespaceEvent( 'resize' ) ),
        'resize event unbound'
    );

    assert.ok(
        spyOff.calledWith( component.namespaceEvent( 'scroll' ) ),
        'scroll event unbound'
    );

    Ember.$.fn.on.restore();
    Ember.$.fn.off.restore();
});

test( 'Only required references to Ember.$, $ or jQuery exist', function( assert ) {
    const jqueryAliasSpy = sinon.spy( window, '$' );
    const jquerySpy = sinon.spy( window, 'jQuery' );
    const emberJquery = sinon.spy( Ember, '$' );

    this.subject();
    this.render();

    assert.notOk(
        jquerySpy.called,
        'there are no references to jQuery'
    );

    assert.notOk(
        jqueryAliasSpy.called,
        'there are no references to $'
    );

    assert.notOk(
        emberJquery.calledOn( window ),
        'Ember.$ was called on the window object'
    );

    assert.notOk(
        emberJquery.calledOnce,
        'Ember.$ was once called once'
    );

    window.$.restore();
    window.jQuery.restore();
    Ember.$.restore();
});
