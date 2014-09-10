module.exports = {
  afterInstall: function () {
    var self = this;

    this.addBowerPackageToProject('bootstrap-datepicker')
      .then(function () {
        return self.addBowerPackageToProject('momentjs');
      })
      .then(function () {
        return self.addBowerPackageToProject('fontawesome');
      })
      .then(function () {
        return self.addBowerPackageToProject('highcharts');
      })
      .then(function () {
        return self.addBowerPackageToProject('moment');
      })
      .then(function () {
        return self.addBowerPackageToProject('moment-timezone');
      })
      .then(function () {
        return self.addBowerPackageToProject('select2');
      })
      .then(function () {
        return self.addBowerPackageToProject('typeahead.js');
      });
  },

  normalizeEntityName: function () {}
};
