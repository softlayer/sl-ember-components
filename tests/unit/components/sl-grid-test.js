import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import sinon from 'sinon';
import globalLibraries from '../../helpers/sl/synchronous/global-libraries';

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
        component.get( 'actionsButtonLabel' ),
        'Actions',
        'actionsButtonLabel is set to "Actions"'
    );

    assert.strictEqual(
        component.get( 'activeRow' ),
        null,
        'activeRow is set to null'
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
        '',
        'height is ""'
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

    const component = this.subject({
        activeRow: activeRecord
    });

    Ember.run( () => {
        component.send( 'selectRow', row );
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
        component.get( 'activeRow' ),
        row,
        'Active record was set to passed in row'
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

test( 'deselectRow() updates component state', function( assert ) {
    const activeRecord = { 'active': true };

    const component = this.subject({
        activeRow: activeRecord
    });

    Ember.run( () => {
        component.send( 'deselectRow' );
    });

    assert.strictEqual(
        activeRecord.active,
        false,
        'Active record key "active" was set to false'
    );

    assert.strictEqual(
        component.get( 'activeRow' ),
        null,
        'Active record was set to null'
    );

    assert.strictEqual(
        component.get( 'detailPaneOpen' ),
        false,
        'detailPaneOpen was set to false'
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

    assert.strictEqual(
        10,
        component.get( 'totalPages' ),
        'Total pages is computed as 10'
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

test( 'setupCalculatedHeight() - updateHeight() is called on window resize', function( assert ) {
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

test( 'updateHeight() sets grid table height when not empty', function( assert ) {
    const height = '200px';

    this.subject({
        columns,
        content,
        height
    });

    this.render();

    assert.ok(
        this.$( '> div > table' ).parent().height() < 200,
        'detail content height is something less than what was given for total'
    );

    assert.strictEqual(
        parseInt( this.$( '> div > table' ).parent().css( 'height' ) ),
        this.$( '> div > table' ).parent().height(),
        'detail content height was set to something specific'
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

    this.$( '> div > table' ).parent().trigger( 'scroll' );

    assert.ok(
        handleListContentSpy.called,
        'handleListContentScroll was called when scroll event was triggered'
    );
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

test( 'sortColumn() fires sortColumn action', function( assert ) {
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

    assert.ok(
        sortColumnSpy.calledOnce,
        'sortColumn action fired'
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

test( 'Observer keys are correct', function( assert ) {
    const component = this.subject();

    const handleNewContentKeys = [
        'content.[]'
    ];

    const displayFooterKeys = [
        'footerPath',
        'showPagination'
    ];

    assert.deepEqual(
        component.handleNewContent.__ember_observes__,
        handleNewContentKeys,
        'Observer keys are correct for handleNewContent()'
    );

    assert.deepEqual(
        component.displayFooter.__ember_observes__,
        displayFooterKeys,
        'Observer keys are correct for displayFooter()'
    );
});

test( 'Dependent keys are correct', function( assert ) {
    const component = this.subject();

    const showPaginationDependentKeys = [
        'continuous',
        'totalPages'
    ];

    const totalPagesDependentKeys = [
        'continuous',
        'pageSize',
        'totalCount'
    ];

    const hasMoreDataDependentKeys = [
        'content.length',
        'totalCount'
    ];

    assert.deepEqual(
        component.showPagination._dependentKeys,
        showPaginationDependentKeys
    );

    assert.deepEqual(
        component.totalPages._dependentKeys,
        totalPagesDependentKeys
    );

    assert.deepEqual(
        component.hasMoreData._dependentKeys,
        hasMoreDataDependentKeys
    );
});

test( 'There are no references to $ or jQuery, and only some references to Ember.$', function( assert ) {
    globalLibraries.setupSpies();

    const component = this.subject();

    this.render();

    globalLibraries.triggerEvents( component );

    assert.notOk(
        globalLibraries.jqueryAliasSpy.called,
        '"$" was not referenced in code'
    );

    assert.notOk(
        globalLibraries.jquerySpy.called,
        '"jQuery" was not referenced in code'
    );

    assert.ok(
        globalLibraries.emberJquerySpy.calledThrice,
        'Ember.$ was called thrice'
    );

    globalLibraries.restoreSpies();
});
