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

    // setting property to first test value
    const template1 = hbs`{{sl-modal backdrop=false}}`;

    // setting property to second test value
    const template2 = hbs`{{sl-modal backdrop=true}}`;

    // defaulting property value
    const template3 = hbs`{{sl-modal}}`;

    this.render( template1 );

    assert.deepEqual(
        spy.args[0][0],
        Ember.$.extend( { backdrop: false }, nonTemplateProps ),
        'backdrop property is correctly set to false'
    );

    this.render( template2 );

    assert.deepEqual(
        spy.args[1][0],
        Ember.$.extend( { backdrop: true }, nonTemplateProps ),
        'backdrop property is correctly set to true'
    );

    this.render( template3 );

    assert.deepEqual(
        spy.args[2][0],
        Ember.$.extend( { backdrop: true }, nonTemplateProps ),
        'backdrop property is correctly defaulted to true'
    );

    Ember.$.fn.modal.restore();
});

test( 'Animated property adds fade class', function( assert ) {
    // setting property to first test value
    const template1 = hbs`{{sl-modal animated=false}}`;

    // setting property to second test value
    const template2 = hbs`{{sl-modal animated=true}}`;

    // defaulting property value
    const template3 = hbs`{{sl-modal}}`;

    this.render( template1 );
    const $first = this.$( '>:first-child' );

    this.render( template2 );
    const $second = this.$( '>:first-child' );

    this.render( template3 );
    const $third = this.$( '>:first-child' );

    assert.strictEqual(
        $first.filter( ':not(.fade)' ).length,
        1,
        'fade class not present when animated set to false'
    );

    assert.strictEqual(
        $second.filter( '.fade' ).length,
        1,
        'fade class present when animated set to true'
    );

    assert.strictEqual(
        $third.filter( '.fade' ).length,
        1,
        'fade class present when animated not set'
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

test( 'Components do not cross-contaminate', function( assert ) {
    const spyModal = sinon.spy( Ember.$.fn, 'modal' );
    const spyOn = sinon.spy( Ember.$.fn, 'on' );

    this.render( hbs`
        {{#sl-modal}}
            {{sl-modal-header title="Simple Example 1"}}

            {{#sl-modal-body}}
                <p>A simple modal example</p>
            {{/sl-modal-body}}

            {{sl-modal-footer}}
        {{/sl-modal}}
    ` );

    const $first = this.$( '>:first-child' );

    assert.deepEqual(
        spyModal.thisValues.map( ( i ) => i.get( 0 ) ),
        spyModal.thisValues.map( (   ) => $first.get( 0 ) ),
        'First modal attaches to the proper element ($.fn.modal)'
    );

    assert.deepEqual(
        spyOn.thisValues.map( ( i ) => i.get( 0 ) ),
        spyOn.thisValues.map( (   ) => $first.get( 0 ) ),
        'First modal attaches to the proper element ($.fn.on)'
    );

    spyModal.reset();
    spyOn.reset();

    this.render( hbs`
        {{#sl-modal}}
            {{sl-modal-header title="Simple Example 2"}}

            {{#sl-modal-body}}
                <p>A simple modal example</p>
            {{/sl-modal-body}}

            {{sl-modal-footer}}
        {{/sl-modal}}
    ` );

    const $second = this.$( '>:first-child' );

    assert.deepEqual(
        spyModal.thisValues.map( ( i ) => i.get( 0 ) ),
        spyModal.thisValues.map( (   ) => $second.get( 0 ) ),
        'Second modal attaches to the proper element ($.fn.modal)'
    );

    assert.deepEqual(
        spyOn.thisValues.map( ( i ) => i.get( 0 ) ),
        spyOn.thisValues.map( (   ) => $second.get( 0 ) ),
        'Second modal attaches to the proper element ($.fn.on)'
    );

    spyModal.reset();
    spyOn.reset();

    $second.modal( 'show' );

    assert.deepEqual(
        spyModal.thisValues.map( ( i ) => i.get( 0 ) ),
        spyModal.thisValues.map( (   ) => $second.get( 0 ) ),
        'Second modal acts on the proper dom element (1/2)'
    );

    spyModal.reset();

    $second.modal( 'hide' );

    assert.deepEqual(
        spyModal.thisValues.map( ( i ) => i.get( 0 ) ),
        spyModal.thisValues.map( (   ) => $second.get( 0 ) ),
        'Second modal acts on the proper dom element (2/2)'
    );

    Ember.$.fn.modal.restore();
    Ember.$.fn.on.restore();
});
