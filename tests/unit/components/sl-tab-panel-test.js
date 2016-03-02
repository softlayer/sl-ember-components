import { moduleForComponent, test } from 'ember-qunit';
import { Alignment as AlignmentEnum } from 'sl-ember-components/components/sl-tab-panel';
import * as warn from 'sl-ember-components/utils/warn';
import ClassPrefix from 'sl-ember-components/mixins/class-prefix';
import sinon from 'sinon';
import hbs from 'htmlbars-inline-precompile';
import globalLibraries from '../../helpers/sl/synchronous/global-libraries';

const template = hbs`
    {{#sl-tab-pane label="One" name="one"}}
        One
    {{/sl-tab-pane}}

    {{#sl-tab-pane label="Two" name="two"}}
        Two
    {{/sl-tab-pane}}

    {{#sl-tab-pane label="Three" name="three"}}
        Three
    {{/sl-tab-pane}}
`;

moduleForComponent( 'sl-tab-panel', 'Unit | Component | sl tab panel', {
    unit: true,
    needs: [ 'component:sl-tab-pane' ]
});

test( 'Alignment enum values are correct', function( assert ) {
    const Alignment = {
        LEFT: 'left',
        RIGHT: 'right'
    };

    assert.deepEqual(
        AlignmentEnum,
        Alignment
    );
});

test( 'Expected Mixins are present', function( assert ) {
    assert.ok(
        ClassPrefix.detect( this.subject() ),
        'ClassPrefix Mixin is present'
    );
});

test( 'Default values are set correctly', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'alignTabs' ),
        AlignmentEnum.LEFT,
        'alignmentTabs is left by default'
    );

    assert.strictEqual(
        component.get( 'componentClass' ),
        'tab-panel',
        'componentClass is set to tab-panel'
    );

    assert.strictEqual(
        component.get( 'initialTabName' ),
        null,
        'initialTabName is null by default'
    );
});

test( 'Dependent keys are correct', function( assert ) {
    const component = this.subject();
    const tabAlignmentDependentKeys = [
        'alignTabs'
    ];

    assert.deepEqual(
        component.tabAlignmentClass._dependentKeys,
        tabAlignmentDependentKeys
    );
});

test( 'setupTabs() sets "tabs" property with correct data', function( assert ) {
    const tabs = [
        { label: 'One', name: 'one', active: true },
        { label: 'Two', name: 'two', active: false },
        { label: 'Three', name: 'three', active: false }
    ];

    this.registry
        .register( 'template:test-template', template );

    const component = this.subject({
        templateName: 'test-template'
    });

    this.render();

    const componentTabs = component.get( 'tabs' );

    assert.deepEqual(
        tabs.map( ( i ) => i.label ),
        componentTabs.map( ( i ) => i.label ),
        '"tabs" property has proper labels'
    );

    assert.deepEqual(
        tabs.map( ( i ) => i.name ),
        componentTabs.map( ( i ) => i.name ),
        '"tabs" property has proper names'
    );

    assert.deepEqual(
        tabs.map( ( i ) => i.active ),
        componentTabs.map( ( i ) => i.active ),
        '"tabs" property has proper active states'
    );

    this.registry.unregister( 'template:test-template' );
});

test( 'setActiveTab() does so correctly', function( assert ) {
    this.registry
        .register( 'template:test-template', template );

    const component = this.subject({
        templateName: 'test-template'
    });

    this.render();

    const tabOne = this.$( '> .nav-tabs > li[data-tab-name="one"]' );
    const tabTwo = this.$( '> .nav-tabs > li[data-tab-name="two"]' );

    assert.notOk(
        tabTwo.hasClass( 'active' ),
        'Second tab did not have active class'
    );

    component.setActiveTab( 'two' );

    assert.ok(
        tabTwo.hasClass( 'active' ),
        'Second tab now has active class'
    );

    assert.notOk(
        tabOne.hasClass( 'active' ),
        'First tab does not have active class'
    );

    this.registry.unregister( 'template:test-template' );
});

test( 'tabAlignmentClass() returns the correct value', function( assert ) {
    const component = this.subject();

    component.set( 'alignTabs', 'left' );

    assert.strictEqual(
        component.get( 'tabAlignmentClass' ),
        'sl-align-tabs-left',
        'Correct string returned for value of left'
    );

    component.set( 'alignTabs', 'right' );

    assert.strictEqual(
        component.get( 'tabAlignmentClass' ),
        'sl-align-tabs-right',
        'Correct string returned for value of right'
    );

    const spy = sinon.spy( warn, 'default' );

    component.set( 'alignTabs', 'Invalid value' );
    component.get( 'tabAlignmentClass' );

    assert.ok(
        spy.calledOnce,
        'warn() was called when invalid alignment class was provided'
    );

    warn.default.restore();
});

test( 'getActiveTabName returns the correct value after setActiveTab() is called', function( assert ) {
    this.registry
        .register( 'template:test-template', template );

    const component = this.subject({
        templateName: 'test-template'
    });

    this.render();

    component.setActiveTab( 'two' );

    assert.equal(
        component.getActiveTabName(),
        'two'
    );

    this.registry.unregister( 'template:test-template' );
});

test( 'There are no references to Ember.$, $ or jQuery', function( assert ) {
    globalLibraries.setupSpies();

    const component = this.subject();

    this.render();

    globalLibraries.triggerEvents( component );

    assert.notOk(
        globalLibraries.called(),
        'Global libraries are not referenced in component'
    );

    globalLibraries.restoreSpies();
});
