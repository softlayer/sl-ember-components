module.exports = {
    afterInstall: function() {
        var self = this;

        return this.addBowerPackageToProject( 'bootstrap-datepicker', '~1.3.0' )
            .then( function() {
                return self.addBowerPackageToProject( 'fontawesome', '~4.2.0' );
            })
            .then( function() {
                return self.addBowerPackageToProject( 'highcharts', '~4.0.4' );
            })
            .then( function() {
                return self.addBowerPackageToProject( 'moment', '~2.8.4' );
            })
            .then( function() {
                return self.addBowerPackageToProject( 'moment-timezone', '~0.2.5' );
            })
            .then( function() {
                return self.addBowerPackageToProject( 'select2', '~3.5.2' );
            })
            .then( function() {
                return self.addBowerPackageToProject( 'typeahead.js', '~0.10.5' );
            })
            .then( function() {
                return self.addBowerPackageToProject( 'softlayer/sl-bootstrap', '1.1.0' );
            });
    },

    normalizeEntityName: function() {}
};
