import Ember from 'ember';

export default Ember.Route.extend({

    model: function() {
        return  Ember.Object.create({ label: null, pages: Ember.A([
            Ember.Object.create({ label: 'Colors', pages: Ember.A([
                Ember.Object.create({ label: 'Red', emberAction: function() { alert( 'The color RED' ); }}),
                Ember.Object.create({ label: 'Green', emberAction: function() { alert( 'The color GREEN' ); }}),
                Ember.Object.create({ label: 'Blue', emberAction: function() { alert( 'The color BLUE' ); }})
            ])}),
            Ember.Object.create({ label: 'Numbers', pages: Ember.A([
                Ember.Object.create({ label: '1-5', pages: Ember.A([
                    Ember.Object.create({ label: '1', emberAction: { actionName: 'number clicked', data: '1' }}),
                    Ember.Object.create({ label: '2', emberAction: { actionName: 'number clicked', data: '2' }}),
                    Ember.Object.create({ label: '3', emberAction: { actionName: 'number clicked', data: '3' }}),
                    Ember.Object.create({ label: '4', emberAction: { actionName: 'number clicked', data: '4' }}),
                    Ember.Object.create({ label: '5', emberAction: { actionName: 'number clicked', data: '5' }}),
                ])}),
                Ember.Object.create({ label: '6-10', pages: Ember.A([
                    Ember.Object.create({ label: '6', emberAction: { actionName: 'number clicked', data: '6' }}),
                    Ember.Object.create({ label: '7', emberAction: { actionName: 'number clicked', data: '7' }}),
                    Ember.Object.create({ label: '8', emberAction: { actionName: 'number clicked', data: '8' }}),
                    Ember.Object.create({ label: '9', emberAction: { actionName: 'number clicked', data: '9' }}),
                    Ember.Object.create({ label: '10', emberAction: { actionName: 'number clicked', data: '10' }}),
                ])}),
            ])}),
            Ember.Object.create({ label: 'Cities', pages: Ember.A([
                Ember.Object.create({ label: 'Texas', pages: Ember.A([
                    Ember.Object.create({ label: 'Dallas' }),
                    Ember.Object.create({ label: 'Houston' }),
                    Ember.Object.create({ label: 'San Antonio' }),
                    Ember.Object.create({ label: 'Austin' })
                ])}),
                Ember.Object.create({ label: 'Oklahoma', pages: Ember.A([
                    Ember.Object.create({ label: 'Oklahoma City' }),
                    Ember.Object.create({ label: 'Norman' })
                ])}),
                Ember.Object.create({ label: 'California', pages: Ember.A([
                    Ember.Object.create({ label: 'Los Angeles' }),
                    Ember.Object.create({ label: 'San Francisco' }),
                    Ember.Object.create({ label: 'Palo Alto' }),
                    Ember.Object.create({ label: 'Oakland' })
                ])})
            ])}),
            Ember.Object.create({ label: 'Routes', pages: Ember.A([
                Ember.Object.create({ label: 'Checkbox', emberRoute: 'demos/checkbox' }),
                Ember.Object.create({ label: 'Button', emberRoute: 'demos/button' }),
                Ember.Object.create({ label: 'Calendar', emberRoute: 'demos/calendar' }),
                Ember.Object.create({ label: 'Alert', emberRoute: 'demos/alert' })
            ])})
        ])});
    }
});
