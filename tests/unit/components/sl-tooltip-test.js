import Ember from 'ember';
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

test( 'enabledTooltip() - Verify classes are set correctly: data-toggle and data-original-title', function( assert ) {
    this.subject( { title: 'Tooltip Text' } );

    assert.equal(
        this.$().attr( 'data-toggle' ),
        'tooltip',
        'Has class "data-toggle"'
    );

    assert.equal(
        this.$().attr( 'data-original-title' ),
        'Tooltip Text',
        'Has class "data-original-title"'
    );
});

test( 'enabledTooltip() - Verify only correct title is set', function( assert ) {
    this.subject( { title: 'Tooltip Text' } );

    assert.equal(
        this.$().attr( 'data-toggle' ),
        'tooltip',
        'Has class "data-toggle"'
    );

    assert.notEqual(
        this.$().attr( 'data-original-title' ),
        'Wrong Title',
        'Has class "data-original-title"'
    );
});

test( 'enablePopover() - Verify classes are set correctly: data-toggle and data-original-title', function( assert ) {
    this.subject({
        popover: 'Popover content',
        title: 'Popover Text'
    });

    assert.equal(
        this.$().attr( 'data-toggle' ),
        'popover',
        'Has class "data-toggle"'
    );

    assert.equal(
        this.$().attr( 'data-original-title' ),
        'Popover Text',
        'Has class "data-original-title"'
    );
});

test( 'enablePopover() - Verify only correct title is set', function( assert ) {
    this.subject({
        popover: 'Popover content',
        title: 'Popover Text'
    });

    assert.equal(
        this.$().attr( 'data-toggle' ),
        'popover',
        'Has class "data-toggle"'
    );

    assert.notEqual(
        this.$().attr( 'data-original-title' ),
        'Wrong Text',
        'Has class "data-original-title"'
    );
});
