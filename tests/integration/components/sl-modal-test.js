import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';
import sinon from 'sinon';

const mockStream = {
    actions: {},

    on( actionName, handler ) {
        this.actions[ actionName ] = handler;
    },

    subject: {
        dispose() {
            mockStream.actions = {};
        },

        onCompleted() {}
    }
};

const template = hbs`
    {{#sl-modal as |modal|}}
        {{sl-modal-header
            title="Simple Example"
            ariaLabelledBy=modal.ariaLabelledBy
        }}

        {{#sl-modal-body}}
            <p>A simple modal example</p>
        {{/sl-modal-body}}

        {{sl-modal-footer}}
    {{/sl-modal}}
`;

moduleForComponent( 'sl-modal', 'Integration | Component | sl modal', {
    afterEach() {
        this.$( '.modal' ).remove();
        Ember.$( '.modal-backdrop' ).remove();
    },

    integration: true
});

test( 'Backdrop property is passed through to jQuery correctly', function( assert ) {
    // we currently only pass through the backdrop parameter
    const spy = sinon.spy( Ember.$.fn, 'modal' );

    // props passed to bootstrap modal that are not bound to template
    const nonTemplateProps = {
        keyboard: true,
        show: false
    };

    this.render( hbs`{{sl-modal backdrop="__backdrop__"}}` );

    assert.ok(
        spy.calledWith( Ember.$.extend( { backdrop: '__backdrop__' }, nonTemplateProps ) ),
        'backdrop property is passed to jQuery.modal correctly'
    );

    Ember.$.fn.modal.restore();
});

test( 'Animated property adds fade class', function( assert ) {
    this.render( hbs`{{sl-modal animated=false}}` );
    const first = this.$( '>:first-child' );

    this.render( hbs`{{sl-modal animated=true}}` );
    const second = this.$( '>:first-child' );

    assert.notOk(
        first.hasClass( 'fade' ),
        'fade class not present when animated set to false'
    );

    assert.ok(
        second.hasClass( 'fade' ),
        'fade class present when animated set to true'
    );
});

test( 'Classes are present', function( assert ) {
    this.render( template );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'modal' ),
        'Has class modal'
    );
});

test( 'Listeners are setup and firing appropriately', function( assert ) {
    assert.expect( 4 );

    const beforeShowDone = assert.async();
    const afterShowDone = assert.async();
    const beforeHideDone = assert.async();
    const afterHideDone = assert.async();

    const beforeShow = () =>  {
        assert.ok(
            true,
            'beforeShow was triggered'
        );

        beforeShowDone();
    };

    const afterShow = () => {
        assert.ok(
            true,
            'afterShow was triggered'
        );

        afterShowDone();
    };

    const beforeHide = () => {
        assert.ok(
            true,
            'beforeHide was triggered'
        );

        beforeHideDone();
    };

    const afterHide = () => {
        assert.ok(
            true,
            'afterHide was triggered'
        );

        afterHideDone();
    };

    this.on( 'beforeShow', beforeShow );
    this.on( 'afterShow', afterShow );
    this.on( 'beforeHide', beforeHide );
    this.on( 'afterHide', afterHide );

    this.render( hbs`
        {{#sl-modal name="testing"
            beforeShow="beforeShow"
            afterShow="afterShow"
            beforeHide="beforeHide"
            afterHide="afterHide"
         }}
            {{sl-modal-header}}

            {{#sl-modal-body}}
                <p>A simple modal example</p>
            {{/sl-modal-body}}

            {{sl-modal-footer}}
        {{/sl-modal}}
    ` );

    Ember.run( () => {
        this.$( '>:first-child' ).modal( 'show' );
        this.$( '>:first-child' ).modal( 'hide' );
    });

    this.hideModal = false;
});

test( 'Property isOpen is set appropriately', function( assert ) {
    this.set( 'isOpen' );

    this.render( hbs`
        {{#sl-modal isOpen=isOpen}}
            {{sl-modal-header title="Simple Example"}}

            {{#sl-modal-body}}
                <p>A simple modal example</p>
            {{/sl-modal-body}}

            {{sl-modal-footer}}
        {{/sl-modal}}
    ` );

    Ember.run( () => {
        this.$( '>:first-child' ).trigger( 'shown.bs.modal' );
    });

    assert.strictEqual(
        this.get( 'isOpen' ),
        true,
        'isOpen was set to true when modal show event was triggered'
    );

    Ember.run( () => {
        this.$( '>:first-child' ).trigger( 'hidden.bs.modal' );
    });

    assert.strictEqual(
        this.get( 'isOpen' ),
        false,
        'isOpen was set to false when modal close event was triggered'
    );
});

test( 'Closing of modal using close button works', function( assert ) {
    assert.expect( 1 );
    const closeDone = assert.async();

    const modalClosed = () => {
        assert.ok(
            true,
            'Modal was closed'
        );
        closeDone();
    };

    this.on( 'modalClosed', modalClosed );

    this.render( hbs`
        {{#sl-modal afterHide="modalClosed"}}
            {{sl-modal-header title="Simple Example"}}

            {{#sl-modal-body}}
                <p>A simple modal example</p>
            {{/sl-modal-body}}

            {{sl-modal-footer}}
        {{/sl-modal}}
    ` );

    Ember.run( () => {
        this.$( '>:first-child' ).modal( 'show' );
        this.$( '>:first-child' ).find( '.close' ).click();
    });

});

test( 'ariaDescribedBy attribute binding', function( assert ) {
    const describedBy = 'targetId';

    this.set( 'ariaDescribedBy', describedBy );

    this.render( hbs`
        {{#sl-modal ariaDescribedBy=ariaDescribedBy}}
            {{sl-modal-header title="Simple Example"}}

            {{#sl-modal-body}}
                <p>A simple modal example</p>
            {{/sl-modal-body}}

            {{sl-modal-footer}}
        {{/sl-modal}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).attr( 'aria-describedby' ),
        describedBy
    );
});

test( 'aria-hidden is true', function( assert ) {
    this.render( template );

    assert.strictEqual(
        this.$( '>:first-child' ).attr( 'aria-hidden' ),
        'true'
    );
});

test( 'aria-labelledby is set', function( assert ) {
    this.render( template );

    assert.strictEqual(
        this.$( '>:first-child' ).attr( 'aria-labelledby' ),
        this.$( '>:first-child' ).find( '.modal-title' ).prop( 'id' ),
        '"aria-labelledby" points to correct element'
    );
});

test( 'Component responds to "hide" stream action', function( assert ) {
    this.set( 'stream', mockStream );
    this.set( 'hide', sinon.spy() );

    this.render( hbs`
        {{#sl-modal stream=stream hide=hide}}
            {{sl-modal-header title="Simple Example"}}

            {{#sl-modal-body}}
                <p>A simple modal example</p>
            {{/sl-modal-body}}

            {{sl-modal-footer}}
        {{/sl-modal}}
    ` );

    mockStream.actions[ 'hide' ]();

    assert.ok(
        this.get( 'hide' ).calledOnce,
        'hide() was triggered successfully'
    );
});

test( 'Component responds to "show" stream action', function( assert ) {
    this.set( 'stream', mockStream );
    this.set( 'show', sinon.spy() );

    this.render( hbs`
        {{#sl-modal stream=stream show=show}}
            {{sl-modal-header title="Simple Example"}}

            {{#sl-modal-body}}
                <p>A simple modal example</p>
            {{/sl-modal-body}}

            {{sl-modal-footer}}
        {{/sl-modal}}
    ` );

    mockStream.actions[ 'show' ]();

    assert.ok(
        this.get( 'show' ).calledOnce,
        'hide() was triggered successfully'
    );
});

test( 'There are no references to Ember.$, $ or jQuery', function( assert ) {
    const jqueryAliasSpy = sinon.spy( window, '$' );
    const jquerySpy = sinon.spy( window, 'jQuery' );
    const emberJquery = sinon.spy( Ember, '$' );

    this.render( template );

    const component = this.$( '>:first-child' );

    Ember.run( () => {
        component.modal( 'show' );
        component.modal( 'hide' );
    });

    const called = jqueryAliasSpy.called || jquerySpy.called || emberJquery.called;

    assert.notOk(
        called
    );

    window.$.restore();
    window.jQuery.restore();
    Ember.$.restore();
});
