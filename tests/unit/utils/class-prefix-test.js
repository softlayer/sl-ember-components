import prefix from 'sl-ember-components/utils/class-prefix';
import { module, test } from 'qunit';
import config from 'ember-get-config';

module( 'Unit | Utility | class-prefix' );

test( 'prefix() returns a correctly structured prefixed component class name', function( assert ) {
    config.componentClassPrefix = 'test-prefix';

    assert.strictEqual(
        prefix( 'test-component' ),
        'test-prefix-test-component',
        'prefix returns a correctly structured prefixed component class name'
    );
});
