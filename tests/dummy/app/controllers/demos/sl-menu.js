import Ember from 'ember';
import StreamEnabled from 'ember-stream/mixins/stream-enabled';
import { Direction as MenuDirection } from 'sl-ember-components/components/sl-menu';

export default Ember.Controller.extend( StreamEnabled, {
    actions: {
        doSomething( actionName, data ) {
            console.log( 'Doing', actionName, data );
        }
    },

    initialize: Ember.on(
        'init',
        function() {
            const streamService = this.get( 'streamService' );
            const menuStreamName = this.get( 'menuStreamName' );

            let lastPressedKey;
            window.addEventListener( 'keydown', ( event ) => {
                switch ( event.keyCode ) {
                    case 9: // Tab key
                        streamService.send(
                            menuStreamName,
                            'select',
                            event.shiftKey ?
                                MenuDirection.NEXT :
                                MenuDirection.PREVIOUS
                        );
                        event.preventDefault();
                        break;

                    case 13: // Enter key
                        streamService.send( menuStreamName, 'select', MenuDirection.SUB_MENU );
                        break;

                    case 27: // Escape key
                        streamService.send( menuStreamName, 'hideAll' );
                        break;

                    case 37: // Left arrow key
                        streamService.send( menuStreamName, 'select', MenuDirection.LEFT );
                        event.preventDefault();
                        break;

                    case 38: // Up arrow key
                        streamService.send( menuStreamName, 'select', MenuDirection.UP );
                        event.preventDefault();
                        break;

                    case 39: // Right arrow key
                        streamService.send( menuStreamName, 'select', MenuDirection.RIGHT );
                        event.preventDefault();
                        break;

                    case 40: // Down arrow key
                        streamService.send( menuStreamName, 'select', MenuDirection.DOWN );
                        event.preventDefault();
                        break;

                    case 48: // 0 key
                        streamService.send( menuStreamName, 'showAll' );
                        break;

                    case 49: // 1 key
                    case 50: // 2 key
                    case 51: // 3 key
                    case 52: // 4 key
                    case 53: // 5 key
                    case 54: // 6 key
                    case 55: // 7 key
                    case 56: // 8 key
                    case 57: // 9 key
                        streamService.send( menuStreamName, 'select', event.keyCode - 49 );
                        break;

                    case 189: // - key
                        if ( 189 !== lastPressedKey ) {
                            streamService.send( menuStreamName, 'select', MenuDirection.SUB_MENU );
                        }
                        break;
                }

                lastPressedKey = event.keyCode;
            });
        }
    ),

    menuItems: new Ember.A([
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
    ]),

    menuStreamName: 'demoMenu'

});
