module.exports = {
    afterInstall: function() {
        return this.addBowerPackageToProject( 'bootstrap-datepicker' )
            .then( function() {
                return this.addBowerPackageToProject( 'fontawesome' );
            })
            .then( function() {
                return this.addBowerPackageToProject( 'highcharts' );
            })
            .then( function() {
                return this.addBowerPackageToProject( 'moment' );
            })
            .then( function() {
                return this.addBowerPackageToProject( 'moment-timezone' );
            })
            .then( function() {
                return this.addBowerPackageToProject( 'select2' );
            })
            .then( function() {
                return this.addBowerPackageToProject( 'typeahead.js' );
            })
            .then( function() {
                return this.addBowerPackageToProject( 'softlayer/sl-bootstrap' );
            });
    },

    normalizeEntityName: function() {}
};
