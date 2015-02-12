import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import AjaxHelper from '../../helpers/ajax-helper';
import SlButton from 'sl-ember-components/components/sl-button';

moduleForComponent( 'sl-button', 'Unit - component: sl-button' );

test( 'Label changes during associated AJAX activity', function() {
    var activeText = 'Active Text',
        staticText = 'Static Text',
        component = this.subject({
            activeLabelText : activeText,
            ajaxEnabled     : true,
            label           : staticText
        }),
        $component = this.render();

    equal( component.get( 'label' ), staticText );

    AjaxHelper.begin();
    Ember.run.later( function() { equal( component.get( 'label' ), activeText ); });

    AjaxHelper.end();
    Ember.run.later( function() { equal( component.get( 'label' ), staticText ); });
});

test( 'The element hides during associated AJAX activity', function() {
    var component = this.subject({
            ajaxEnabled : true,
            hideOnAjax  : true
        }),
        $component = this.render();

    equal( $component.css( 'visibility' ), 'visible' );

    AjaxHelper.begin();
    equal( $component.css( 'visibility' ), 'hidden' );

    AjaxHelper.end();
    equal( $component.css( 'visibility' ), 'visible' );
});

test( 'The element fires event when clicked', function() {
    var component = this.subject({
            action: 'externalAction',
            targetObject: {
                externalAction: function() {
                    ok( true, 'External action was called' );
                }
            }
        }),
        $component = this.render();

    expect( 1 );
    $component.click();
});

test( 'The element disables during associated AJAX activity', function() {
    var component = this.subject({
            ajaxEnabled   : true,
            disableOnAjax : true
        }),
        $component = this.render();

    equal( $component.is( ':disabled' ), false );

    AjaxHelper.begin();
    equal( $component.is( ':disabled' ), true );

    AjaxHelper.end();
    equal( $component.is( ':disabled' ), false );
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
