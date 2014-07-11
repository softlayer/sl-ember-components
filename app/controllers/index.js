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
