import Ember from 'ember';
import { test, moduleFor } from 'ember-qunit';
import AjaxAwareMixin from 'sl-components/mixins/ajaxaware';

var BaseObject = Ember.Object.extend( AjaxAwareMixin, {
    startHandlerCalled: false,
    stopHandlerCalled: false,
    sendHandlerCalled: false,
    completeHandlerCalled: false,

    startHandlerCalledCount: 0,
    stopHandlerCalledCount: 0,
    sendHandlerCalledCount: 0,
    completeHandlerCalledCount: 0,

    ajaxStartHandler: function() {
        this.set( 'startHandlerCalled', true );
        this.set( 'startHandlerCalledCount', this.get( 'startHandlerCalledCount' ) + 1 );
    },

    ajaxStopHandler: function() {
        this.set( 'stopHandlerCalled', true );
        this.set( 'stopHandlerCalledCount', this.get( 'stopHandlerCalledCount' ) + 1 );
    },

    ajaxSendHandler: function() {
        this.set( 'sendHandlerCalled', true );
        this.set( 'sendHandlerCalledCount', this.get( 'sendHandlerCalledCount' ) + 1 );
    },

    ajaxCompleteHandler: function() {
        this.set( 'completeHandlerCalled', true );
        this.set( 'completeHandlerCalledCount', this.get( 'completeHandlerCalledCount' ) + 1 );
    }
});

var testObject;

module( 'AjaxAware Mixin:Global Scope', {
    setup: function() {
        testObject = BaseObject.create({
            ajaxEnabled: true
        });
    },

    teardown: function() {
        testObject = null;
    }
});

test( 'Start Handler is called when URL is global scope', function() {
    $( document ).trigger( 'ajaxStart' );
    $( document ).trigger( 'ajaxSend', [ null, { url: 'my/api/endpoint' }]);

    equal( testObject.startHandlerCalled, true, 'Start Handler called' );
    equal( testObject.sendHandlerCalled, false, 'Send Handler not called' );
});

test( 'Stop Handler is called when URL is global scope', function() {
    $( document ).trigger( 'ajaxStop' );
    $( document ).trigger( 'ajaxComplete', [ null, { url: 'my/api/endpoint' }]);

    equal( testObject.stopHandlerCalled, true, 'Stop Handler called' );
    equal( testObject.completeHandlerCalled, false, 'Complete Handler not called' );
});



module( 'AjaxAware Mixin:URL Scope (String)', {
    setup: function() {
        testObject = BaseObject.create({
            ajaxEnabled: true,

            urlScope: 'my/api/endpoint'
        });
    },

    teardown: function() {
        testObject = null;
    }
});

test( 'Send Handler is called when URL is specifically scoped', function() {
    $( document ).trigger( 'ajaxStart' );
    $( document ).trigger( 'ajaxSend', [ null, { url: 'my/api/endpoint' }]);

    equal( testObject.sendHandlerCalled, true, 'Send Handler called' );
    equal( testObject.startHandlerCalled, false, 'Start Handler not called' );
});

test( 'Complete Handler is called when URL is specifically scoped', function() {
    $( document ).trigger( 'ajaxStop' );
    $( document ).trigger( 'ajaxComplete', [ null, { url: 'my/api/endpoint' }]);

    equal( testObject.completeHandlerCalled, true, 'Complete Handler called' );
    equal( testObject.stopHandlerCalled, false, 'Stop Handler not called' );
});

module( 'AjaxAware Mixin:URL Scope (Regex)', {
    setup: function() {
        testObject = BaseObject.create({
            ajaxEnabled: true,

            urlScope: /api\/endpoint/
        });
    },

    teardown: function() {
        testObject = null;
    }
});

test( 'Scopes to specific URL if specified as a regular expression', function() {
    $( document ).trigger( 'ajaxStart' );
    $( document ).trigger( 'ajaxSend', [ null, { url: 'my/api/endpoint' }]);

    equal( testObject.sendHandlerCalled, true, 'Send Handler called' );
    equal( testObject.startHandlerCalled, false, 'Start Handler not called' );
});

test( 'Scope supports multiple URLs via regular expression', function() {
    $( document ).trigger( 'ajaxStart' );
    $( document ).trigger( 'ajaxSend', [ null, { url: 'my/api/endpoint' }]);
    $( document ).trigger( 'ajaxSend', [ null, { url: 'my/alternate/api/endpoint' }]);
    $( document ).trigger( 'ajaxSend', [ null, { url: 'my/other/alternate/api/endpoint' }]);

    equal( testObject.sendHandlerCalled, true, 'Send Handler called' );
    equal( testObject.sendHandlerCalledCount, 3, 'Send Handler called for all endpoints' );
    equal( testObject.startHandlerCalled, false, 'Start Handler not called' );
});


module( 'AjaxAware Mixin:Ajax Enabled False (Global)', {
    setup: function() {
        testObject = BaseObject.create({
            ajaxEnabled: false
        });
    },

    teardown: function() {
        testObject = null;
    }
});

test( 'Start Handler is not called if ajaxEnabled is false', function() {
    $( document ).trigger( 'ajaxStart' );
    equal( testObject.startHandlerCalled, false, 'Start Handler not called' );
});

test( 'Stop Handler is not called if ajaxEnabled is false', function() {
    $( document ).trigger( 'ajaxStop' );
    equal( testObject.stopHandlerCalled, false, 'Stop Handler not called' );
});

module( 'AjaxAware Mixin:Ajax Enabled True (Global)', {
    setup: function() {
        testObject = BaseObject.create({
            ajaxEnabled: true
        });
    },

    teardown: function() {
        testObject = null;
    }
});

test( 'Start Handler is called if ajaxEnabled is true', function() {
    $( document ).trigger( 'ajaxStart' );
    equal( testObject.startHandlerCalled, true, 'Start Handler called' );
});

test( 'Stop Handler is called if ajaxEnabled is true', function() {
    $( document ).trigger( 'ajaxStop' );
    equal( testObject.stopHandlerCalled, true, 'Stop Handler called' );
});

module( 'AjaxAware Mixin:Ajax Enabled False (Scoped)', {
    setup: function() {
        testObject = BaseObject.create({
            ajaxEnabled: false,

            urlScope: 'my/api/endpoint'
        });
    },

    teardown: function() {
        testObject = null;
    }
});

test( 'Send Handler is not called if ajaxEnabled is false', function() {
    $( document ).trigger( 'ajaxSend', [ null, { url: 'my/api/endpoint' }]);
    equal( testObject.sendHandlerCalled, false, 'Send Handler not called' );
});

test( 'Complete Handler is not called if ajaxEnabled is false', function() {
    $( document ).trigger( 'ajaxComplete', [ null, { url: 'my/api/endpoint' }]);
    equal( testObject.completeHandlerCalled, false, 'Complete Handler not called' );
});

module( 'AjaxAware Mixin:Ajax Enabled True (Scoped)', {
    setup: function() {
        testObject = BaseObject.create({
            ajaxEnabled: true,

            urlScope: 'my/api/endpoint'
        });
    },

    teardown: function() {
        testObject = null;
    }
});

test( 'Send Handler is called if ajaxEnabled is true', function() {
    $( document ).trigger( 'ajaxSend', [ null, { url: 'my/api/endpoint' }]);
    equal( testObject.sendHandlerCalled, true, 'Send Handler called' );
});

test( 'Complete Handler is called if ajaxEnabled is true', function() {
    $( document ).trigger( 'ajaxComplete', [ null, { url: 'my/api/endpoint' }]);
    equal( testObject.completeHandlerCalled, true, 'Complete Handler called' );
});