import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        closeModal: function () {
            this.set( 'showModal', false );
        },

        delete: function () {
            console.log( 'Deleting!' );
        },

        edit: function () {
            console.log( 'Editing!' );
        },

        openModal: function () {
            this.set( 'showModal', true );
        },

        pressButton: function () {
            console.log( 'Button pressed!' );
        },

        save: function () {
            console.log( 'Saving!' );
        },

        test: function () {
            console.log( 'Test passed!' );
        }
    },

    badgeValue: Math.round( Math.random() * 100 ),

    calendarData: [
        {
            "publishDate":"Wed, 09 Jul 2014 15:19:32 GMT+0000",
            "title":"Portal Retirement (specific accounts only) - 15:00:00 GMT+00:00",
            "location":"All",
            "service":"Portal",
            "startDate":"Wed, 09 Jul 2014 15:00:00 GMT+0000",
            "endDate":"Wed, 09 Jul 2014 16:00:00 GMT+0000"
        }, {
            "publishDate":"Wed, 02 Jul 2014 17:07:26 GMT+0000",
            "title":"Portal Retirement (specific accounts only) - All - 07\/09\/2014 - 15:00:00 GMT+00:00",
            "description":"",
            "location":"All",
            "service":"Portal",
            "startDate":"Wed, 16 Jul 2014 15:00:00 GMT+0000",
            "endDate":"Wed, 16 Jul 2014 16:00:00 GMT+0000"
        }
    ],

    checkboxStringValue: function () {
        return this.get( 'checkboxValue' ) ? 'true' : 'false';
    }.property( 'checkboxValue' ),

    checkboxValue: false,

    datepickerValue: '07/16/2014',

    dropbuttonOptions: [
        {
            label: 'Save',
            action: 'save'
        }, {
            label: 'Edit',
            action: 'edit'
        }, {
            label: 'Delete',
            action: 'delete'
        }
    ],

    formattedDate: function () {
        return moment( new Date( this.get( 'datepickerValue' ))).format( 'dddd, MMMM Do YYYY' );
    }.property( 'datepickerValue' ),

    gridColumns: [
        {
            title: 'ID',
            key: 'id'
        }, {
            title: 'Color',
            key: 'color'
        }
    ],

    gridRows: [
        {
            id: 1,
            color: 'Red'
        }, {
            id: 2,
            color: 'Green'
        }, {
            id: 3,
            color: 'Blue'
        }
    ],

    init: function () {
        var self = this;

        if ( true ) {
            setTimeout( function () {
                self.set( 'calendarData', [
                    { startDate: new Date( 2014, 6, 4 )},
                    { startDate: new Date( 2014, 6, 5 )}
                ]);
                // self.set( 'datepickerValue', '01/01/2014' );
                // self.set( 'inputValue', 'New input value' );
                // self.set( 'radiogroupValue', 'two' );
                // self.set( 'selectValue', 'three' );
                // self.set( 'textareaValue', 'New textarea value' );
            }, 4000 );
        }

        this._super();
    },

    inputValue: 'test',

    radiogroupOptions: [
        {
            label: 'One',
            value: 'one'
        }, {
            label: 'Two',
            value: 'two'
        }
    ],

    radiogroupValue: 'one',

    radioValue: 'one',

    selectOptions: [
        {
            label: 'First value',
            value: 'one'
        }, {
            label: 'Second value',
            value: 'two'
        }, {
            label: 'Third value',
            value: 'three'
        }
    ],

    selectValue: 'two',

    showModal: false,

    tabPanelContent: [
        {
            name: 'Home',
            template: 'tabs/home'
        }, {
            name: 'Profile',
            template: 'tabs/profile'
        }, {
            name: 'Messages',
            template: 'tabs/messages'
        }
    ],

    textareaValue: 'This is a test.'
});
