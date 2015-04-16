import Ember from 'ember';
/* global alert */

export default Ember.Route.extend({

    model: function() {
        return {
            label: null,
            pages: [
                {
                    label: 'Colors',
                    pages: [
                        {
                            label: 'Red',
                            action() {
                                alert( 'The color RED' );
                            }
                        }, {
                            label: 'Green',
                            action() {
                                alert( 'The color GREEN' );
                            }
                        }, {
                            label: 'Blue',
                            action() {
                                alert( 'The color BLUE' );
                            }
                        }
                    ]
                }, {
                    label: 'Numbers',
                    pages: [
                        {
                            label: '1',
                            action: { actionName: 'number clicked', data: '1' }
                        }, {
                            label: '2',
                            action: { actionName: 'number clicked', data: '2' }
                        }, {
                            label: '3',
                            action: { actionName: 'number clicked', data: '3' }
                        }, {
                            label: '4',
                            action: { actionName: 'number clicked', data: '4' }
                        }, {
                            label: '5',
                            action: { actionName: 'number clicked', data: '5' }
                        }
                    ]
                }, {
                    label: '6-10',
                    pages: [
                        {
                            label: '6',
                            action: { actionName: 'number clicked', data: '6' }
                        }, {
                            label: '7',
                            action: { actionName: 'number clicked', data: '7' }
                        }, {
                            label: '8',
                            action: { actionName: 'number clicked', data: '8' }
                        }, {
                            label: '9',
                            action: { actionName: 'number clicked', data: '9' }
                        }, {
                            label: '10',
                            action: { actionName: 'number clicked', data: '10' }
                        }
                    ]
                }, {
                    label: 'Cities',
                    pages: [
                        {
                            label: 'Texas',
                            pages: [
                                { label: 'Dallas' },
                                { label: 'Houston' },
                                { label: 'San Antonio' },
                                { label: 'Austin' }
                            ]
                        }, {
                            label: 'Oklahoma',
                            pages: [
                                { label: 'Oklahoma City' },
                                { label: 'Norman' }
                            ]
                        }, {
                            label: 'California',
                            pages: [
                                { label: 'Los Angeles' },
                                { label: 'San Francisco' },
                                { label: 'Palo Alto' },
                                {
                                    label: 'Oakland',
                                    link: 'http://www.cnn.com'
                                }
                            ]
                        }
                    ]
                }, {
                    label: 'Routes',
                    pages: [
                        {
                            label: 'Checkbox',
                            route: 'sl-checkbox'
                        }, {
                            label: 'Button',
                            route: 'sl-button'
                        }, {
                            label: 'Calendar',
                            route: 'sl-calendar'
                        }, {
                            label: 'Alert',
                            route: 'sl-alert'
                        }
                    ]
                }
            ]
        };
    }
});
