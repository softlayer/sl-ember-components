import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-drop-button', 'Unit | Component | sl drop button', {
    needs: [
        'component:sl-button'
    ],

    unit: true
});

test( 'Default classes are present', function( assert ) {
    assert.ok(
        this.$().hasClass( 'btn-group' ),
        'Has class "btn-group"'
    );

    assert.ok(
        this.$().hasClass( 'dropdown' ),
        'Has class "dropdown"'
    );

    assert.ok(
        this.$().hasClass( 'sl-drop-button' ),
        'Has class "sl-drop-button"'
    );
});

test( 'Theme property applies theme class', function( assert ) {
    const component = this.subject();

    assert.ok(
        this.$().hasClass( 'dropdown-default' ),
        'Default rendered drop-button has class "dropdown-default"'
    );

    Ember.run( () => {
        component.set( 'theme', 'danger' );
    });

    assert.ok(
        this.$().hasClass( 'dropdown-danger' ),
        'Rendered drop-button has new theme class'
    );
});

test( 'Click action triggers bound action', function( assert ) {
    const component = this.subject({
        action: 'test',
        targetObject: {
            test() {
                assert.ok(
                    true,
                    'Action was fired'
                );
            }
        }
    });

    assert.expect( 1 );

    component.send( 'click' );
});

test( 'Alignment property is supported', function( assert ) {
    const component = this.subject();

    assert.equal(
        component.get( 'align' ),
        'left',
        'Default component is left-aligned'
    );

    assert.strictEqual(
        component.get( 'rightAligned' ),
        false,
        'Default component does not have rightAligned set to true'
    );

    Ember.run( () => {
        component.set( 'align', 'right' );
    });

    assert.equal(
        component.get( 'align' ),
        'right',
        'Component is correctly set to "right" aligned'
    );

    assert.ok(
        component.get( 'rightAligned' ),
        'Component is correctly rightAligned'
    );
});

test( 'Icon class property is supported', function( assert ) {
    const component = this.subject({ label: 'Test' });

    assert.equal(
        component.get( 'iconClass' ),
        'caret',
        'Default component has iconClass "caret"'
    );

    assert.equal(
        this.$( 'span.caret' ).length,
        1,
        'Default rendered component includes caret icon span'
    );

    Ember.run( () => {
        component.set( 'iconClass', 'test' );
    });

    assert.equal(
        this.$( 'span.test' ).length,
        1,
        'Rendered component includes test icon span'
    );
});
