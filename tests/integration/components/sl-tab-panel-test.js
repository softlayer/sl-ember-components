import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

const template = hbs`
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

    const wrapper = this.$( '>:first-child' );

    assert.ok(
        wrapper.hasClass( 'sl-tab-panel' ),
        'Has class "sl-tab-panel"'
    );

    assert.ok(
        wrapper.hasClass( 'sl-align-tabs-left' ),
        'Has class "sl-align-tabs-left"'
    );
});

test( 'setupTabs() does so correctly', function( assert ) {
    assert.expect( 5 );

    this.render( template );

    const wrapper = this.$( '>:first-child' );
    const tabPaneA = wrapper.find( '.sl-tab-pane[data-tab-name="a"]' );
    const done = assert.async();

    assert.strictEqual(
        wrapper.find( '.tab[data-tab-name]' ).length,
        3,
        'Three tabs are rendered'
    );

    assert.strictEqual(
        wrapper.find( '.sl-tab-pane[data-tab-name]' ).length,
        3,
        'Three tab panes are rendered'
    );

    assert.strictEqual(
        wrapper.find( '.sl-tab-pane[data-tab-name="b"]' ).text().trim(),
        'B content',
        'Expected content is present in second tab pane'
    );

    // queue asserts after animation
    tabPaneA.queue( () => {
        assert.strictEqual(
            wrapper.find( '.tab.active[data-tab-name="a"]' ).length,
            1,
            'Rendered component has tab "a" as its active tab'
        );

        assert.strictEqual(
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

    assert.strictEqual(
        wrapper.find( '.nav-tabs[role="tablist"]' ).length,
        1,
        'Rendered component has "tablist" ARIA role'
    );

    assert.strictEqual(
        wrapper.find( '.tab a[role="tab"]' ).length,
        3,
        'Rendered component has three <a> with "tab" ARIA role'
    );
});

test( '"initialTabName" property is respected', function( assert ) {
    assert.expect( 2 );

    this.render( hbs`
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
        assert.strictEqual(
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
    this.render( template );

    const labels = [];
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
    this.render( hbs`
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
    assert.expect( 2 );

    this.render( template );

    const wrapper = this.$( '>:first-child' );
    const tabPaneB = wrapper.find( '.sl-tab-pane[data-tab-name="b"]' );
    const tabPaneA = wrapper.find( '.sl-tab-pane[data-tab-name="a"]' );

    const done = assert.async();

    wrapper.find( '.tab[data-tab-name="b"] a' ).trigger( 'click' );

    // queue asserts after animation
    tabPaneA.queue( () => {
        tabPaneB.queue( () => {
            assert.strictEqual(
                wrapper.find( '.tab.active[data-tab-name="b"]' ).length,
                1
            );

            assert.strictEqual(
                wrapper.find( '.sl-tab-pane.active[data-tab-name="b"]' ).length,
                1
            );

            done();
        });
    });
});

test( 'Tab content height is adjusted after new tab selection', function( assert ) {
    assert.expect( 1 );

    this.render( hbs`
        {{#sl-tab-panel}}
            {{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}
            {{#sl-tab-pane label="B" name="b"}}
                B content<br><br>Taller content
            {{/sl-tab-pane}}
            {{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}
        {{/sl-tab-panel}}
    ` );

    const done = assert.async();
    const wrapper = this.$( '>:first-child' );
    const tabPaneB = wrapper.find( '.sl-tab-pane[data-tab-name="b"]' );

    const initialHeight = wrapper.find( '.tab-content' ).height();

    wrapper.find( '.tab[data-tab-name="b"] a' ).trigger( 'click' );

    tabPaneB.queue( () => {
        assert.ok(
            wrapper.find( '.tab-content' ).height() > initialHeight
        );

        done();
    });
});

test( '"activatePane" animates as expected', function( assert ) {
    assert.expect( 1 );

    this.render( template );

    const spy = sinon.spy( Ember.$.prototype, 'fadeIn' );
    const done = assert.async();
    const wrapper = this.$( '>:first-child' );
    const tabPaneA = wrapper.find( '.sl-tab-pane[data-tab-name="a"]' );

    wrapper.find( '.tab[data-tab-name="b"] a' ).trigger( 'click' );

    // queue assert after animation
    tabPaneA.queue( () => {
        assert.strictEqual(
            spy.calledOnce,
            true
        );

        done();
        Ember.$.prototype.fadeIn.restore();
    });
});

test( '"deactivatePane" animates as expected', function( assert ) {
    assert.expect( 1 );

    this.render( template );

    const spy = sinon.spy( Ember.$.prototype, 'fadeOut' );
    const done = assert.async();
    const wrapper = this.$( '>:first-child' );
    const tabPaneA = wrapper.find( '.sl-tab-pane[data-tab-name="a"]' );
    const tabPaneB = wrapper.find( '.sl-tab-pane[data-tab-name="b"]' );

    wrapper.find( '.tab[data-tab-name="b"] a' ).trigger( 'click' );

    // queue assert after animation
    tabPaneA.queue( () => {
        tabPaneB.queue( () => {
            assert.strictEqual(
                spy.calledOnce,
                true
            );

            done();
            Ember.$.prototype.fadeOut.restore();
        });
    });

});
