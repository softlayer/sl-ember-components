/* globals blanket, module */

var options = {
  modulePrefix: 'sl-ember-components',
  filter: '//.*sl-ember-components/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [],
  enableCoverage: true,
  modulePattern: "\/(\\w+)",
  branchTracking: true,
  cliOptions: {
    reporters: ['json'],
    autostart: true
  }
};
if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
