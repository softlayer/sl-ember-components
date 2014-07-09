import Ember from 'ember';

var AjaxHelper = function() {};

AjaxHelper.prototype.begin = function( endpoint ) {
    Ember.run( function() {
        if ( endpoint ) {
            $( document ).trigger( 'ajaxSend', [ null, { url: endpoint }]);
        } else {
            $( document ).trigger( 'ajaxStart' );
        }
    });
};

AjaxHelper.prototype.end = function( endpoint ) {
    Ember.run( function() {
        if ( endpoint ) {
            $( document ).trigger( 'ajaxComplete', [ null, { url: endpoint }]);
        } else {
            $( document ).trigger( 'ajaxStop' );
        }
    });
};

var helper = new AjaxHelper();
export default helper;