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

test( 'setupTabs() sets up tabs correctly', function( assert ) {
    assert.expect( 5 );

    this.render( hbs`
        {{#sl-tab-panel tabs=tabs}}
            {{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}
            {{#sl-tab-pane label="B" name="b"}}B content {{/sl-tab-pane}}
            {{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}
        {{/sl-tab-panel}}
    ` );

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

test( 'Tabs display in expected order when alignTabs property is not specified', function( assert ) {
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

test( 'alignTabs property is respected', function( assert ) {
    this.render( hbs`
        {{#sl-tab-panel alignTabs="right"}}
            {{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}
            {{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}
            {{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}
        {{/sl-tab-panel}}
    ` );

    const wrapper = this.$( '>:first-child' );
    const tabAOffset = wrapper.find( '.tab[data-tab-name="a"]' ).offset().left;
    const tabBOffset = wrapper.find( '.tab[data-tab-name="b"]' ).offset().left;
    const tabCOffset = wrapper.find( '.tab[data-tab-name="c"]' ).offset().left;

    assert.ok(
        wrapper.hasClass( 'sl-align-tabs-right' ),
        'Tab alignment class is applied'
    );

    assert.ok(
        tabAOffset > tabBOffset,
        'Tab A is positioned to the right of tab B'
    );

    assert.ok(
        tabBOffset > tabCOffset,
        'Tab B is positioned to the right of tab C'
    );
});

test( 'Clicking tab changes active tab', function( assert ) {
    assert.expect( 4 );

    this.render( template );

    const wrapper = this.$( '>:first-child' );
    const tabPaneB = wrapper.find( '.sl-tab-pane[data-tab-name="b"]' );
    const tabPaneA = wrapper.find( '.sl-tab-pane[data-tab-name="a"]' );

    const done = assert.async();

    wrapper.find( '.tab[data-tab-name="b"] a' ).trigger( 'click' );

    // queue asserts after animation
    tabPaneA.queue( () => {
        tabPaneB.queue( () => {
            const activeTab = wrapper.find( '.tab.active' );
            const activePane = wrapper.find( '.sl-tab-pane.active' );

            assert.strictEqual(
                activeTab.data( 'tab-name' ),
                'b',
                'Active tab is "b"'
            );

            assert.strictEqual(
                activePane.data( 'tab-name' ),
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

test( 'Tab content height is adjusted after new tab selection', function( assert ) {
    assert.expect( 1 );

    const done = assert.async();

    this.render( hbs`
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

    const initialHeight = wrapper.find( '.tab-content' ).height();

    wrapper.find( '.tab[data-tab-name="b"] a' ).trigger( 'click' );

    // queue assert after animation
    tabPaneA.queue( () => {
        tabPaneB.queue( () => {
            assert.notEqual(
                wrapper.find( '.tab-content' ).height(),
                initialHeight
            );

            done();
        });
    });
});
