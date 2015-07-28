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

            // Use Rx.Observable here, as we don't need to register the stream
            const keydownStream = streamService.Rx.Observable.create( ( observer ) => {
                window.addEventListener( 'keydown', ( event ) => {
                    observer.onNext( event );
                    lastPressedKey = event.keyCode;
                });
            });

            const hideAllMenusStream = keydownStream
                .filter( event => 27 === event.keyCode ); // 27 = Esc

            const selectStream = keydownStream
                .filter( event => event.keyCode > 48 && event.keyCode < 58 )
                .map( event => event.keyCode - 49 );

            const selectDownStream = keydownStream
                .filter( event => 40 === event.keyCode ); // 40 = down arrow
            selectDownStream.subscribe( event => event.preventDefault() );

            const selectLeftStream = keydownStream
                .filter( event => 37 === event.keyCode ); // 37 = left arrow
            selectLeftStream.subscribe( event => event.preventDefault() );

            // 9 = tab key
            const selectNextStream = keydownStream
                .filter( event => 9 === event.keyCode && !event.shiftKey );
            selectNextStream.subscribe( event => event.preventDefault() );

            const selectPreviousStream = keydownStream
                .filter( event => 9 === event.keyCode && event.shiftKey );
            selectPreviousStream.subscribe( event => event.preventDefault() );

            const selectRightStream = keydownStream
                .filter( event => 39 === event.keyCode ); // 39 = right arrow
            selectRightStream.subscribe( event => event.preventDefault() );

            const selectSubMenuStream = keydownStream
                .filter( event => 13 === event.keyCode || // 13 = enter key
                    189 === event.keyCode && // 189 = '-' key
                    189 !== lastPressedKey
                );

            const selectUpStream = keydownStream
                .filter( event => 38 === event.keyCode ); // 38 = up arrow
            selectUpStream.subscribe( event => event.preventDefault() );

            const showAllStream = keydownStream
                .filter( event => 48 === event.keyCode ); // 48 = 0 key

            streamService.register({
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
