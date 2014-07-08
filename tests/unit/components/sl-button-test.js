import Ember from 'ember';
import { test, moduleFor } from 'ember-qunit';
import SlButton from 'sl-components/components/sl-button';

module( 'Component: Sl-Button' );


test( 'Label text changes on active', function() {

    var testObject = SlButton.create({

        ajaxEnabled: true,

        labelText: 'Static Text',

        activeLabelText: 'Active Text'

    });

    $( document ).trigger( 'ajaxStart' );

    var labelTxt = testObject.get( 'labelText' );
    equal( labelTxt, 'Active Text', 'Active Text is turned on during active query' );

});