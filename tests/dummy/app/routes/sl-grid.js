import Ember from 'ember';
/* global moment */

export default Ember.Route.extend({
    store: Ember.Object.create({
        find: function(){
            var promise = new Ember.RSVP.Promise(function( resolve ){
                Ember.run.later(this, function(){
                    resolve([
                        {
                            id: 1,
                            type: 'server',
                            name: 'test.server.com',
                            ip: '192.168.1.1',
                            provisionDate: moment('2014-09-12')
                        },
                        {
                            id: 2,
                            type: 'firewall',
                            name: 'fw.server.com',
                            ip: '192.168.1.21',
                            provisionDate: moment('2013-03-16')
                        },
                        {
                            id: 3,
                            type: 'server',
                            name: 'test2.server.com',
                            ip: '192.168.1.41',
                            provisionDate: moment('2014-09-01')
                        },
                        {
                            id: 4,
                            type: 'server',
                            ip: '192.168.1.13',
                            provisionDate: moment('2014-09-12')
                        },
                        {
                            id: 5,
                            type: 'loadBalancer',
                            name: 'test11.server.com',
                            ip: '192.168.1.1',
                            provisionDate: moment('2013-05-22')
                        },
                        {
                            id: 6,
                            type: 'server',
                            name: 'test32.server.com',
                            ip: '192.168.1.131',
                            provisionDate: moment('2011-02-15')
                        },
                        {
                            id: 7,
                            type: 'server',
                            name: 'test12.server.com',
                            ip: '192.168.1.211',
                            provisionDate: moment('2014-09-12')
                        },
                    ]);
                }, 1000);
            }),
            devices = Ember.ArrayProxy.createWithMixins( Ember.PromiseProxyMixin );

            devices.set( 'promise', promise );

            return devices;
        },
        metadataFor: function(){
            return {
                totalCount: 7,
                totalPages: 1
            };
        }
    }),
    model: function () {
        return this.store.find( 'devices' );
    },
    setupController: function( controller, model ){
        this._super( controller, model );
        controller.set( 'store', this.store );
    },
    renderTemplate: function(){
        this.render( 'sl-grid-demo' );
    }
});