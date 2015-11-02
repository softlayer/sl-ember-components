import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const menuItems = {
    label: 'Main One',
    items: [
        {
            label: 'Sub 1',
            action: 'testActionName1',
            data: '"testData1"'
        },
        {
            label: 'Sub 2',
            items: [
                {
                    label: 'Sub 2 - 1',
                    action: 'testActionName2',
                    data: '"testData2"'
                },
                { label: 'Sub 2 - 2' }
            ]
        }
    ]
};

const menuItem = {
    label: 'Main One',
    action: 'testActionName',
    data: '"testData"'
};

moduleForComponent( 'sl-menu-item', 'Integration | Component | sl menu item', {
    integration: true
});

test( 'Default rendered state', function( assert ) {

    this.render( hbs`
        {{sl-menu-item}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-menu-item' ),
        'Has class "sl-menu-item"'
    );
});

test( 'Mouse enter/leave events toggles setting of "active" class', function( assert ) {

    this.set( 'menuItems', menuItems );

    this.render( hbs`
        {{sl-menu-item
            item=menuItems
        }}
    ` );

    assert.notOk(
        this.$( '>:first-child' ).hasClass( 'active' ),
        'Rendered element does not have class "active" by default'
    );

    this.$( '>:first-child' ).find( '.has-sub-menu' ).find( 'a' ).first().trigger( 'mouseenter' );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'active' ),
        'Rendered element has class "active" by default'
    );

    this.$( '>:first-child' ).find( '.has-sub-menu' ).find( 'a' ).first().trigger( 'mouseleave' );

    assert.notOk(
        this.$( '>:first-child' ).hasClass( 'active' ),
        'Rendered element does not have class "active" by default'
    );
});

test( '"has-sub-menu" and "sub-menu" classes are set when menu has sub menus', function( assert ) {

    this.set( 'menuItem', menuItem );

    this.render( hbs`
        {{sl-menu-item
            item=menuItem
        }}
    ` );

    assert.notOk(
        this.$( '>:first-child' ).hasClass( 'has-sub-menu' ),
        'Rendered element does not have class "has-sub-menu"'
    );

    this.set( 'menuItem', menuItems );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'has-sub-menu' ),
        'Rendered element has class "has-sub-menu"'
    );

    assert.ok(
        this.$( '>:first-child' ).find( 'li' ).find( 'ul' ).hasClass( 'sub-menu' ),
        'Rendered element has class "sub-menu"'
    );
});

test( 'clickLink() action is fired from top level menu item', function( assert ) {
    assert.expect( 1 );

    this.set( 'menuItem', menuItem );

    this.render( hbs`
        {{sl-menu-item
            item=menuItem
            action="testAction"
        }}
    ` );

    this.on( 'testAction', () => {
        assert.ok(
            true,
            'The test action was called'
        );
    });

    this.$( '>:first-child' ).find( 'a' ).first().click();
});

test( 'handleAction() action is fired from sub menu (Sub 1) item', function( assert ) {
    assert.expect( 3 );

    this.set( 'menuItems', menuItems );

    this.render( hbs`
        {{sl-menu-item
            item=menuItems
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
            'testActionName1',
            'ActionName is passed'
        );

        assert.strictEqual(
            data,
            '"testData1"',
            'Data is passed'
        );
    });

    // Sub 1
    this.$( '>:first-child' ).find( '.sub-menu' ).first().find( 'li' ).first().find( 'a' ).first().click();
});

test( 'handleAction() action is fired from sub sub menu (Sub 2-1) item', function( assert ) {
    assert.expect( 3 );

    this.set( 'menuItems', menuItems );

    this.render( hbs`
        {{sl-menu-item
            item=menuItems
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
            'testActionName2',
            'ActionName is passed'
        );

        assert.strictEqual(
            data,
            '"testData2"',
            'Data is passed'
        );
    });

    // Sub 2-1
    this.$( '>:first-child' ).find( '.sub-menu' ).last().find( 'li' ).first().find( 'a' ).first().click();
});
