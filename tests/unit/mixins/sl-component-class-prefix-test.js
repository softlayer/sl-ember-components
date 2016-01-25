import Ember from 'ember';
import mixinUnderTest from 'sl-ember-components/mixins/sl-component-class-prefix';
import { module, test } from 'qunit';
import config from 'ember-get-config';

module( 'Unit | Mixin | sl component class prefix' );

test( 'Can be successfully mixed', function( assert ) {
    const testObject = Ember.Component.extend( mixinUnderTest );
    const subject = testObject.create();

    assert.ok(
        subject
    );
});

test( 'getComponentClassName() returns correct class', function( assert ) {
    const prefix =  config.componentClassPrefix;
    config.componentClassPrefix = 'test-prefix';

    const testObject = Ember.Component.extend( mixinUnderTest, {
        componentClass: 'test-component'
    });

    const subject = testObject.create();
    const prefixedComponentClass = `${config.componentClassPrefix}-test-component`;

    assert.equal(
        subject.getComponentClassName(),
        prefixedComponentClass
    );

    //restore prefix to prevent pollution of global config
    config.componentClassPrefix = prefix;
});

test( 'Component class is present in classNames array', function( assert ) {
    const prefix =  config.componentClassPrefix;
    config.componentClassPrefix = 'test-prefix';

    const testObject = Ember.Component.extend( mixinUnderTest, {
        componentClass: 'test-component'
    });

    const subject = testObject.create();
    const prefixedComponentClass = `${config.componentClassPrefix}-test-component`;

    assert.ok(
        subject.classNames.contains( prefixedComponentClass )
    );

    //restore prefix to prevent pollution of global config
    config.componentClassPrefix = prefix;
});
