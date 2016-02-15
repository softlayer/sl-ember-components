import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

const menuItems = Ember.A([
    {
        label: 'Main One',
        items: [
            {
                label: 'Sub 1',
                action: 'testActionName',
                data: '"testData"'
            },
            {
                label: 'Sub 2',
                items: [
                    { label: 'Sub 2 - 1' },
                    { label: 'Sub 2 - 2' }
                ]
            }
        ]
    },
    { label: 'Main Two' }
]);

const mockStream = {
    actions: {},

    on( actionName, handler ) {
        console.log( 'here' );
        this.actions[ actionName ] = handler;
    },

    subject: {
        dispose() {
            mockStream.actions = {};
        },

        onCompleted() {}
    }
};

moduleForComponent( 'sl-menu', 'Integration | Component | sl menu', {
    integration: true
});

test( 'Default rendered state', function( assert ) {

    this.render( hbs`
        {{sl-menu}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-ember-components-menu' ),
        'Has class "sl-ember-components-menu"'
    );

    assert.ok(
        this.$( '>:first-child' ).find( 'ul' ).hasClass( 'list-unstyled' ),
        'Has class "list-unstyled"'
    );

    assert.ok(
        this.$( '>:first-child' ).find( 'ul' ).hasClass( 'btn-group' ),
        'Has class "btn-group"'
    );
});

test( '"items" property is supported', function( assert ) {

    this.set( 'menuItems', menuItems );

    this.render( hbs`
        {{sl-menu
            items=menuItems
        }}
    ` );

    const menuItem = this.$( '>:first-child' ).find( 'li' );

    assert.strictEqual(
        menuItem.find( 'a' ).text().trim(),
        'Main OneSub 1Sub 2Sub 2 - 1Sub 2 - 2Main Two',
        'First menu item is rendered'
    );
});

test( '"allowShowAll" property is supported', function( assert ) {

    this.set( 'menuItems', menuItems );
    this.set( 'testAllowShowAll', false );

    this.render( hbs`
        {{sl-menu
            items=menuItems
            allowShowAll=testAllowShowAll
        }}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'a:contains("Show All")' ).length,
        0,
        'menu item is not included by default'
    );

    this.set( 'testAllowShowAll', true );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'a:contains("Show All")' ).length,
        1,
        'menu item is included when "allowShowAll" is true'
    );
});

test( 'Actions are handled properly from menu items', function( assert ) {
    assert.expect( 3 );

    const done = assert.async();

    this.set( 'menuItems', menuItems );

    this.render( hbs`
        {{sl-menu
            items=menuItems
            action="testAction"
        }}
    ` );

    this.on( 'testAction', ( actionName, data ) => {
        assert.ok(
            true,
            'The test action was called'
        );

        assert.strictEqual(
            actionName,
            'testActionName',
            'ActionName is passed'
        );

        assert.strictEqual(
            data,
            '"testData"',
            'Data is passed'
        );

        done();
    });

    this.$( '>:first-child' ).find( '> ul > li:first > ul > li:first > a' ).trigger( 'click' );
});

test( 'Component responds to "doAction" stream action', function( assert ) {

    this.set( 'testAction', sinon.spy() );

    this.render( hbs`
        {{sl-menu
            doAction=testAction
            streamName="testStreamName"
        }}
    ` );

    const streamService = this.container.lookup( 'service:stream' );
    streamService.send( 'testStreamName', 'doAction' );

    assert.ok(
        this.get( 'testAction' ).calledOnce,
        'doAction() was triggered successfully'
    );
});

test( 'Component responds to "hideAll" stream action', function( assert ) {

    this.set( 'testAction', sinon.spy() );

    this.render( hbs`
        {{sl-menu
            hideAll=testAction
            streamName="testStreamName"
        }}
    ` );

    const streamService = this.container.lookup( 'service:stream' );
    streamService.send( 'testStreamName', 'hideAll' );

    assert.ok(
        this.get( 'testAction' ).calledOnce,
        'hideAll() was triggered successfully'
    );
});

test( 'Component responds to "select" stream action', function( assert ) {

    this.set( 'testAction', sinon.spy() );

    this.render( hbs`
        {{sl-menu
            select=testAction
            streamName="testStreamName"
        }}
    ` );

    const streamService = this.container.lookup( 'service:stream' );
    streamService.send( 'testStreamName', 'select', 0 );

    assert.ok(
        this.get( 'testAction' ).calledOnce,
        'select() was triggered successfully'
    );

    assert.ok(
        this.get( 'testAction' ).calledWithExactly( 0 ),
        'select() was called with "0"'
    );
});

test( 'Component responds to "selectDown" stream action', function( assert ) {

    this.set( 'testAction', sinon.spy() );

    this.render( hbs`
        {{sl-menu
            selectDown=testAction
            streamName="testStreamName"
        }}
    ` );

    const streamService = this.container.lookup( 'service:stream' );
    streamService.send( 'testStreamName', 'selectDown' );

    assert.ok(
        this.get( 'testAction' ).calledOnce,
        'selectDown() was triggered successfully'
    );
});

test( 'Component responds to "selectLeft" stream action', function( assert ) {

    this.set( 'testAction', sinon.spy() );

    this.render( hbs`
        {{sl-menu
            selectLeft=testAction
            streamName="testStreamName"
        }}
    ` );

    const streamService = this.container.lookup( 'service:stream' );
    streamService.send( 'testStreamName', 'selectLeft' );

    assert.ok(
        this.get( 'testAction' ).calledOnce,
        'selectLeft() was triggered successfully'
    );
});

test( 'Component responds to "selectNext" stream action', function( assert ) {

    this.set( 'testAction', sinon.spy() );

    this.render( hbs`
        {{sl-menu
            selectNext=testAction
            streamName="testStreamName"
        }}
    ` );

    const streamService = this.container.lookup( 'service:stream' );
    streamService.send( 'testStreamName', 'selectNext' );

    assert.ok(
        this.get( 'testAction' ).calledOnce,
        'selectNext() was triggered successfully'
    );
});

test( 'Component responds to "selectParent" stream action', function( assert ) {

    this.set( 'testAction', sinon.spy() );

    this.render( hbs`
        {{sl-menu
            selectParent=testAction
            streamName="testStreamName"
        }}
    ` );

    const streamService = this.container.lookup( 'service:stream' );
    streamService.send( 'testStreamName', 'selectParent' );

    assert.ok(
        this.get( 'testAction' ).calledOnce,
        'selectParent() was triggered successfully'
    );
});

test( 'Component responds to "selectPrevious" stream action', function( assert ) {

    this.set( 'testAction', sinon.spy() );

    this.render( hbs`
        {{sl-menu
            selectPrevious=testAction
            streamName="testStreamName"
        }}
    ` );

    const streamService = this.container.lookup( 'service:stream' );
    streamService.send( 'testStreamName', 'selectPrevious' );

    assert.ok(
        this.get( 'testAction' ).calledOnce,
        'selectPrevious() was triggered successfully'
    );
});

test( 'Component responds to "selectRight" stream action', function( assert ) {

    this.set( 'testAction', sinon.spy() );

    this.render( hbs`
        {{sl-menu
            selectRight=testAction
            streamName="testStreamName"
        }}
    ` );

    const streamService = this.container.lookup( 'service:stream' );
    streamService.send( 'testStreamName', 'selectRight' );

    assert.ok(
        this.get( 'testAction' ).calledOnce,
        'selectRight() was triggered successfully'
    );
});

test( 'Component responds to "selectSubMenu" stream action', function( assert ) {

    this.set( 'testAction', sinon.spy() );

    this.render( hbs`
        {{sl-menu
            selectSubMenu=testAction
            streamName="testStreamName"
        }}
    ` );

    const streamService = this.container.lookup( 'service:stream' );
    streamService.send( 'testStreamName', 'selectSubMenu' );

    assert.ok(
        this.get( 'testAction' ).calledOnce,
        'selectSubMenu() was triggered successfully'
    );
});

test( 'Component responds to "selectUp" stream action', function( assert ) {

    this.set( 'testAction', sinon.spy() );

    this.render( hbs`
        {{sl-menu
            selectUp=testAction
            streamName="testStreamName"
        }}
    ` );

    const streamService = this.container.lookup( 'service:stream' );
    streamService.send( 'testStreamName', 'selectUp' );

    assert.ok(
        this.get( 'testAction' ).calledOnce,
        'selectUp() was triggered successfully'
    );
});

test( 'Component responds to "showAll" stream action', function( assert ) {

    this.set( 'testAction', sinon.spy() );

    this.render( hbs`
        {{sl-menu
            showAll=testAction
            streamName="testStreamName"
        }}
    ` );

    const streamService = this.container.lookup( 'service:stream' );
    streamService.send( 'testStreamName', 'showAll' );

    assert.ok(
        this.get( 'testAction' ).calledOnce,
        'showAll() was triggered successfully'
    );
});
