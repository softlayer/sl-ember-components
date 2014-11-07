
Ember CLI version: **0.1.2**

NPM package name: **sl-components**

License: [MIT](LICENSE.md) (though see the "License Warning" section)


---

# What sl-components is

A UI components library compatible with Ember.js

Examples and documentation on how to use each component can be viewed at http://softlayer.github.io/sl-components/ which
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
* sl-drop-button
* sl-grid system
* sl-input
* sl-loading-icon
* sl-menu
* sl-pagination-controls
* sl-pagination-info
* sl-pagination-per-page-select
* sl-panel
* sl-progress-bar
* sl-radio
* sl-radio-group
* sl-select
* sl-simple-modal
* sl-span
* sl-tab-panel
* sl-textarea
* sl-tooltip

The *sl-grid system* isn't an Ember Component in the sense that you can use it with the traditional Ember Component syntax in your template, but rather is an offering of components, controllers and partials to provide a full-feature Grid.  The documentation for this "component" is viewable by launching the demo application bundled with this addon and visiting the */sl-grid* route.


**Mixins**

*sl-ajax-aware*

A common use case for this mixin is to initialize particular behaviors during AJAX activity and fall back to other,
default, behaviors when no AJAX activity is ongoing.  This is mixed into the *sl-button* component by default but can be
applied to other situations as needed.


*sl-modal-manager*

Provides an advanced implemention of the modal component.

The documentation is viewable at [addon/mixins/docs/modal.md](addon/mixins/docs/modal.md)


*sl-modal*

Provides an advanced implemention of the modal component.

The documentation is viewable at [addon/mixins/docs/modal.md](addon/mixins/docs/modal.md)


*sl-notify-view*

Use this mixin on a view when you need to notify its controller of any of the following events:

* didInsertElement
* willClearRender
* willDestroyElement
* willInsertElement


*sl-pagination-controller*

Most usually employed by a controller being used to back an implementation of the *sl-grid system*, this mixin should be used whenever pagination support for a data set is desired.

Requires either the use of [sl-model](https://github.com/softlayer/sl-model) or the use of a *metaData* property on your Array Controller's model data for the mixin to work correctly.


**Helpers**

*get-key*

arguments: an object, a key, a default key

The key is resolved on the object, to be returned.  If it is falsy, and a default key is supplied, the default key is
resolved on the object and that result is returned.


*render-component*

arguments: component name, optional bound properties

Render the component referenced by name. Bound properties can be passed to the component in the normal fashion.



**Utility Classes**

*sl-grid-key-adapter*

Provides an abstraction between the events the *sl-grid* component listens for and the ability to associate any keyboard shortcuts in your application to trigger them.

*sl-menu-key-adapter*

Provides an abstraction between the events the *sl-menu* component listens for and the ability to associate any keyboard shortcuts in your application to trigger them.




---

All of this functionality is provided through a combination of leveraging the best-of-breed of other component offerings
as well as our own implementations when the existing offerings were deficient.  Existing offerings that were leveraged
include:

* [Twitter Bootstrap](http://getbootstrap.com/)
* [Bootstrap-Datepicker](http://bootstrap-datepicker.readthedocs.org/en/release/#)
* [Highcharts](http://www.highcharts.com/)
* [Select2](http://ivaynberg.github.io/select2/)
* [typeahead.js](https://twitter.github.io/typeahead.js/)

## LICENSE WARNING

While this library is MIT licensed not all of the third-party component libraries are.  Specifically, Highcharts is only
free for non-commercial use and requires a license for any other use. See
[this FAQ page](http://shop.highsoft.com/faq/non-commercial#what-is-commercial-website) for more information.

Other libraries that are not MIT licensed, though it should not pose a problem, are:

* [Select2](https://github.com/ivaynberg/select2/blob/master/LICENSE)
* [Bootstrap-Datepicker](https://github.com/eternicode/bootstrap-datepicker/blob/release/LICENSE)


---

# Supported browsers

As not all of the components in sl-components are based upon the same third-party libraries it is possible that there is
varying support for browser versions across the different components.

Below is a list of each component's library dependencies. Beneath this list is the supported browsers for said libraries.

* sl-alert
    * Twitter Bootstrap
* sl-button
    * Twitter Bootstrap
* sl-calendar
    * sl-components
* sl-chart
    * Highcharts
* sl-checkbox
    * Twitter Bootstrap
* sl-date-picker
    * Bootstrap-Datepicker
* sl-date-range-picker
    * Bootstrap-Datepicker
* sl-date-time
    * sl-components
* sl-drop-button
    * Twitter Bootstrap
* sl-grid system
    * sl-components
    * [sl-translate](https://github.com/softlayer/sl-translate)
* sl-input
    * Twitter Bootstrap
    * typeahead.js
* sl-loading-icon
    * sl-components
* sl-menu
    * sl-components
* sl-pagination-controls
    * sl-components
* sl-pagination-info
    * sl-components
    * [sl-translate](https://github.com/softlayer/sl-translate)
    * [sl-model](https://github.com/softlayer/sl-model) (optional)
* sl-pagination-per-page-select
    * sl-components
    * [sl-translate](https://github.com/softlayer/sl-translate)
    * Select2
* sl-panel
    * Twitter Bootstrap
* sl-progress-bar
    * sl-components
* sl-radio
    * sl-components
* sl-radio-group
    * Twitter Bootstrap
* sl-select
    * Select2
* sl-simple-modal
    * Twitter Bootstrap
* sl-span
    * sl-components
* sl-tab-panel
    * Twitter Bootstrap
* sl-textarea
    * sl-components
* sl-tooltip
    * Twitter Bootstrap


### Twitter Bootstrap

From http://getbootstrap.com/getting-started/#support

Generally the latest versions of browsers are supported.  On Windows, Internet Explorer 8-11 are supported.

See provided link for most up-to-date information.


### sl-components

Latest versions of browsers plus one version prior.  For version 1.0.0 Internet Explorer 10+ is supported.



### Highcharts

From http://www.highcharts.com/products/highcharts/#compatible

Works in all modern mobile and desktop browsers including the iPhone/iPad and Internet Explorer from version 6. On iOS
and Android, multitouch support provides a seamless user experience. Standard browsers use SVG for the graphics
rendering. In legacy Internet Explorer graphics are drawn using VML.

See provided link for most up-to-date information.


### Bootstrap-Datepicker

From http://bootstrap-datepicker.readthedocs.org/en/release/#

Has a dependency on Twitter Bootstrap so same support previously listed.

See provided link for most up-to-date information.


### typeahead.js

From https://github.com/twitter/typeahead.js

* Chrome
* Firefox 3.5+
* Safari 4+
* Internet Explorer 7+
* Opera 11+
* Not tested on mobile browsers

See provided link for most up-to-date information.


### Select2

From http://ivaynberg.github.io/select2/

* IE 8+
* Chrome 8+
* Firefox 10+
* Safari 3+
* Opera 10.6+

See provided link for most up-to-date information.





---


# Working Demo

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* View the demo at http://localhost:4200

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).


---

# How to use this addon in your application

## Install this addon as a Node module

```
npm install --save sl-components

```

## Run its blueprint

```
ember generate sl-components

```


## Examples and documentation on how to use each component

Examples and documentation on how to use each component can be viewed at http://softlayer.github.io/sl-components/




---

# Versioning
Employs [Semantic Versioning 2.0.0](http://semver.org/)

---

# Contribution
[See CONTRIBUTING.md](CONTRIBUTING.md)

---

# Copyright and License
sl-components and its source files are Copyright © 2014 [SoftLayer Technologies, Inc.](http://www.softlayer.com/)
The software is [MIT Licensed](LICENSE.md)

sl-components leverages several third-party libraries which are not all MIT licensed.  Specifically, Highcharts is only
free for non-commercial use and requires a license for any other use. See
[this FAQ page](http://shop.highsoft.com/faq/non-commercial#what-is-commercial-website) for more information.

Other libraries that are not MIT licensed, though it should not pose a problem, are:

* [Select2](https://github.com/ivaynberg/select2/blob/master/LICENSE)
* [Bootstrap-Datepicker](https://github.com/eternicode/bootstrap-datepicker/blob/release/LICENSE)


---

# Warranty
This software is provided “as is” and without any express or implied warranties, including, without limitation, the
implied warranties of merchantability and fitness for a particular purpose.
