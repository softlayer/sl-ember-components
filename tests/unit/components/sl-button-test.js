import Ember from 'ember';
import { test, moduleFor, moduleForComponent } from 'ember-qunit';
import SlButton from 'sl-ember-components/components/sl-button';
import AjaxHelper from '../../helpers/ajax-helper';

moduleForComponent( 'sl-button', 'Unit - component:sl-button' );

test( 'Label changes during associated AJAX activity', function() {
    var component = this.subject({
        ajaxEnabled: true,
        label: 'Static Text',
        activeLabelText: 'Active Text'
    });

    AjaxHelper.begin();
    equal( component.get( 'label' ), 'Active Text' );

    AjaxHelper.end();
    equal( component.get( 'label' ), 'Static Text' );
});

test( 'The element hides during associated AJAX activity', function() {
    var component = this.subject({
        ajaxEnabled: true,
        hideOnAjax: true
    });

    equal( this.$().css( 'visibility' ), 'visible' );

    AjaxHelper.begin();
    equal( this.$().css( 'visibility' ), 'hidden' );

    AjaxHelper.end();
    equal( this.$().css( 'visibility' ), 'visible' );
});

test( 'The element fires event when clicked', function() {
    expect( 1 );

    var component = this.subject();
    var $component = this.append();

    var targetObject = {
        externalAction: function() {
            ok( true, 'External action was called' );
        }
    };

    component.set( 'action', 'externalAction' );
    component.set( 'targetObject', targetObject );

    $component.click();
});

test( 'The element disables during associated AJAX activity', function() {
    var component = this.subject({
        ajaxEnabled: true,
        disableOnAjax: true
    });

    equal( this.$().is( ':disabled' ), false );

    AjaxHelper.begin();
    equal( this.$().is( ':disabled' ), true );

    AjaxHelper.end();
    equal( this.$().is( ':disabled' ), false );
});

/**
 * While it appears that core Ember functionality is being tested this test is ensuring
 * that the implied contract about which DOM element is rendered is adhered to.
 */
/*
test( 'Renders as a button tag', function() {
});

test( 'Expected default classes are applied', function() {
});


test( 'Labels are correctly initialized', function() {
});

test( 'sizeClass() returns correct values', function() {
});

test( 'themeClass() returns correct value', function() {
});
*/