import Ember from 'ember';
/* global alert */

export default Ember.Route.extend({

    model: function() {
        return  Ember.Object.create({ label: null, pages: [
            Ember.Object.create({ label: 'Colors', pages: [
                Ember.Object.create({ label: 'Red', action: function() { alert( 'The color RED' ); }}),
                Ember.Object.create({ label: 'Green', action: function() { alert( 'The color GREEN' ); }}),
                Ember.Object.create({ label: 'Blue', action: function() { alert( 'The color BLUE' ); }})
            ]}),
            Ember.Object.create({ label: 'Numbers', pages: [
                Ember.Object.create({ label: '1-5', pages: [
                    Ember.Object.create({ label: '1', action: { actionName: 'number clicked', data: '1' }}),
                    Ember.Object.create({ label: '2', action: { actionName: 'number clicked', data: '2' }}),
                    Ember.Object.create({ label: '3', action: { actionName: 'number clicked', data: '3' }}),
                    Ember.Object.create({ label: '4', action: { actionName: 'number clicked', data: '4' }}),
                    Ember.Object.create({ label: '5', action: { actionName: 'number clicked', data: '5' }}),
                ]}),
                Ember.Object.create({ label: '6-10', pages: [
                    Ember.Object.create({ label: '6', action: { actionName: 'number clicked', data: '6' }}),
                    Ember.Object.create({ label: '7', action: { actionName: 'number clicked', data: '7' }}),
                    Ember.Object.create({ label: '8', action: { actionName: 'number clicked', data: '8' }}),
                    Ember.Object.create({ label: '9', action: { actionName: 'number clicked', data: '9' }}),
                    Ember.Object.create({ label: '10', action: { actionName: 'number clicked', data: '10' }}),
                ]}),
            ]}),
            Ember.Object.create({ label: 'Cities', pages: [
                Ember.Object.create({ label: 'Texas', pages: [
                    Ember.Object.create({ label: 'Dallas' }),
                    Ember.Object.create({ label: 'Houston' }),
                    Ember.Object.create({ label: 'San Antonio' }),
                    Ember.Object.create({ label: 'Austin' })
                ]}),
                Ember.Object.create({ label: 'Oklahoma', pages: [
                    Ember.Object.create({ label: 'Oklahoma City' }),
                    Ember.Object.create({ label: 'Norman' })
                ]}),
                Ember.Object.create({ label: 'California', pages: [
                    Ember.Object.create({ label: 'Los Angeles' }),
                    Ember.Object.create({ label: 'San Francisco' }),
                    Ember.Object.create({ label: 'Palo Alto' })
                ]})
            ]}),
            Ember.Object.create({ label: 'Routes', pages: [
                Ember.Object.create({ label: 'Checkbox', route: 'sl-checkbox' }),
                Ember.Object.create({ label: 'Button', route: 'sl-button' }),
                Ember.Object.create({ label: 'Calendar', route: 'sl-calendar' }),
                Ember.Object.create({ label: 'Alert', route: 'sl-alert' })
            ]})
        ]});
    }
});
