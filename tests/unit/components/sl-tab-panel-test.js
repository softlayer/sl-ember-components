import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import { Alignment as AlignmentEnum } from 'sl-ember-components/components/sl-tab-panel';
import * as utils from 'sl-ember-components/utils/all';
import sinon from 'sinon';

const template = `
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

test( 'Default values are set correctly', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'activeTabName' ),
        null,
        'activeTabName is null'
    );

    assert.strictEqual(
        component.get( 'alignTabs' ),
        AlignmentEnum.LEFT,
        'alignmentTabs is left by default'
    );

    assert.strictEqual(
        component.get( 'contentHeight' ),
        0,
        'contentHeight is 0 by default'
    );

    assert.strictEqual(
        component.get( 'initialTabName' ),
        null,
        'initialTabName is null by default'
    );
});

test( 'Dependent keys are correct', function( assert ) {
    const component = this.subject();

    assert.deepEqual(
        component.tabAlignmentClass._dependentKeys,
        [ 'alignTabs' ]
    );
});

test( 'setupTabs() sets "tabs" property with correct data', function( assert ) {
    const tabs = [
        { label: 'One', name: 'one', active: true },
        { label: 'Two', name: 'two', active: false },
        { label: 'Three', name: 'three', active: false }
    ];

    this.registry.register( 'template:test-template', Ember.HTMLBars.compile( template ) );

    const component = this.subject({
        templateName: 'test-template'
    });

    this.render();

    assert.deepEqual(
        tabs,
        component.get( 'tabs' ),
       '"tabs" property is set with the correct data'
    );

    this.registry.unregister( 'template:test-template' );
});

test( 'getTabs() returns correct data', function( assert ) {
    const tabs = [
        { label: 'One', name: 'one', active: true },
        { label: 'Two', name: 'two', active: false },
        { label: 'Three', name: 'three', active: false }
    ];

    const tabsTwo = [
        { label: 'One', name: 'one', active: false },
        { label: 'Two', name: 'two', active: true },
        { label: 'Three', name: 'three', active: false }
    ];

    this.registry
        .register( 'template:test-template',
            Ember.HTMLBars.compile( template )
        );

    const component = this.subject({
        templateName: 'test-template'
    });

    this.render();

    assert.deepEqual(
        component.getTabs( 'one' ),
        tabs,
        'Correct data returned when initialTabName "one" passed in as a parameter'
    );

    assert.deepEqual(
        component.getTabs( 'two' ),
        tabsTwo,
        'Correct data returned when initialTabName "two" passed in as a parameter'
    );

    this.registry.unregister( 'template:test-template' );

});

test( 'setActiveTab() does so correctly', function( assert ) {
    this.registry.register( 'template:test-template', Ember.HTMLBars.compile( template ) );

    const component = this.subject({
        templateName: 'test-template'
    });

    this.render();

    const tabOne = this.$( '.tab[data-tab-name="one"]' );
    const tabTwo = this.$( '.tab[data-tab-name="two"]' );

    assert.ok(
        !tabTwo.hasClass( 'active' ),
        'Second tab did not have active class'
    );

    component.setActiveTab( 'two' );

    assert.ok(
        tabTwo.hasClass( 'active' ),
        'Second tab now has active class'
    );

    assert.ok(
        !tabOne.hasClass( 'active' ),
        'First tab does not have active class'
    );

    this.registry.unregister( 'template:test-template' );
});

test( 'getInitialTabName() returns the correct tab name', function( assert ) {
    this.registry
        .register( 'template:test-template',
            Ember.HTMLBars.compile( template )
        );

    const component = this.subject({
        templateName: 'test-template'
    });

    this.render();

    assert.strictEqual(
        component.getInitialTabName(),
        'one',
        'First tab is initial tab by default'
    );

    component.set( 'initialTabName', 'two' );

    assert.strictEqual(
        component.getInitialTabName(),
        'two',
        'If initialTabName is set, it is returned'
    );
});

test( 'updateContentHeight() updates tab content height when contentHeight changes', function( assert ) {
    const component = this.subject();

    const initialHeight = this.$( '.tab-content' ).height();
    const newHeight = initialHeight + 300;

    component.set( 'contentHeight', newHeight );

    assert.strictEqual(
        this.$( '.tab-content' ).height(),
        newHeight
    );
});

test( 'activatePane() activates pane as expected', function( assert ) {
    assert.expect( 2 );

    this.registry.register( 'template:test-template', Ember.HTMLBars.compile( template ) );

    const component = this.subject({
        templateName: 'test-template'
    });

    const done = assert.async();
    const tabPaneA = this.$( '.sl-tab-pane[data-tab-name="one"]' );

    component.activatePane( 'one' );

    // queue assert after animation
    tabPaneA.queue( () => {
        assert.ok(
            tabPaneA.is( ':visible' ),
            'Tab panel is visible after animation'
        );

        assert.ok(
            tabPaneA.hasClass( 'active' ),
            'Tab panel has active class'
        );

        done();
    });
});

test( 'deactivatePane() deactivates pane as expected', function( assert ) {
    assert.expect( 3 );

    this.registry.register( 'template:test-template', Ember.HTMLBars.compile( template ) );

    const component = this.subject({
        templateName: 'test-template'
    });

    const done = assert.async();
    const tabPaneA = this.$( '.sl-tab-pane[data-tab-name="one"]' );

    component.deactivatePane( () => {
        assert.ok(
            'Callback passed to deactivatePane was called'
        );

        assert.ok(
            tabPaneA.is( ':hidden' ),
            'Active panel was hidden'
        );

        assert.ok(
            !tabPaneA.hasClass( 'active' ),
            'Active panel no longer has active class'
        );

        done();
    });
});

test( 'paneFor() returns the correct DOM element', function( assert ) {
    this.registry.register( 'template:test-template', Ember.HTMLBars.compile( template ) );

    const component = this.subject({
        templateName: 'test-template'
    });

    this.render();

    const tab = 'two';
    const pane = component.paneFor( tab );

    assert.ok(
        pane.is( $( `.tab-pane[data-tab-name="${ tab }"]` ) )
    );

    this.registry.unregister( 'template:test-template' );
});

test( 'tabFor() returns the correct DOM element', function( assert ) {
    this.registry.register( 'template:test-template', Ember.HTMLBars.compile( template ) );

    const component = this.subject({
        templateName: 'test-template'
    });

    this.render();

    const tab = 'two';
    const pane = component.tabFor( tab );

    assert.ok(
        pane.is( $( `.tab[data-tab-name="${ tab }"]` ) )
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

    const spy = sinon.spy( utils, 'warn' );

    component.set( 'alignTabs', 'Invalid value' );
    component.get( 'tabAlignmentClass' );

    assert.ok(
        spy.calledOnce,
        'warn() was called when invalid alignment class was provided'
    );

    utils.warn.restore();
});

test( 'contentHeight is set to an integer value when activatePane() is called', function( assert ) {
    this.registry.register( 'template:test-template', Ember.HTMLBars.compile( template ) );

    const component = this.subject({
        templateName: 'test-template'
    });

    this.render();

    component.activatePane( 'b' );

    assert.equal(
        Ember.typeOf( component.get( 'contentHeight' ) ),
        'number'
    );
});

test( 'activeTabName is set to correct value when activatePane() is called', function( assert ) {
    this.registry.register( 'template:test-template', Ember.HTMLBars.compile( template ) );

    const component = this.subject({
        templateName: 'test-template'
    });

    this.render();

    component.activatePane( 'b' );

    assert.equal(
        component.get( 'activeTabName' ),
        'b'
    );
});
