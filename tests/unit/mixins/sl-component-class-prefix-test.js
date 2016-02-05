import Ember from 'ember';
import mixinUnderTest from 'sl-ember-components/mixins/sl-component-class-prefix';
import { module, test } from 'qunit';
import config from 'ember-get-config';
import classPrefixUtil from 'sl-ember-components/utils/class-prefix';

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

test( 'getComponentClassName() returns correct class', function( assert ) {
    const testObject = Ember.Component.extend( mixinUnderTest, {
        componentClass: 'test-component'
    });

    const subject = testObject.create();
    const classPrefixUtilClass = classPrefixUtil( 'test-component' );

    assert.strictEqual(
        subject.getComponentClassName(),
        classPrefixUtilClass,
        'getComponentClassName() returns correct class'
    );
});

test( 'Component class is present in classNames array', function( assert ) {
    const testObject = Ember.Component.extend( mixinUnderTest, {
        componentClass: 'test-component'
    });

    const subject = testObject.create();
    const prefixedComponentClass = `test-prefix-test-component`;

    assert.strictEqual(
        subject.get( 'classNames' )[1],
        prefixedComponentClass,
        'Prefixed component base class is present in classNames array'
    );
});
