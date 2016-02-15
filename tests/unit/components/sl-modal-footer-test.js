import ClassPrefix from 'sl-ember-components/mixins/class-prefix';
import { moduleForComponent, test } from 'ember-qunit';
import globalLibraries from '../../helpers/sl/synchronous/global-libraries';

moduleForComponent( 'sl-modal-footer', 'Unit | Component | sl modal footer', {
    unit: true
});

test( 'Default property values', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'buttonText' ),
        'Close',
        'Default buttonText is "Close"'
    );

    assert.ok(
        ClassPrefix.detect( this.subject() ),
        'ClassPrefix Mixin is present'
    );
});

test( 'Default property values are set correctly', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'componentClass' ),
        'modal-footer',
        'componentClass is set to modal-footer'
    );
});

test( 'There are no references to Ember.$, $ or jQuery', function( assert ) {
    globalLibraries.setupSpies();

    const component = this.subject();

    this.render();

    globalLibraries.triggerEvents( component );

    assert.notOk(
        globalLibraries.called(),
        'Global libraries are not referenced in component'
    );

    globalLibraries.restoreSpies();
});
