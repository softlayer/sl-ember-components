import Ember from 'ember';
import mixinUnderTest from 'sl-ember-components/mixins/class-prefix';
import config from 'ember-get-config';
import * as prefixModule from 'sl-ember-components/utils/class-prefix';
import sinon from 'sinon';
import { module, test } from 'qunit';

module( 'Unit | Mixin | sl component class prefix', {
    beforeEach: function() {
        config.componentClassPrefix = 'test-prefix';
    },
    afterEach: function() {
        const prefix =  config.componentClassPrefix;
        config.componentClassPrefix = prefix;
    }
});

test( 'Can be successfully mixed', function( assert ) {
    const testObject = Ember.Component.extend( mixinUnderTest );
    const subject = testObject.create();

    assert.ok(
        subject
    );
});

test( 'prefix() is called when getComponentClassName() invoked', function( assert ) {
    const testObject = Ember.Component.extend( mixinUnderTest, {
        componentClass: 'test-component'
    });

    const subject = testObject.create();
    const prefixSpy = sinon.spy( prefixModule, 'default' );

    subject.getComponentClassName();

    assert.ok(
        prefixSpy.called,
        'prefix() was called'
    );
});

test( 'Prefixed component class is present in classNames array', function( assert ) {
    const testObject = Ember.Component.extend( mixinUnderTest, {
        componentClass: 'test-component'
    });

    const subject = testObject.create();
    const prefix = prefixModule.default;
    const prefixedComponentClass = prefix( 'test-component' );

    assert.ok(
        subject.get( 'classNames' ).contains( prefixedComponentClass ),
        'Prefixed component class is present in classNames array'
    );
});
