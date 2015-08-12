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
    {{#sl-modal}}
        {{sl-modal-header title="Simple Example"}}

        {{#sl-modal-body}}
            <p>A simple modal example</p>'
        {{/sl-modal-body}}'

        {{sl-modal-footer}}
    {{/sl-modal}}
`;

moduleForComponent( 'sl-modal', 'Integration | Component | sl modal', {

    beforeEach() {
        this.hideModal = true;
    },

    /**
     * Hide modal after each test,
     * this will prevent the bootstrap overlay from sticking around.
     * The hideModal property can be overridden in a test.
     **/
    afterEach() {
        if ( this.hideModal ) {
            if ( this.$( '.modal' ) ) {
                this.$( '.modal' ).modal( 'hide' );
                Ember.$( '.modal-backdrop' ).remove();
            }
        }
    },

    integration: true
});

test( 'Classes are present', function( assert ) {
    this.render( template );

    assert.ok(
        this.$().children().hasClass( 'modal' ),
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
        {{#sl-modal name='testing'
            beforeShow='beforeShow'
            afterShow='afterShow'
            beforeHide='beforeHide'
            afterHide='afterHide'
         }}
            {{sl-modal-header}}

            {{#sl-modal-body}}
                <p>A simple modal example</p>'
            {{/sl-modal-body}}'

            {{sl-modal-footer}}
        {{/sl-modal}}
    `);

    Ember.run( () => {
        this.$( '.modal' ).modal( 'show' );
        this.$( '.modal' ).modal( 'hide' );
    });

    this.hideModal = false;
});

test( 'Property isOpen is set appropriately', function( assert ) {

    this.set( 'isOpen', 'initial Value' );

    this.render( hbs`
        {{#sl-modal isOpen=isOpen}}
            {{sl-modal-header title="Simple Example"}}

            {{#sl-modal-body}}
                <p>A simple modal example</p>'
            {{/sl-modal-body}}'

            {{sl-modal-footer}}
        {{/sl-modal}}
    `);

    Ember.run( () => {
        this.$( '.modal' ).trigger( 'shown.bs.modal' );
    });

    assert.equal(
        this.get( 'isOpen' ),
        true,
        'isOpen was set to true when modal show event was triggered'
    );

    Ember.run( () => {
        this.$( '.modal' ).trigger( 'hidden.bs.modal' );
    });

    assert.equal(
        this.get( 'isOpen' ),
        false,
        'isOpen was set to false when modal close event was triggered'
    );
});

test( 'Closing of modal using close button works', function( assert ) {
    assert.expect( 1 );
    const closeDone = assert.async();

    const modalClosed = () => {
        assert.ok( 'Modal was closed' );
        closeDone();
    };

    this.on( 'modalClosed', modalClosed );

    this.render( hbs`
        {{#sl-modal afterHide='modalClosed'}}
            {{sl-modal-header title="Simple Example"}}

            {{#sl-modal-body}}
                <p>A simple modal example</p>'
            {{/sl-modal-body}}'

            {{sl-modal-footer}}
        {{/sl-modal}}
    `);

    Ember.run( () => {
        this.$( '.modal' ).modal( 'show' );
        this.$( '.modal' ).find( '.close' ).click();
    });

});

test( 'Backdrop is hidden when backdrop property is set to false', function( assert ) {
    this.render( hbs`
        {{#sl-modal backdrop=false}}
            {{sl-modal-header title="Simple Example"}}

            {{#sl-modal-body}}
                <p>A simple modal example</p>'
            {{/sl-modal-body}}'

            {{sl-modal-footer}}
        {{/sl-modal}}
    `);

    Ember.run( () => {
        this.$( '.modal' ).modal( 'show' );
    });

    assert.equal(
        Ember.$( '.modal-backdrop' ).length,
        0
    );
});

test( 'Backdrop is shown by default', function( assert ) {
    this.render( template );

    Ember.run( () => {
        this.$( '.modal' ).modal( 'show' );
    });

    assert.equal(
        Ember.$( '.modal-backdrop' ).length,
        1
    );
});

test( 'Fade class is present when animated is set to true', function( assert ) {
    this.render( template );

    this.render( hbs`
        {{#sl-modal animated=true}}
            {{sl-modal-header title="Simple Example"}}

            {{#sl-modal-body}}
                <p>A simple modal example</p>'
            {{/sl-modal-body}}'

            {{sl-modal-footer}}
        {{/sl-modal}}
    `);

    assert.ok(
        this.$( '.modal' ).hasClass( 'fade' )
    );
});

test( 'Fade class is absent when animated is set to false', function( assert ) {
    this.render( template );

    this.render( hbs`
        {{#sl-modal animated=false}}
            {{sl-modal-header title="Simple Example"}}

            {{#sl-modal-body}}
                <p>A simple modal example</p>'
            {{/sl-modal-body}}'

            {{sl-modal-footer}}
        {{/sl-modal}}
    `);

    assert.ok(
        !this.$().hasClass( 'fade' )
    );
});

test( 'ariaDescribedBy attribute binding', function( assert ) {
    const describedBy = 'targetId';

    this.render( template );

    this.set( 'ariaDescribedBy', describedBy );

    this.render( hbs`
        {{#sl-modal ariaDescribedBy=ariaDescribedBy}}
            {{sl-modal-header title="Simple Example"}}

            {{#sl-modal-body}}
                <p>A simple modal example</p>'
            {{/sl-modal-body}}'

            {{sl-modal-footer}}
        {{/sl-modal}}
    `);

    assert.equal(
        this.$( '.modal' ).attr( 'aria-describedby' ),
        describedBy
    );
});

test( 'aria-hidden is true', function( assert ) {
    this.render( template );

    assert.equal(
        this.$( '.modal' ).attr( 'aria-hidden' ),
        'true'
    );
});

test( 'aria-labelledby is set', function( assert ) {
    this.render( template );

    assert.ok(
        this.$( '.modal' ).attr( 'aria-labelledby' )
    );
});

test( 'Component responds to "hide" stream action', function( assert ) {
    this.set( 'stream', mockStream );
    this.set( 'hide', sinon.spy() );

    this.render( hbs`
        {{#sl-modal stream=stream hide=hide}}
            {{sl-modal-header title="Simple Example"}}

            {{#sl-modal-body}}
                <p>A simple modal example</p>'
            {{/sl-modal-body}}'

            {{sl-modal-footer}}
        {{/sl-modal}}
    `);

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
                <p>A simple modal example</p>'
            {{/sl-modal-body}}'

            {{sl-modal-footer}}
        {{/sl-modal}}
    `);

    mockStream.actions[ 'show' ]();

    assert.ok(
        this.get( 'show' ).calledOnce,
        'hide() was triggered successfully'
    );
});
