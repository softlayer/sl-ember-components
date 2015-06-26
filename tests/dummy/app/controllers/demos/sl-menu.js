import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        doSomething( actionName, data ) {
            console.log( 'Doing', actionName, data );
        }
    },

    eventService: Ember.inject.service( 'sl-event' ),

    initialize: Ember.on(
        'init',
        function() {
            let lastPressedKey;

            window.addEventListener( 'keydown', ( event ) => {
                let eventService = this.get( 'eventService' );

                switch ( event.keyCode ) {
                    case 9: // Tab key
                        event.preventDefault();
                        eventService.trigger(
                            event.shiftKey ?
                                'demoMenu.previous' :
                                'demoMenu.next'
                        );
                        break;

                    case 13: // Enter key
                        eventService.trigger( 'demoMenu.subMenu' );
                        break;

                    case 27: // Escape key
                        eventService.trigger( 'hideAllMenus' );
                        break;

                    case 37: // Left arrow key
                        event.preventDefault();
                        eventService.trigger( 'demoMenu.left' );
                        break;

                    case 38: // Up arrow key
                        event.preventDefault();
                        eventService.trigger( 'demoMenu.up' );
                        break;

                    case 39: // Right arrow key
                        event.preventDefault();
                        eventService.trigger( 'demoMenu.right' );
                        break;

                    case 40: // Down arrow key
                        event.preventDefault();
                        eventService.trigger( 'demoMenu.down' );
                        break;

                    case 48: // 0 key
                        eventService.trigger( 'demoMenu.showAll' );
                        break;

                    case 49: // 1 key
                        eventService.trigger( 'demoMenu.select', 0 );
                        break;

                    case 50: // 2 key
                        eventService.trigger( 'demoMenu.select', 1 );
                        break;

                    case 51: // 3 key
                        eventService.trigger( 'demoMenu.select', 2 );
                        break;

                    case 52: // 4 key
                        eventService.trigger( 'demoMenu.select', 3 );
                        break;

                    case 53: // 5 key
                        eventService.trigger( 'demoMenu.select', 4 );
                        break;

                    case 54: // 6 key
                        eventService.trigger( 'demoMenu.select', 5 );
                        break;

                    case 55: // 7 key
                        eventService.trigger( 'demoMenu.select', 6 );
                        break;

                    case 56: // 8 key
                        eventService.trigger( 'demoMenu.select', 7 );
                        break;

                    case 57: // 9 key
                        eventService.trigger( 'demoMenu.select', 8 );
                        break;

                    case 189: // - key
                        if ( lastPressedKey !== 189 ) {
                            eventService.trigger( 'demoMenu.subMenu' );
                        }
                        break;
                }

                lastPressedKey = event.keyCode;
            });
        }
    ),

    menuEvents: {
        'hideAll': 'hideAllMenus',
        'select': 'demoMenu.select',
        'selectDown': 'demoMenu.down',
        'selectLeft': 'demoMenu.left',
        'selectNext': 'demoMenu.next',
        'selectPrevious': 'demoMenu.previous',
        'selectRight': 'demoMenu.right',
        'selectSubMenu': 'demoMenu.subMenu',
        'selectUp': 'demoMenu.up',
        'showAll': 'demoMenu.showAll'
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
