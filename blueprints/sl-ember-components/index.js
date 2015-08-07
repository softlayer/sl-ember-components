module.exports = {
    afterInstall: function() {
        return this.addBowerPackagesToProject([
            {
                name: 'bootstrap-datepicker',
                target: '~1.3.0'
            }, {
                name: 'fontawesome',
                target: '~4.3.0'
            }, {
                name: 'highcharts',
                target: '~4.1.5'
            }, {
                name: 'moment',
                target: '~2.10.3'
            }, {
                name: 'moment-timezone',
                target: '~0.4.0'
            }, {
                name: 'rxjs',
                target: '~2.5.2'
            }, {
                name: 'select2',
                target: '~3.5.2'
            }, {
                name: 'typeahead.js',
                target: '~0.11.1'
            }, {
                name: 'softlayer/sl-bootstrap',
                target: '1.1.0'
            }, {
                name: 'jquery-mousewheel',
                target: '^3.1.12'
            }
        ]);
    },

    normalizeEntityName: function() {}
};
