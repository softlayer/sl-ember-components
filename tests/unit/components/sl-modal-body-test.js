import ClassPrefix from 'sl-ember-components/mixins/class-prefix';
import globalLibraries from '../../helpers/sl/synchronous/global-libraries';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-modal-body', 'Unit | Component | sl modal body', {
    unit: true
});

test( 'Expected Mixins are present', function( assert ) {
    assert.ok(
        ClassPrefix.detect( this.subject() ),
        'ClassPrefix Mixin is present'
    );
});

test( 'Default property values are set correctly', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'componentClass' ),
        'modal-body',
        'componentClass is set to modal-body'
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
