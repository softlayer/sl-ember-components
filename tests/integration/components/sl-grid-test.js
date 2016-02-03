import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

const columns = Ember.A([
    { title: 'Name', valuePath: 'name' },
    { title: 'ID', valuePath: 'id' }
]);

const rowActions = [
    {
        label: 'Log',
        action: 'sendLog'
    },
    {
        label: 'Another Action',
        action: 'anotherAction'
    }
];

const content = Ember.A([
    { id: 4, name: 'Alice' },
    { id: 8, name: 'Bob' },
    { id: 9, name: 'Charlie' },
    { id: 10, name: 'Henry' },
    { id: 11, name: 'Mary' }
]);

const defaultTemplate = hbs`
    {{#sl-grid columns=columns content=content}}
        <h1>Header</h1>
    {{/sl-grid}}
`;

moduleForComponent( 'sl-grid', 'Integration | Component | sl grid', {
    integration: true
});

test( 'Content is yielded', function( assert ) {
    this.render( defaultTemplate );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'h1' ).text(),
        'Header'
    );
});

test( 'Header columns and row counts match data passed in', function( assert ) {
    this.set( 'columns', columns );
    this.set( 'content', content );

    this.render( hbs`{{sl-grid columns=columns content=content}}` );

    const first = this.$( '>:first-child' );

    assert.strictEqual(
        first.find( 'table tbody tr' ).length,
        content.length + 1,
        'rendered row count matches content row count (plus one for duplicated header)'
    );

    assert.strictEqual(
        first.find( 'table thead th' ).length,
        columns.length,
        'header column count matches columns count of columns passed in'
    );
});

test( 'Setting "sortable" property within the columns property to true applies the sortable-column class',
    function( assert ) {
        const columns = Ember.A([
            { title: 'Name', valuePath: 'name' },
            { title: 'ID', valuePath: 'id', sortable: true }
        ]);

        this.set( 'columns', columns );
        this.set( 'content', content );

        this.render( hbs`{{sl-grid columns=columns content=content}}` );

        const first = this.$( '>:first-child' );

        assert.ok(
            first.find( 'thead th:nth-child(2)' ).hasClass( 'sortable-column' )
        );
    }
);

test( 'Primary column header and cells all get class "primary-column"', function( assert ) {
    const columns = Ember.A([
        { title: 'Name', valuePath: 'name' },
        { title: 'ID', valuePath: 'id', primary: true }
    ]);

    const contentTemplate = hbs`<h1>content</h1>`;

    this.registry.register( 'template:detail-component', contentTemplate );
    this.registry.register( 'component:detail-component',
        Ember.Component.extend({
            layoutName: 'detail-component'
        })
    );

    this.set( 'columns', columns );
    this.set( 'content', content );

    this.render( hbs`
        {{sl-grid
             columns=columns
             content=content
             detailComponent="detail-component"
         }}
    ` );

    const first = this.$( '>:first-child' );

    assert.strictEqual(
        first.find( 'table thead th.primary-column' ).length,
        1,
        'Exactly one column header gets class "primary-column"'
    );

    assert.strictEqual(
        first.find( 'table tbody tr td.primary-column' ).length,
        content.length,
        'Exactly one cell in each content row gets class "primary-column"'
    );
});

test( 'Action requestData is fired in continuous mode when user scrolls to the bottom of the grid', function( assert ) {
    this.set( 'columns', columns );
    this.set( 'content', content );
    this.set( 'totalCount', content.length + 10 );

    const spy = sinon.spy();

    this.on( 'requestData', spy );

    this.render( hbs`
        {{sl-grid
            columns=columns
            requestData="requestData"
            totalCount=totalCount
            content=content
            continuous=true
            height="10px"
        }}
    ` );

    Ember.run( () => {
        this.$( '>:first-child' ).find( '> div > table' ).parent().trigger( 'scroll' );
    });

    assert.ok(
        spy.calledOnce,
        'requestData action fired'
    );
});

test( 'Pagination is displayed at the bottom of the grid and page count is correct', function( assert ) {
    const pageSize = 25;

    this.set( 'columns', columns );
    this.set( 'content', content );
    this.set( 'pageSize', pageSize );
    this.set( 'totalCount', 100 );

    this.render( hbs`
        {{sl-grid
            columns=columns
            totalCount=totalCount
            content=content
            pageSize=pageSize
        }}
    ` );

    const first = this.$( '>:first-child' );

    assert.strictEqual(
        first.find( '.pagination' ).length,
        1,
        'Pagination is displayed'
    );

    const text = first.find( '.pagination li' ).filter(
            ':not(:first-child, :last-child)'
        ).find( 'a' ).text();

    assert.strictEqual(
        text,
        '1234',
        'Page count is correct on pagination'
    );
});

test( 'Action requestData is fired with correct arguments in paging mode', function( assert ) {
    const pageSize = 25;
    const offset = 25;

    this.set( 'columns', columns );
    this.set( 'content', content );
    this.set( 'pageSize', pageSize );
    this.set( 'totalCount', 50 );

    const spy = sinon.spy();

    this.on( 'requestData', spy );

    this.render( hbs`
        {{sl-grid
            columns=columns
            requestData="requestData"
            totalCount=totalCount
            content=content
            pageSize=pageSize
        }}
    ` );

    const first = $( '>:first-child' );

    first.find( '.pagination li:last-child a' ).click();

    assert.ok(
        spy.calledOnce,
        'requestData action fired'
    );

    assert.ok(
        spy.calledWith( pageSize, offset ),
        'requestData was called with correct arguments'
    );
});

test( 'Clicking on a row fires the rowClick action', function( assert ) {
    const firstRowId = content[ 0 ].id;
    const spy = sinon.spy();

    this.set( 'columns', columns );
    this.set( 'content', content );

    this.on( 'rowClick', spy );

    this.render( hbs`
        {{sl-grid
            columns=columns
            content=content
            rowClick="rowClick"
        }}
    ` );

    this.$( '>:first-child' ).find( 'tbody tr + tr' ).first().trigger( 'click' );

    assert.ok(
        spy.calledOnce,
        'rowClick action was fired'
    );

    assert.strictEqual(
        spy.getCall( 0 ).args[ 0 ].record.id,
        firstRowId,
        'rowClick action was called with correct row'
    );
});

test( 'detailComponent, detailHeaderComponent, detailFooterComponent' +
        'is rendered and correct data is displayed on row click',
    function( assert ) {
        const headerTemplate = hbs`<h1>header:{{model.id}}</h1>`;
        const contentTemplate = hbs`<h1>content:{{model.id}}</h1>`;
        const footerTemplate = hbs`<h1>footer:{{model.id}}</h1>`;

        const firstModelId = content[ 0 ].id;

        const registerTemplate = ( name, template ) => {
            this.registry.register( `template:${ name }`, template );
            this.registry.register( `component:${ name }`,
                Ember.Component.extend({
                    layoutName: `${ name }`
                })
            );
        };

        registerTemplate( 'detail-header-component', headerTemplate );
        registerTemplate( 'detail-component', contentTemplate );
        registerTemplate( 'detail-footer-component', footerTemplate );

        this.set( 'columns', columns );
        this.set( 'content', content );

        this.render( hbs`
            {{sl-grid
                 columns=columns
                 content=content
                 detailComponent="detail-component"
                 detailHeaderComponent="detail-header-component"
                 detailFooterComponent="detail-footer-component"
             }}
        ` );

        const first = this.$( '>:first-child' );
        const detailHeaderH1 = first.find( '.panel-heading' ).find( 'h1' );
        const detailContentH1 = first.find( '.panel-body' ).find( 'h1' );
        const detailFooterH1 = first.find( '.panel-footer' ).find( 'h1' );

        first.find( 'td:first' ).trigger( 'click' );

        assert.strictEqual(
            detailHeaderH1.text(),
            `header:${ firstModelId }`
        );

        assert.strictEqual(
            detailContentH1.text(),
            `content:${ firstModelId }`
        );

        assert.strictEqual(
            detailFooterH1.text(),
            `footer:${ firstModelId }`
        );

        [
            'detail-header-component',
            'detail-component',
            'detail-footer-component'
        ].forEach( ( name ) => {
            this.registry.unregister( `component:${ name }` );
            this.registry.unregister( `template:${ name }` );
        });
    }
);

test( 'Filter component is displayed when filterComponent property is set', function( assert ) {
    this.registry.register( 'component:filter-component',
        Ember.Component.extend({
            layoutName: 'filter-component'
        })
    );

    this.registry.register( 'template:filter-component', hbs`<h1>FilterComponent</h1>` );

    this.render( `hbs
        {{sl-grid filterComponent="filter-component"}}
    ` );

    const first = this.$( '>:first-child' );

    first.find( 'button:contains(Filter)' ).click();

    assert.ok(
        first.find( '.filter-content' ).is( ':visible' ),
        'Filter pane is visible'
    );

    assert.strictEqual(
        first.find( '.filter-content' ).find( 'h1:contains(FilterComponent)' ).length,
        1,
        'Filter pane component passed in was rendered'
    );

    this.registry.unregister( 'component:filter-component' );
    this.registry.unregister( 'template:filter-component' );
});

test( 'Setting filterButtonLabel changes filter button text', function( assert ) {
    const label = '__new_label__';

    this.set( 'filterButtonLabel', label );

    // Pass a component string value so filterButton gets rendered
    this.render( `hbs
        {{sl-grid
             filterComponent='not-a-real-component'
             filterButtonLabel=filterButtonLabel
         }}
    ` );

    const first = this.$( '>:first-child' );

    assert.strictEqual(
        first.find( '> header button' ).text().trim(),
        label
    );
});

test( 'Setting height property gives the grid a fixed height', function( assert ) {
    const height = '25em';

    this.set( 'columns', columns );
    this.set( 'content', content );
    this.set( 'height', height );

    this.render( hbs`
        {{sl-grid columns=columns content=content height=height}}
    ` );

    const first = this.$( '>:first-child' );

    const total = $( '<p>' ).css( {
        'height': '1em',
        'display': 'block'
    } ).appendTo( first ).height() * 25;

    assert.strictEqual(
        first.height(),
        total,
        'Height style was correctly set'
    );
});

test( 'Row actions are rendered and actions are triggered as expected', function( assert ) {
    const sendLogSpy  = sinon.spy();

    this.set( 'columns', columns );
    this.set( 'content', content );
    this.set( 'rowActions', rowActions );

    this.on( 'sendLog', sendLogSpy );

    this.render( hbs`
        {{sl-grid
            columns=columns
            content=content
            rowActions=rowActions
            sendLog=( action 'sendLog' )
        }}
    ` );

    const first = this.$( '>:first-child' );
    const firstRow = first.find( '> div > table tbody tr + tr' ).first();

    assert.strictEqual(
        firstRow.find( 'a:first' ).text().trim(),
        rowActions[ 0 ].label,
        'Row action link was present'
    );

    firstRow.find( 'a:first' ).click();

    assert.ok(
        sendLogSpy.called,
        'Action was triggered on click of row action'
    );

    assert.strictEqual(
        sendLogSpy.getCall( 0 ).args[ 0 ].id,
        content[ 0 ].id,
        'Row passed to row action callback, matches clicked row'
    );
});

test( 'actionButtonLabel property is accepted', function( assert ) {
    const actionsButtonLabel = 'More Options';

    this.set( 'columns', columns );
    this.set( 'content', content );
    this.set( 'rowActions', rowActions );

    this.render( hbs`
        {{sl-grid
            columns=columns
            content=content
            rowActions=rowActions
        }}
    ` );

    let cell = this.$( '>:first-child' ).find( 'td.actions-cell:first' );

    assert.strictEqual(
        cell.find( 'button' ).text().trim(),
        'Actions',
        'Actions button label is "Actions" by default'
    );

    this.set( 'actionsButtonLabel', actionsButtonLabel );

    this.render( hbs`
        {{sl-grid
            columns=columns
            content=content
            rowActions=rowActions
            actionsButtonLabel=actionsButtonLabel
        }}
    ` );

    cell = this.$( '>:first-child' ).find( 'td.actions-cell:first' );

    assert.strictEqual(
        cell.find( 'button' ).text().trim(),
        actionsButtonLabel,
        'Actions button can be changed'
    );
});

test( 'sortColumn action was fired with correct arguments when a sortable column is selected for sorting',
    function( assert ) {
        const columns = Ember.A([
            { title: 'Name', valuePath: 'name' },
            { title: 'ID', valuePath: 'id', sortable: true }
        ]);

        const sortColumnSpy = sinon.spy();

        this.set( 'columns', columns );
        this.set( 'content', content );
        this.on( 'sortColumn', sortColumnSpy );

        this.render( hbs`
            {{sl-grid
                columns=columns
                content=content
                sortColumn="sortColumn"
            }}
        ` );

        const first = this.$( '>:first-child' );

        first.find( 'thead th:nth-child(2)' ).click();

        const row = sortColumnSpy.getCall( 0 ).args[ 0 ];

        assert.ok(
            sortColumnSpy.calledOnce,
            'sortColumn action was fired'
        );

        assert.strictEqual(
             row.id,
             columns[ 1 ].id,
             'sortColumn action handler received correct row'
        );
    }
);
