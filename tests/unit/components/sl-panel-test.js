import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-panel', 'Unit | Component | sl panel', {
    unit: true
});

test( 'Valid heading value renders panel-heading', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'heading' ),
        null,
        'Default heading value is null'
    );

    assert.strictEqual(
        component.get( 'loading' ),
        false,
        'Default loading value is null'
    );
});
