import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        doSomething( actionName, data ) {
            console.log( 'Doing', actionName, data );
        }
    },

    menuItems: Ember.A([
        {
            label: 'Main One',
            items: [
                {
                    label: 'Sub One | One',
                    action: 'say',
                    data: '"hello"'
                }, {
                    label: 'Sub One | Two',
                    items: [
                        {
                            label: 'Sub One | Two | One'
                        }, {
                            label: 'Sub One | Two | Two'
                        }
                    ]
                }
            ]
        }, {
            label: 'Main Two'
        }, {
            label: 'Main Three'
        }
    ])
});
