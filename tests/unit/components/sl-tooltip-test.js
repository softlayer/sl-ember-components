import { moduleForComponent, test } from 'ember-qunit';
import TooltipEnabledMixin from 'sl-ember-components/mixins/sl-tooltip-enabled';

moduleForComponent( 'sl-tooltip', 'Unit | Component | sl tooltip', {
    unit: true
});

test( 'Expected Mixin is present', function( assert ) {
    assert.ok(
        TooltipEnabledMixin.detect( this.subject( { title: 'Tooltip Text' } ) ),
        'Expected Mixin is present'
    );
});

/**
 * Ensures that the template is wrapping the content in a span tag and not in
 * any block-level tags. While it appears that core Ember functionality is being
 * tested this test is ensuring that the implied contract about how this UI
 * component is rendered into the DOM is adhered to.
 */
test( 'Renders as a span tag with no classes', function( assert ) {
    this.subject({
        popover: 'Popover content',
        title: 'Popover Text'
    });

    assert.equal(
        this.$().prop( 'tagName' ),
        'SPAN'
    );
    assert.equal(
        this.$().prop( 'class' ),
        'ember-view'
    );
});

test( '"title" property needs to be a string', function( assert ) {

    // Empty Property

    let assertionThrown = false;

    try {
        this.subject( {} );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Property was empty'
    );

    // Number Property

    assertionThrown = false;

    try {
        this.subject({
            title: 3
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Property was Number'
    );


    // Boolean Property

    assertionThrown = false;

    try {
        this.subject({
            title: true
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        'Property was a Boolean'
    );

    // Array as a Property

    assertionThrown = false;

    try {
        this.subject({
            title: []
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Property was an Array'
    );

    // Function as a Property

    assertionThrown = false;

    try {
        this.subject({
            title: function() {}
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Property was a Function'
    );

    // Object as a Property

    assertionThrown = false;

    try {
        this.subject({
            title: {}
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Property was an Object'
    );

    // Undefined Property

    assertionThrown = false;

    try {
        this.subject({
            title: undefined
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Property was Undefined'
    );

    // String Property

    assertionThrown = false;

    try {
        this.subject({
            title: 'Tooltip Text'
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        !assertionThrown,
        'Property was a String'
    );
});

test( '"popover" property needs to be a string or undefined', function( assert ) {

    // Empty Property

    let assertionThrown = false;

    try {
        this.subject( {} );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Property was empty'
    );

    // Number Property

    assertionThrown = false;

    try {
        this.subject({
            popover: 3,
            title: 'Tooltip Text'
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Property was Number'
    );


    // Boolean Property

    assertionThrown = false;

    try {
        this.subject({
            popover: true,
            title: 'Tooltip Text'
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Property was a Boolean'
    );

    // Array as a Property

    assertionThrown = false;

    try {
        this.subject({
            popover: [],
            title: 'Tooltip Text'
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Property was an Array'
    );

    // Function as a Property

    assertionThrown = false;

    try {
        this.subject({
            popover() {},
            title: 'Tooltip Text'
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Property was a Function'
    );

    // Object as a Property

    assertionThrown = false;

    try {
        this.subject({
            popover: {},
            title: 'Tooltip Text'
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Property was an Object'
    );

    // String Property

    assertionThrown = false;

    try {
        this.subject({
            popover: 'Popover Text',
            title: 'Tooltip Text'
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        !assertionThrown,
        'Property was a String'
    );

    // Undefined Property

    assertionThrown = false;

    try {
        this.subject({
            title: 'Tooltip Text'
        });
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        !assertionThrown,
        'Property was undefined'
    );
});
