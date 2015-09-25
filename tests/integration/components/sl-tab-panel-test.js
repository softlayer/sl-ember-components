import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

const template = hbs `
    {{#sl-tab-panel}}
        {{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}
        {{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}
        {{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}
    {{/sl-tab-panel}}
`;

moduleForComponent( 'sl-tab-panel', 'Integration | Component | sl tab panel', {
    integration: true
});

test( 'Expected default classes are applied', function( assert ) {
    this.render( template );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-tab-panel' ),
        'Has class "sl-tab-panel"'
    );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-align-tabs-left' ),
        'Has class "sl-align-tabs-left"'
    );
});

test( 'setupTabs() does so correctly', function( assert ) {
    assert.expect( 5 );
    this.render( template );

    const wrapper = this.$( '>:first-child' );
    const tabPaneA = wrapper.find( '.sl-tab-pane[data-tab-name="a"]' );
    const done = assert.async();

    assert.equal(
        wrapper.find( '.tab[data-tab-name]' ).length,
        3,
        'Three tabs are rendered'
    );

    assert.equal(
        wrapper.find( '.sl-tab-pane[data-tab-name]' ).length,
        3,
        'Three tab panes are rendered'
    );

    assert.equal(
        wrapper.find( '.sl-tab-pane[data-tab-name="b"]' ).text().trim(),
        'B content',
        'Expected content is present in second tab pane'
    );

    // queue asserts after animation
    tabPaneA.queue( () => {
        assert.equal(
            wrapper.find( '.tab.active[data-tab-name="a"]' ).length,
            1,
            'Rendered component has tab "a" as its active tab'
        );

        assert.equal(
            wrapper.find( '.sl-tab-pane.active[data-tab-name="a"]' ).length,
            1,
            'Rendered component has panel for tab "a" as its active panel'
        );

        done();
    });
});

test( 'ARIA roles are implemented', function( assert ) {
    this.render( template );

    const wrapper = this.$( '>:first-child' );

    assert.equal(
        wrapper.find( '.nav-tabs[role="tablist"]' ).length,
        1,
        'Rendered component has "tablist" ARIA role'
    );

    assert.equal(
        wrapper.find( '.tab a[role="tab"]' ).length,
        3,
        'Rendered component has three <a> with "tab" ARIA role'
    );
});

test( '"initialTabName" property is respected', function( assert ) {
    this.render( hbs `
        {{#sl-tab-panel initialTabName='b'}}
            {{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}
            {{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}
            {{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}
        {{/sl-tab-panel}}
    ` );

    const wrapper = this.$( '>:first-child' );
    const tabPaneB = wrapper.find( '.sl-tab-pane[data-tab-name="b"]' );
    const done = assert.async();

    // queue asserts after animation
    tabPaneB.queue( () => {
        assert.equal(
            wrapper.find( '.tab.active[data-tab-name="b"]' ).length,
            1,
            'Initial tab is expected "b"'
        );

        assert.ok(
            tabPaneB.hasClass( 'active' ),
            'Initial tab pane is expected "b"'
        );

        done();
    });
});

test( 'Tabs display in expected order when "alignTabs" property is not specified', function( assert ) {
    const labels = [];

    this.render( template );

    const wrapper = this.$( '>:first-child' );

    wrapper.find( '.tab[data-tab-name]' ).each( function() {
        labels.push( Ember.$( this ).attr( 'data-tab-name' ) );
    });

    assert.deepEqual(
        labels,
        [ 'a', 'b', 'c' ]
    );
});

test( '"alignTabs" property is respected', function( assert ) {
    this.render( hbs `
        {{#sl-tab-panel alignTabs='right'}}
            {{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}
            {{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}
            {{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}
        {{/sl-tab-panel}}
    ` );

    const wrapper = this.$( '>:first-child' );

    assert.ok(
        wrapper.hasClass( 'sl-align-tabs-right' ),
        'Tab alignment class is applied'
    );
});

test( 'Clicking tab changes active tab', function( assert ) {
    this.render( template );

    const wrapper = this.$( '>:first-child' );
    const tabPaneB = wrapper.find( '.sl-tab-pane[data-tab-name="b"]' );
    const tabPaneA = wrapper.find( '.sl-tab-pane[data-tab-name="a"]' );

    assert.expect( 2 );
    const done = assert.async();

    wrapper.find( '.tab[data-tab-name="b"] a' ).trigger( 'click' );

    // queue asserts after animation
    tabPaneA.queue( () => {
        tabPaneB.queue( () => {
            assert.equal(
                wrapper.find( '.tab.active[data-tab-name="b"]' ).length,
                1
            );

            assert.equal(
                wrapper.find( '.sl-tab-pane.active[data-tab-name="b"]' ).length,
                1
            );
            done();
        });
    });
});

test( 'Tab content height is adjusted after new tab selection', function( assert ) {
    assert.expect( 1 );
    const done = assert.async();

    this.render( `hbs
        {{#sl-tab-panel}}
            {{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}
            {{#sl-tab-pane label="B" name="b"}}
                B content<br><br>Taller content
            {{/sl-tab-pane}}
            {{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}
        {{/sl-tab-panel}}
    ` );

    const wrapper = this.$( '>:first-child' );
    const tabPaneA = wrapper.find( '.sl-tab-pane[data-tab-name="a"]' );
    const tabPaneB = wrapper.find( '.sl-tab-pane[data-tab-name="b"]' );

    wrapper.find( '.tab[data-tab-name="b"] a' ).trigger( 'click' );

    // queue assert after animation
    tabPaneA.queue( () => {
        const initialHeight = wrapper.find( '.tab-content' ).height();

        tabPaneB.queue( () => {
            assert.ok(
                wrapper.find( '.tab-content' ).height() > initialHeight
            );

            done();
        });
    });
});
test( '"activatePane" animates as expected', function( assert ) {
    const component = this.subject({
        template: Ember.Handlebars.compile( `
            {{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}
            {{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}
        ` )
    });

    const spy = sinon.spy( Ember.$.prototype, 'fadeIn' );
    const done = assert.async();

    this.render();

    assert.expect( 1 );

    // queue assert after animation
    component.paneFor( 'a' ).queue( () => {
        assert.equal(
            spy.calledOnce,
            true
        );
        done();
    });
});

test( '"deactivatePane" animates as expected', function( assert ) {
    this.render( template );

    const spy = sinon.spy( Ember.$.prototype, 'fadeOut' );
    const done = assert.async();
    const wrapper = this.$( '>:first-child' );
    const tabPaneA = wrapper.find( '.sl-tab-pane[data-tab-name="a"]' );
    const tabPaneB = wrapper.find( '.sl-tab-pane[data-tab-name="b"]' );

    assert.expect( 1 );

    this.$( '.tab[data-tab-name="b"] a' ).trigger( 'click' );

    // queue assert after animation
    tabPaneA.queue( () => {
        tabPaneB.queue( () => {
            assert.equal(
                spy.calledOnce,
                true
            );
            done();
        });
    });

});
