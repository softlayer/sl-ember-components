import Ember from 'ember';

export default Ember.Controller.extend({
    translations: {
        displaying: 'PAGINATION_DISPLAYING',
        label: 'DEVICE_LIST_PAGINATION_LABEL',
        perPage: 'DEVICE_LIST_PAGINATION_PER_PAGE'
    },

    pagingData: {
        perPageOptions: [ 25, 50, 100 ],
        itemCountPerPage: 25,
        pageFirstRow: 1,
        pageLastRow: 2,
        totalRows: 125,
        modelNames: 'Items'
    }
});
