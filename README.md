
Ember CLI version: **0.1.3**

NPM package name: **sl-ember-components**

License: [MIT](LICENSE.md) (though see the "License Warning" section)

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
* sl-span
* sl-tab-panel
* sl-textarea
* sl-tooltip

The *sl-grid system* isn't an Ember Component in the sense that you can use it with the traditional Ember Component syntax in your template, but rather is an offering of components, controllers and partials to provide a fully-featured Grid.  The documentation for this "component" is viewable by launching the demo application bundled with this addon and visiting the */sl-grid* route.


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

Requires either the use of [sl-ember-model](https://github.com/softlayer/sl-ember-model) or the use of a *metaData* property on your Array Controller's model data for the mixin to work correctly.


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

All of this functionality is provided through a combination of leveraging the best-of-breed of other component offerings as well as our own implementations when the existing offerings were deficient.  Existing offerings that were leveraged include:

* [Twitter Bootstrap](http://getbootstrap.com/)
* [Bootstrap-Datepicker](http://bootstrap-datepicker.readthedocs.org/en/release/#)
* [Highcharts](http://www.highcharts.com/)
* [Select2](http://ivaynberg.github.io/select2/)
* [typeahead.js](https://twitter.github.io/typeahead.js/)

## LICENSE WARNING

While this library is MIT licensed not all of the third-party component libraries are.  Specifically, Highcharts is only free for non-commercial use and requires a license for any other use. See
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

[http://softlayer.github.io/sl-ember-components/dist](http://softlayer.github.io/sl-ember-components/dist)

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

## Install this addon as a Node module

```
npm install --save-dev sl-ember-components

```

## Run its blueprint

```
ember generate sl-ember-components

```


## Examples and documentation on how to use each component

Examples and documentation on how to use each component can be viewed at http://softlayer.github.io/sl-ember-components




---

# Versioning
Employs [Semantic Versioning 2.0.0](http://semver.org/)

---

# Contribution
[See CONTRIBUTING.md](CONTRIBUTING.md)

---

# Copyright and License
sl-ember-components and its source files are Copyright © 2014 [SoftLayer Technologies, Inc.](http://www.softlayer.com/)
The software is [MIT Licensed](LICENSE.md)

sl-ember-components leverages several third-party libraries which are not all MIT licensed.  Specifically, Highcharts is only
free for non-commercial use and requires a license for any other use. See
[this FAQ page](http://shop.highsoft.com/faq/non-commercial#what-is-commercial-website) for more information.

Other libraries that are not MIT licensed, though it should not pose a problem, are:

* [Select2](https://github.com/ivaynberg/select2/blob/master/LICENSE)
* [Bootstrap-Datepicker](https://github.com/eternicode/bootstrap-datepicker/blob/release/LICENSE)


---

# Warranty
This software is provided “as is” and without any express or implied warranties, including, without limitation, the
implied warranties of merchantability and fitness for a particular purpose.
