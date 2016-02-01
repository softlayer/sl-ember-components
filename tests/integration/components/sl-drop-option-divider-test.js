import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sl-drop-option-divider', 'Integration | Component | sl drop option divider', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sl-drop-option-divider}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sl-drop-option-divider}}
      template block text
    {{/sl-drop-option-divider}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
