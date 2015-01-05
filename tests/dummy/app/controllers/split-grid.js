import Ember from 'ember';

export default Ember.ArrayController.extend({

    actions: {

        nextPage: function() {
            if ( !this.get( 'loading' ) ) {
                this.set( 'loading', true );

                var contentLength = this.get( 'content.length' ),
                    start         = contentLength + 1,
                    self          = this,
                    end           = contentLength + 50;

                Ember.$.getJSON( '/fake-records-' + start + '-' + end + '.json', function( data ) {
                    self.pushObjects( data );
                    self.set( 'loading', false );
                });
            }
        }

    },

    columns: [
        {
            primary  : true,
            template : 'split-grid/title-cell',
            title    : 'Title'
        }, {
            size      : 'small',
            title     : 'ID',
            valuePath : 'id'
        }, {
            size      : 300,
            title     : 'Reporter',
            valuePath : 'fullName'
        }, {
            align    : 'right',
            size     : 100,
            template : 'split-grid/number-cell',
            title    : 'Number'
        }
    ],

    gridRowActions: [
        {
            action : 'alertRecord',
            label  : 'Alert'
        }, {
            action : 'logRecord',
            label  : 'Log'
        }
    ],

    loading: false,

    totalCount: 150

});
