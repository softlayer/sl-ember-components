import Ember from 'ember';
import { test, moduleFor } from 'ember-qunit';
import AjaxAwareMixin from 'sl-components/mixins/sl-ajax-aware';
import AjaxHelper from 'sl-components/tests/helpers/ajax-helper';

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

var mixin;

module( 'AjaxAware Mixin:Global Scope', {
    setup: function() {
        Ember.run( function() {
            mixin = BaseObject.create({
                ajaxEnabled: true
            });
        });
    },

    teardown: function() {
        mixin = null;
    }
});

test( 'Start Handler is called when URL is global scope', function() {
    AjaxHelper.begin();
    AjaxHelper.begin( 'my/api/endpoint' );

    equal( mixin.startHandlerCalled, true );
    equal( mixin.sendHandlerCalled, false );
});

test( 'Stop Handler is called when URL is global scope', function() {
    AjaxHelper.end();
    AjaxHelper.end( 'my/api/endpoint' );

    equal( mixin.stopHandlerCalled, true );
    equal( mixin.completeHandlerCalled, false );
});

module( 'AjaxAware Mixin:URL Scope (String)', {
    setup: function() {
        Ember.run( function() {
            mixin = BaseObject.create({
                ajaxEnabled: true,
                urlScope: 'my/api/endpoint'
            });
        });
    },

    teardown: function() {
        mixin = null;
    }
});

test( 'Send Handler is called when URL is specifically scoped', function() {
    AjaxHelper.begin();
    AjaxHelper.begin( 'my/api/endpoint' );

    equal( mixin.sendHandlerCalled, true );
    equal( mixin.startHandlerCalled, false );
});

test( 'Complete Handler is called when URL is specifically scoped', function() {
    AjaxHelper.end();
    AjaxHelper.end( 'my/api/endpoint' );

    equal( mixin.completeHandlerCalled, true );
    equal( mixin.stopHandlerCalled, false );
});

module( 'AjaxAware Mixin:URL Scope (Regex)', {
    setup: function() {
        Ember.run( function() {
            mixin = BaseObject.create({
                ajaxEnabled: true,
                urlScope: /api\/endpoint/
            });
        });
    },

    teardown: function() {
        mixin = null;
    }
});

test( 'Scopes to specific URL if specified as a regular expression', function() {
    AjaxHelper.begin();
    AjaxHelper.begin( 'my/api/endpoint' );

    equal( mixin.sendHandlerCalled, true );
    equal( mixin.startHandlerCalled, false );
});

test( 'Scope supports multiple URLs via regular expression', function() {
    AjaxHelper.begin();
    AjaxHelper.begin( 'my/api/endpoint' );
    AjaxHelper.begin( 'my/alternate/api/endpoint' );
    AjaxHelper.begin( 'my/other/alternate/api/endpoint' );

    equal( mixin.sendHandlerCalled, true );
    equal( mixin.sendHandlerCalledCount, 3 );
    equal( mixin.startHandlerCalled, false );
});


module( 'AjaxAware Mixin:Ajax Enabled False (Global)', {
    setup: function() {
        Ember.run( function() {
            mixin = BaseObject.create({
                ajaxEnabled: false
            });
        });
    },

    teardown: function() {
        mixin = null;
    }
});

test( 'Start Handler is not called if ajaxEnabled is false', function() {
    AjaxHelper.begin();
    equal( mixin.startHandlerCalled, false );
});

test( 'Stop Handler is not called if ajaxEnabled is false', function() {
    AjaxHelper.end();
    equal( mixin.stopHandlerCalled, false );
});

module( 'AjaxAware Mixin:Ajax Enabled True (Global)', {
    setup: function() {
        Ember.run( function() {
            mixin = BaseObject.create({
                ajaxEnabled: true
            });
        });
    },

    teardown: function() {
        mixin = null;
    }
});

test( 'Start Handler is called if ajaxEnabled is true', function() {
    AjaxHelper.begin();
    equal( mixin.startHandlerCalled, true );
});

test( 'Stop Handler is called if ajaxEnabled is true', function() {
    AjaxHelper.end();
    equal( mixin.stopHandlerCalled, true );
});

module( 'AjaxAware Mixin:Ajax Enabled False (Scoped)', {
    setup: function() {
        Ember.run( function() {
            mixin = BaseObject.create({
                ajaxEnabled: false,
                urlScope: 'my/api/endpoint'
            });
        });
    },

    teardown: function() {
        mixin = null;
    }
});

test( 'Send Handler is not called if ajaxEnabled is false', function() {
    AjaxHelper.begin( 'my/api/endpoint' );
    equal( mixin.sendHandlerCalled, false );
});

test( 'Complete Handler is not called if ajaxEnabled is false', function() {
    AjaxHelper.end( 'my/api/endpoint' );
    equal( mixin.completeHandlerCalled, false );
});

module( 'AjaxAware Mixin:Ajax Enabled True (Scoped)', {
    setup: function() {
        Ember.run( function() {
            mixin = BaseObject.create({
                ajaxEnabled: true,
                urlScope: 'my/api/endpoint'
            });
        });
    },

    teardown: function() {
        mixin = null;
    }
});

test( 'Send Handler is called if ajaxEnabled is true', function() {
    AjaxHelper.begin( 'my/api/endpoint' );
    equal( mixin.sendHandlerCalled, true );
});

test( 'Complete Handler is called if ajaxEnabled is true', function() {
    AjaxHelper.end( 'my/api/endpoint' );
    equal( mixin.completeHandlerCalled, true );
});