import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import startApp from '../../helpers/start-app';

var App;

moduleForComponent( 'sl-tab-pane', 'Unit | Component | sl-tab-pane', {
    needs: [ 'component:sl-tab-panel' ],

    beforeEach() {
        App = startApp();
    },

    afterEach() {
        Ember.run( App, App.destroy );
    },

    unit: true
});

test( 'Expected default classes are applied', function( assert ) {
    assert.ok(
        this.$().hasClass( 'sl-tab-pane' ),
        'Default rendered component has class "sl-tab-pane"'
    );

    assert.ok(
        this.$().hasClass( 'tab-pane' ),
        'Default rendered component has class "tab-pane"'
    );
});

test( '"data-tab-label" attribute gets set as expected', function( assert ) {
    var label = 'Test Label';

    this.subject({ label });

    assert.strictEqual(
        this.$().attr( 'data-tab-label' ),
        label,
        'Data tab label is set properly'
    );
});

test( '"data-tab-name" attribute gets set as expected', function( assert ) {
    var name = 'Test Name';

    this.subject({ name });

    assert.equal(
        this.$().attr( 'data-tab-name' ),
        name,
        'Data tab name is set properly'
    );
});

test( 'Can provide content in block form', function( assert ) {
    this.subject({
        layout: Ember.HTMLBars.compile(
            '{{#sl-tab-panel}}' +
            '    {{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
            '    {{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}' +
            '{{/sl-tab-panel}}'
        )
    });

    assert.equal(
        Ember.$.trim( this.$( '.sl-tab-pane[data-tab-name="b"]' ).text() ),
        'B content',
        'Expected content is present'
    );
});

test( 'Can provide content via "templateName" property', function( assert ) {
    var templateContent = 'Template content',
        component       = this.subject({
            container    : App.__container__,
            templateName : 'tabtest'
        });

    App.registry.register(
        'template:tabtest', Ember.HTMLBars.compile( templateContent )
    );

    assert.equal(
        Ember.$.trim( this.$().text() ),
        templateContent,
        'Template content is populated as expected'
    );
});
