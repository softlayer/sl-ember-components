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

    advancedSelectOptions: [
        {
            label: 'First value',
            description: 'The first advanced value',
            value: 'one'
        }, {
            label: 'Second value',
            description: 'The second advanced value',
            value: 'two'
        }, {
            label: 'Third value',
            description: 'The third advanced value',
            value: 'three'
        }
    ],

    advancedSelectValue: 'two',

    badgeValue: Math.round( Math.random() * 100 ),

    checkboxStringValue: function () {
        return this.get( 'checkboxValue' ) ? 'true' : 'false';
    }.property( 'checkboxValue' ),

    checkboxValue: false,

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

        if ( false ) {
            setTimeout( function () {
                // self.set( 'inputValue', 'New input value' );
                // self.set( 'radiogroupValue', 'two' );
                self.set( 'simpleSelectValue', 25 );
                self.set( 'advancedSelectValue', 'three' );
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

    simpleSelectOptions: [ 25, 50, 75, 100 ],

    simpleSelectValue: 50,

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
