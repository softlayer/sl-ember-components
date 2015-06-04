import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-tab-panel', 'Unit - component: sl-tab-panel', {
    needs: [ 'component:sl-tab-pane' ]
});

test( 'Expected default classes are applied', function( assert ) {
    assert.ok(
        this.$().hasClass( 'sl-tab-panel' ),
        'Has class "sl-tab-panel"'
    );

    assert.ok(
        this.$().hasClass( 'sl-align-tabs-left' ),
        'Has class "sl-align-tabs-left"'
    );
});

test( 'setupTabs() does so correctly', function( assert ) {
    var component = this.subject({
            template: Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}'
            )
        }),
        done = assert.async();

    assert.expect( 5 );

    this.render();

    component.paneFor( 'a' ).queue( () => {
        assert.equal(
            this.$( '.tab[data-tab-name]' ).length,
            3,
            'Three tabs are rendered'
        );

        assert.equal(
            this.$( '.sl-tab-pane[data-tab-name]' ).length,
            3,
            'Three tab panes are rendered'
        );

        assert.equal(
            Ember.$.trim( this.$( '.sl-tab-pane[data-tab-name="b"]' ).text() ),
            'B content',
            'Expected content is present in second tab pane'
        );

        assert.equal(
            this.$( '.tab.active[data-tab-name="a"]' ).length,
            1,
            'Rendered component has tab "a" as its active tab'
        );

        assert.equal(
            this.$( '.sl-tab-pane.active[data-tab-name="a"]' ).length,
            1,
            'Rendered component has panel for tab "a" as its active panel'
        );

        done();
    });
});

test( 'ARIA roles are implemented', function( assert ) {
    this.subject({
        template: Ember.Handlebars.compile(
            '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
            '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}' +
            '{{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}'
        )
    });

    assert.equal(
        this.$( '.nav-tabs[role="tablist"]' ).length,
        1,
        'Rendered component has "tablist" ARIA role'
    );

    assert.equal(
        this.$('.tab a[role="tab"]' ).length,
        3,
        'Rendered component has three <a> with "tab" ARIA role'
    );
});

test( '"initialTabName" property is respected', function( assert ) {
    var component = this.subject({
            initialTabName: 'b',
            template: Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}'
            )
        }),
        done = assert.async();

    assert.expect( 2 );

    this.render();

    component.paneFor( 'b' ).queue( () => {
        assert.equal(
            this.$( '.tab.active[data-tab-name="b"]' ).length,
            1,
            'Initial tab is expected "b"'
        );

        assert.equal(
            this.$( '.sl-tab-pane.active[data-tab-name="b"]' ).length,
            1,
            'Initial tab pane is expected "b"'
        );

        done();
    });
});

test( '"alignTabs" property is respected', function( assert ) {
    this.subject({
        alignTabs: 'right'
    });

    assert.ok(
        this.$().hasClass( 'sl-align-tabs-right' ),
        'Tab alignment class is applied'
    );
});

test( 'Tabs display in expected order when "alignTabs" property is not specified', function( assert ) {
    var labels = [];

    this.subject({
        template: Ember.Handlebars.compile(
            '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
            '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}' +
            '{{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}'
        )
    });

    this.$( '.tab[data-tab-name]' ).each( function() {
        labels.push( $( this ).attr( 'data-tab-name' ) );
    });

    assert.deepEqual( labels, [ 'a', 'b', 'c' ] );
});

test( 'Clicking tab changes active tab', function( assert ) {
    var component = this.subject({
            template: Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}'
            )
        }),
        done = assert.async();

    assert.expect( 2 );

    this.$( '.tab[data-tab-name="b"] a' ).trigger( 'click' );

    component.paneFor( 'a' ).queue( () => {
        component.paneFor( 'b' ).queue( () => {
            assert.equal( this.$( '.tab.active[data-tab-name="b"]' ).length, 1 );
            assert.equal( this.$( '.sl-tab-pane.active[data-tab-name="b"]' ).length, 1 );

            done();
        });
    });
});

test( 'Tab content height is adjusted after new tab selection', function( assert ) {
    var component = this.subject({
            template: Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content<br><br>Taller content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}'
            )
        }),
        done = assert.async(),
        initialHeight;

    assert.expect( 1 );

    this.render();

    component.paneFor( 'a' ).queue( () => {
        initialHeight = this.$( '.tab-content' ).height();
    });

    component.paneFor( 'b' ).queue( () => {
        assert.notEqual( initialHeight, this.$( '.tab-content' ).height() );

        done();
    });

    this.$( '.tab[data-tab-name="b"] a' ).trigger( 'click' );
});

test( '"activatePane" animates as expected', function( assert ) {
    var component = this.subject({
            template: Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}'
            )
        }),
        spy = sinon.spy( Ember.$.prototype, 'fadeIn' ),
        done = assert.async();

    this.render();

    assert.expect( 1 );

    component.paneFor( 'a' ).queue( () => {
        assert.equal( spy.calledOnce, true );
        done();
    });
});

test( '"deactivatePane" animates as expected', function( assert ) {
    var component = this.subject({
            template: Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}'
            )
        }),
        spy = sinon.spy( Ember.$.prototype, 'fadeOut' ),
        done = assert.async();

    assert.expect( 1 );

    this.$( '.tab[data-tab-name="b"] a' ).trigger( 'click' );

    component.paneFor( 'a' ).queue( () => {
        component.paneFor( 'b' ).queue( () => {
            assert.equal( spy.calledOnce, true );
            done();
        });
    });
});

test( '"deactivatePane" calls specified callback', function( assert ) {
    var component = this.subject({
            template: Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}'
            )
        }),
        callback = sinon.spy(),
        done = assert.async();

    this.render();

    assert.expect( 1 );

    component.deactivatePane( callback );

    component.paneFor( 'a' ).queue( () => {
        assert.equal( callback.calledOnce, true );
        done();
    });
});
