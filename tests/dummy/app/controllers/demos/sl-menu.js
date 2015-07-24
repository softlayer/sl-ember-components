import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        doSomething( actionName, data ) {
            console.log( 'Doing', actionName, data );
        }
    },

    streamService: Ember.inject.service( 'stream' ),

    initialize: Ember.on(
        'init',
        function() {
            const streamService = this.get( 'streamService' );
            let lastPressedKey;

            const keydownStream = streamService.createStream( ( observer ) => {
                window.addEventListener( 'keydown', ( event ) => {
                    observer.onNext( event );
                    lastPressedKey = event.keyCode;
                });
            });

            const hideAllMenusStream = keydownStream
                .filter( event => event.keyCode === 27 ); // 27 = Esc

            const selectStream = keydownStream
                .filter( event => event.keyCode > 48 && event.keyCode < 58 )
                .map( event => event.keyCode - 49 );

            const selectDownStream = keydownStream
                .filter( event => event.keyCode === 40 ); // 40 = down arrow
            selectDownStream.subscribe( event => event.preventDefault() );

            const selectLeftStream = keydownStream
                .filter( event => event.keyCode === 37 ); // 37 = left arrow
            selectLeftStream.subscribe( event => event.preventDefault() );

            // 9 = tab key
            const selectNextStream = keydownStream
                .filter( event => event.keyCode === 9 && !event.shiftKey );
            selectNextStream.subscribe( event => event.preventDefault() );

            const selectPreviousStream = keydownStream
                .filter( event => event.keyCode === 9 && event.shiftKey );
            selectPreviousStream.subscribe( event => event.preventDefault() );

            const selectRightStream = keydownStream
                .filter( event => event.keyCode === 39 ); // 39 = right arrow
            selectRightStream.subscribe( event => event.preventDefault() );

            const selectSubMenuStream = keydownStream
                .filter( event => (
                    event.keyCode === 13 || // 13 = enter key
                    event.keyCode === 189 && // 189 = '-' key
                    lastPressedKey !== 189
                ));

            const selectUpStream = keydownStream
                .filter( event => event.keyCode === 38 ); // 38 = up arrow
            selectUpStream.subscribe( event => event.preventDefault() );

            const showAllStream = keydownStream
                .filter( event => event.keyCode === 48 ); // 48 = 0 key

            streamService.registerStreams({
                'hideAllMenus': hideAllMenusStream,
                'demoMenu.select': selectStream,
                'demoMenu.down': selectDownStream,
                'demoMenu.left': selectLeftStream,
                'demoMenu.next': selectNextStream,
                'demoMenu.previous': selectPreviousStream,
                'demoMenu.right': selectRightStream,
                'demoMenu.subMenu': selectSubMenuStream,
                'demoMenu.up': selectUpStream,
                'demoMenu.showAll': showAllStream
            });
        }
    ),

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
    ]),

    menuStreams: {
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
    }
});
