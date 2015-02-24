import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import startApp from '../../helpers/start-app';
import { contains } from '../../helpers/sl/synchronous';

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

    assert.ok( contains( $component.prop( 'class' ), [ 'sl-tab-pane', 'tab-pane' ] ), 'Default classes are not correctly applied' );
});

test( '"data-tab-label" attribute gets set as expected', function( assert ) {
    var component  = this.subject({
            label : 'Test Label'
        });

    this.render();

    assert.equal( $('.sl-tab-pane[data-tab-label="Test Label"]').length, 1 );
});

test( '"data-tab-name" attribute gets set as expected', function( assert ) {
    var component  = this.subject({
            name : 'Test Name'
        });

    this.render();

    assert.equal( $('.sl-tab-pane[data-tab-name="Test Name"]').length, 1 );
});

test( 'Can provide content in block form', function( assert ) {
    var component  = this.subject({
            template : Ember.Handlebars.compile(
                '{{#sl-tab-panel}}' +
                '    {{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '    {{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}' +
                '{{/sl-tab-panel}}'
            )
        });

    this.render();

    equal( $.trim( $('.sl-tab-pane[data-tab-name="b"]').text() ), 'B content' );
});

test( 'Can provide content via "templateName" property', function( assert ) {
    var component  = this.subject({
            template : Ember.Handlebars.compile(
                '{{#sl-tab-panel}}' +
                '    {{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '    {{sl-tab-pane label="B" name="b" templateName="tabtest"}}' +
                '{{/sl-tab-panel}}'
            )
        });

    App.__container__.register( 'template:tabtest', Ember.Handlebars.compile( 'B template content' ) );
    App.__container__.register( 'view:tabtest', Ember.View.extend() );
    component.container = App.__container__;

    this.render();

    assert.equal( $.trim( $('.sl-tab-pane[data-tab-name="b"]').text() ), 'B template content' );
});
