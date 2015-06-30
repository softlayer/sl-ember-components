
[![Latest Release](https://img.shields.io/github/release/softlayer/sl-ember-components.svg)](https://github.com/softlayer/sl-ember-components/releases) ![Ember CLI version](https://img.shields.io/badge/ember%20cli-0.2.7-orange.svg) [![License](https://img.shields.io/npm/l/sl-ember-components.svg)](LICENSE.md) [![Downloads](https://img.shields.io/npm/dm/sl-ember-components.svg)](https://www.npmjs.com/package/sl-ember-components)

[![Dependencies](https://img.shields.io/david/softlayer/sl-ember-components.svg)](https://david-dm.org/softlayer/sl-ember-components) [![Dev Dependencies](https://img.shields.io/david/dev/softlayer/sl-ember-components.svg)](https://david-dm.org/softlayer/sl-ember-components#info=devDependencies)

[![Build Status](https://img.shields.io/travis/softlayer/sl-ember-components/develop.svg)](https://travis-ci.org/softlayer/sl-ember-components) [![Code Climate](https://img.shields.io/codeclimate/github/softlayer/sl-ember-components.svg)](https://codeclimate.com/github/softlayer/sl-ember-components)

To see which issues are currently being worked on or are scheduled to be worked on next, visit [https://huboard.com/softlayer/sl-ember-components/#/](https://huboard.com/softlayer/sl-ember-components/#/)

---

### Is currently in BETA

---

# What sl-ember-components is

A UI components library compatible with Ember.js

Examples and documentation on how to use each component can be viewed at http://softlayer.github.io/sl-ember-components/ which
is served from the *gh-pages* branch of this repository.

**Components**

* sl-alert
* sl-button
* sl-calendar
* sl-chart (only free for non-commercial use without a [Highcharts](http://shop.highsoft.com/faq/non-commercial#what-is-commercial-website) license)
* sl-checkbox
* sl-date-picker
* sl-date-range-picker
* sl-date-time
* sl-dialog
* sl-drop-button
* sl-grid
* sl-input
* sl-loading-icon
* sl-menu
* sl-modal
* sl-pagination-controls
* sl-pagination-info
* sl-pagination-per-page-select
* sl-panel
* sl-progress-bar
* sl-radio
* sl-radio-group
* sl-select
* sl-span
* sl-tab-panel
* sl-textarea
* sl-tooltip


**Mixins**

*sl-notify-view*

Use this mixin on a view when you need to notify its controller of any of the following events:

* didInsertElement
* willClearRender
* willDestroyElement
* willInsertElement

*sl-pagination-controller*

Most usually employed by a controller being used to back an implementation of the *sl-grid system*, this mixin should be used whenever pagination support for a data set is desired.

Requires either the use of [sl-ember-store](https://github.com/softlayer/sl-ember-store) or the use of a *metaData* property on your Array Controller's model data for the mixin to work correctly.


**Helpers**

*render-component*

arguments: component name, optional bound properties

Render the component referenced by name. Bound properties can be passed to the component in the normal fashion.



**Utility Classes**

*sl-menu-key-adapter*

Provides an abstraction between the events the *sl-menu* component listens for and the ability to associate any keyboard shortcuts in your application to trigger them.


---

All of this functionality is provided through a combination of leveraging the best-of-breed of other component offerings as well as our own implementations when the existing offerings were deficient. Existing offerings that were leveraged include:

* [Twitter Bootstrap](http://getbootstrap.com/)
* [Bootstrap-Datepicker](http://bootstrap-datepicker.readthedocs.org/en/release/#)
* [Highcharts](http://www.highcharts.com/)
* [Select2](http://ivaynberg.github.io/select2/)
* [typeahead.js](https://twitter.github.io/typeahead.js/)

## LICENSE WARNING

While this library is MIT licensed not all of the third-party component libraries are. Specifically, Highcharts is only free for non-commercial use and requires a license for any other use. See
[this FAQ page](http://shop.highsoft.com/faq/non-commercial#what-is-commercial-website) for more information.

Other libraries that are not MIT licensed, though it should not pose a problem, are:

* [Select2](https://github.com/ivaynberg/select2/blob/master/LICENSE)
* [Bootstrap-Datepicker](https://github.com/eternicode/bootstrap-datepicker/blob/release/LICENSE)


---

# Supported browsers

See [http://softlayer.github.io/sl-ember-components/browsers.html](http://softlayer.github.io/sl-ember-components/browsers.html)


---


# Demo

## Live

[http://softlayer.github.io/sl-ember-components/#/demos](http://softlayer.github.io/sl-ember-components/#/demos)

## Development Environment

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* View the demo at http://localhost:4200

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).


---

# How to use this addon in your application

    ember install sl-ember-components
    npm install --save-dev ember-cli-less

Modify `Brocfile.js` file to add:

```
app.import({
    development : 'bower_components/bootstrap/dist/js/bootstrap.js',
    production  : 'bower_components/bootstrap/dist/js/bootstrap.min.js'
});
```

Create `app/styles/app.less` file. Then add to it:

```
@import 'sl-ember-components';
```



## Examples and documentation on how to use each component

Examples and documentation on how to use each component can be viewed at http://softlayer.github.io/sl-ember-components




---

# Versioning
Employs [Semantic Versioning 2.0.0](http://semver.org/)

---

# Contribution
[See CONTRIBUTING.md](https://github.com/softlayer/sl-ember-components/blob/master/CONTRIBUTING.md)

---

# Copyright and License
sl-ember-components and its source files are Copyright © 2014-2015 [SoftLayer Technologies, Inc.](http://www.softlayer.com/)
The software is [MIT Licensed](https://github.com/softlayer/sl-ember-components/blob/master/LICENSE.md)

sl-ember-components leverages several third-party libraries which are not all MIT licensed. Specifically, Highcharts is only
free for non-commercial use and requires a license for any other use. See
[this FAQ page](http://shop.highsoft.com/faq/non-commercial#what-is-commercial-website) for more information.

Other libraries that are not MIT licensed, though it should not pose a problem, are:

* [Select2](https://github.com/ivaynberg/select2/blob/master/LICENSE)
* [Bootstrap-Datepicker](https://github.com/eternicode/bootstrap-datepicker/blob/release/LICENSE)


---

# Warranty
This software is provided “as is” and without any express or implied warranties, including, without limitation, the
implied warranties of merchantability and fitness for a particular purpose.
