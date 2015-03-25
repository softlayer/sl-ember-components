import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import startApp from '../../helpers/start-app';

var App;

moduleForComponent( 'sl-tab-pane', 'Unit - component: sl-tab-pane', {
    needs: [ 'component:sl-tab-panel' ],

    beforeEach: function() {
        App = startApp();
    },

    afterEach: function() {
        Ember.run( App, App.destroy );
    }
});

test( 'Expected default classes are applied', function( assert ) {
    var $component = this.render();

    assert.ok(
        $component.hasClass( 'sl-tab-pane' ),
        'Default rendered component has class "sl-tab-pane"'
    );

    assert.ok(
        $component.hasClass( 'tab-pane' ),
        'Default rendered component has class "tab-pane"'
    );
});

test( '"data-tab-label" attribute gets set as expected', function( assert ) {
    var label = 'Test Label',
        $component;

    this.subject({ label });
    $component = this.render();

    assert.strictEqual(
        $component.attr( 'data-tab-label' ),
        label,
        'Data tab label is set properly'
    );
});

test( '"data-tab-name" attribute gets set as expected', function( assert ) {
    var name = 'Test Name',
        $component;

    this.subject({ name });
    $component = this.render();

    assert.equal(
        $component.attr( 'data-tab-name' ),
        name,
        'Data tab name is set properly'
    );
});

test( 'Can provide content in block form', function( assert ) {
    var $component;

    this.subject({
        template: Ember.Handlebars.compile(
            '{{#sl-tab-panel}}' +
            '    {{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
            '    {{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}' +
            '{{/sl-tab-panel}}'
        )
    });

    $component = this.render();

    assert.equal(
        Ember.$.trim( $component.find( '.sl-tab-pane[data-tab-name="b"]' ).text() ),
        'B content',
        'Expected content is present'
    );
});

test( 'Can provide content via "templateName" property', function( assert ) {
    var templateContent = 'Template content',
        component = this.subject({
            templateName: 'tabtest'
        }),
        $component;

    window.component = component;

    App.__container__.register(
        'template:tabtest',
        Ember.Handlebars.compile( templateContent )
    );
    App.__container__.register( 'view:tabtest', Ember.View.extend() );
    component.set( 'container', App.__container__ );

    $component = this.render();

    assert.equal(
        Ember.$.trim( $component.text() ),
        templateContent,
        'Template content is populated as expected'
    );
});
