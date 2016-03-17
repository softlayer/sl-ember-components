import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

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

test( 'Default rendered state', function( assert ) {
    this.render( template );

    const wrapper = this.$( '>:first-child' );

    assert.ok(
        wrapper.hasClass( 'sl-ember-components-tab-panel' ),
        'Has class "sl-ember-components-tab-panel"'
    );

    assert.ok(
        wrapper.hasClass( 'sl-align-tabs-left' ),
        'Has class "sl-align-tabs-left"'
    );

    assert.strictEqual(
        wrapper.find( '.nav-tabs[role="tablist"]' ).length,
        1,
        'Rendered component has "tablist" ARIA role'
    );

    assert.ok(
        wrapper.find( ' > ul > li:first-of-type' ).hasClass( 'active' ),
        'First tab has class "active"'
    );

    assert.ok(
        wrapper.find( '.tab-pane[data-tab-name="a"]' ).hasClass( 'active' ),
        'First tab pane has class "active"'
    );

    assert.strictEqual(
        wrapper.find( '> ul > li a[role="tab"]' ).length,
        3,
        'Rendered component has three <a> with "tab" ARIA role'
    );

    const labels = [];

    wrapper.find( '> ul > li[data-tab-name]' ).each( function() {
        labels.push( Ember.$( this ).attr( 'data-tab-name' ) );
    });

    assert.deepEqual(
        labels,
        [ 'a', 'b', 'c' ],
        'Tabs display in expected order'
    );
});

test( 'setupTabs() sets up tabs correctly', function( assert ) {
    assert.expect( 10 );

    this.render( template );

    const wrapper = this.$( '>:first-child' );
    const tabPaneA = wrapper.find( '.tab-pane[data-tab-name="a"]' );
    const done = assert.async();

    assert.strictEqual(
        wrapper.find( '> ul > li[data-tab-name]' ).length,
        3,
        'Three tabs are rendered'
    );

    assert.strictEqual(
        wrapper.find( '.tab-pane[data-tab-name]' ).length,
        3,
        'Three tab panes are rendered'
    );

    assert.strictEqual(
        wrapper.find( '.tab-pane[data-tab-name="a"]' ).text().trim(),
        'A content',
        '"data-tab-name" is set in the first tab pane'
    );

    assert.strictEqual(
        wrapper.find( '.tab-pane[data-tab-name="b"]' ).text().trim(),
        'B content',
        '"data-tab-name" is set in the second tab pane'
    );

    assert.strictEqual(
        wrapper.find( '.tab-pane[data-tab-name="c"]' ).text().trim(),
        'C content',
        '"data-tab-name" is set in the third tab pane'
    );

    assert.strictEqual(
        wrapper.find( '.tab-pane[data-tab-label="A"]' ).text().trim(),
        'A content',
        '"data-tab-label" is set in the first tab pane'
    );

    assert.strictEqual(
        wrapper.find( '.tab-pane[data-tab-label="B"]' ).text().trim(),
        'B content',
        '"data-tab-label" is set in the second tab pane'
    );

    assert.strictEqual(
        wrapper.find( '.tab-pane[data-tab-label="C"]' ).text().trim(),
        'C content',
        '"data-tab-label" is set in the third tab pane'
    );

    // queue asserts after animation
    tabPaneA.queue( () => {
        assert.strictEqual(
            wrapper.find( '> ul > li.active[data-tab-name="a"]' ).length,
            1,
            'Rendered component has tab "a" as its active tab'
        );

        assert.strictEqual(
            wrapper.find( '.tab-pane.active[data-tab-name="a"]' ).length,
            1,
            'Rendered component has panel for tab "a" as its active panel'
        );

        done();
    });
});

test( 'initialTabName property is respected', function( assert ) {
    assert.expect( 2 );

    this.render( hbs`
        {{#sl-tab-panel initialTabName="b"}}
            {{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}
            {{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}
            {{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}
        {{/sl-tab-panel}}
    ` );

    const wrapper = this.$( '>:first-child' );
    const tabPaneB = wrapper.find( '.tab-pane[data-tab-name="b"]' );
    const done = assert.async();

    // queue asserts after animation
    tabPaneB.queue( () => {
        assert.strictEqual(
            wrapper.find( '> ul > li.active[data-tab-name="b"]' ).length,
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

test( 'alignTabs property is respected', function( assert ) {
    this.render( hbs`
        {{#sl-tab-panel alignTabs="right"}}
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
    assert.expect( 4 );

    this.render( template );

    const wrapper = this.$( '>:first-child' );
    const tabPaneB = wrapper.find( '.tab-pane[data-tab-name="b"]' );
    const tabPaneA = wrapper.find( '.tab-pane[data-tab-name="a"]' );

    const done = assert.async();

    wrapper.find( '> ul > li[data-tab-name="b"] a' ).trigger( 'click' );

    // queue asserts after animation
    tabPaneA.queue( () => {
        tabPaneB.queue( () => {
            const activeTab = wrapper.find( '> ul > li.active' );
            const activePane = wrapper.find( '.tab-pane.active' );

            assert.strictEqual(
                activeTab.attr( 'data-tab-name' ),
                'b',
                'Active tab is "b"'
            );

            assert.strictEqual(
                activePane.attr( 'data-tab-name' ),
                'b',
                'Active pane is "b"'
            );

            assert.strictEqual(
                activeTab.length,
                1,
                "There's only one active tab'"
            );

            assert.strictEqual(
                activePane.length,
                1,
                "There's only one active pane"
            );

            done();
        });
    });
});
