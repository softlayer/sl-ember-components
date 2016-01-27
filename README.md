
[![Latest Release](https://img.shields.io/github/release/softlayer/sl-ember-components.svg)](https://github.com/softlayer/sl-ember-components/releases) ![Ember CLI version](https://img.shields.io/badge/ember%20cli-1.13.8-blue.svg) [![License](https://img.shields.io/npm/l/sl-ember-components.svg)](LICENSE.md) [![Downloads](https://img.shields.io/npm/dm/sl-ember-components.svg)](https://www.npmjs.com/package/sl-ember-components)

[![Dependencies](https://img.shields.io/david/softlayer/sl-ember-components.svg)](https://david-dm.org/softlayer/sl-ember-components) [![Dev Dependencies](https://img.shields.io/david/dev/softlayer/sl-ember-components.svg)](https://david-dm.org/softlayer/sl-ember-components#info=devDependencies)

[![Build Status](https://img.shields.io/travis/softlayer/sl-ember-components/master.svg)](https://travis-ci.org/softlayer/sl-ember-components) [![Code Climate](https://img.shields.io/codeclimate/github/softlayer/sl-ember-components.svg)](https://codeclimate.com/github/softlayer/sl-ember-components) [![Ember Observer](http://emberobserver.com/badges/sl-ember-components.svg)](http://emberobserver.com/addons/sl-ember-components) [![Inch CI](http://inch-ci.org/github/softlayer/sl-ember-components.svg?branch=master)](http://inch-ci.org/github/softlayer/sl-ember-components) [![Join the chat at https://gitter.im/softlayer/sl-ember-components](https://badges.gitter.im/softlayer/sl-ember-components.svg)](https://gitter.im/softlayer/sl-ember-components?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

We use [https://waffle.io/softlayer/sl-ember-components](https://waffle.io/softlayer/sl-ember-components) to work our issues.

[![Stories in Ready](https://badge.waffle.io/softlayer/sl-ember-components.png?label=ready&title=Ready)](https://waffle.io/softlayer/sl-ember-components) [![Stories in In Progress](https://badge.waffle.io/softlayer/sl-ember-components.png?label=in%20progress&title=In%20Progress)](https://waffle.io/softlayer/sl-ember-components) [![Stories in Ready For Review](https://badge.waffle.io/softlayer/sl-ember-components.png?label=ready%20for%20review&title=Ready%20For%20Review)](https://waffle.io/softlayer/sl-ember-components) [![Stories in In Review](https://badge.waffle.io/softlayer/sl-ember-components.png?label=in%20review&title=In%20Review)](https://waffle.io/softlayer/sl-ember-components)

[![Throughput Graph](https://graphs.waffle.io/softlayer/sl-ember-components/throughput.svg)](https://waffle.io/softlayer/sl-ember-components/metrics)



# What sl-ember-components is

An [Ember CLI Addon](http://ember-cli.com) that provides UI components compatible with
[Ember.js](http://www.emberjs.com) and [Twitter Bootstrap](http://www.getbootstrap.com).

**This addon is currently BETA.** View the [Roadmap](https://github.com/softlayer/sl-ember-components/wiki/Roadmap) we're following for a 1.0.0+ release.

Examples and documentation on how to use each component can be viewed at http://softlayer.github.io/sl-ember-components/ which
is served from the *gh-pages* branch of this repository.


**Components provided**

* sl-alert
* sl-button
* sl-calendar
* sl-chart (only free for non-commercial use without a [Highcharts](http://shop.highsoft.com/faq/non-commercial#what-is-commercial-website) license)
* sl-checkbox
* sl-date-picker
* sl-date-range-picker
* sl-date-time
* sl-drop-button
* sl-grid
* sl-input
* sl-loading-icon
* sl-menu
* sl-modal
* sl-pagination
* sl-panel
* sl-progress-bar
* sl-radio
* sl-radio-group
* sl-select
* sl-span
* sl-tab-panel
* sl-textarea
* sl-tooltip


**Mixins provided**

*sl-component-input-id*

Provides unique id that a component can assign to an input and a label's "for" attribute.


*sl-input-based*

Provides state properties for input element based components.


*sl-namespace*

Namespace component events by `elementId`


*sl-tooltip-enabled*

Provides Bootstrap tooltip functionality bindings, for both popovers and plain tooltips.


**Utility Classes provided**

*containsValue*

Check whether a value is a valid value in object.


*warn*

Check whether a value is a valid value in object.

Provides a mechanism for initiating `console.warn()`s

*error*

Provides a way for individual components to throw errors that are able to be recognized by methods inside of a consuming application's `Ember.onerror()` function. For more details reference the [Error Handling](#error-handling) section below.


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

* [Bootstrap-Datepicker](https://github.com/eternicode/bootstrap-datepicker/blob/release/LICENSE)




# Supported browsers

See [http://softlayer.github.io/sl-ember-components/browsers.html](http://softlayer.github.io/sl-ember-components/browsers.html)





# Demo

## Live

[http://softlayer.github.io/sl-ember-components/#/demos](http://softlayer.github.io/sl-ember-components/#/demos)

## Development Environment

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember serve`
* View the demo at *http://localhost:4200*

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

### Documentation

* `ember ember-cli-jsoc` or `npm run docs` (shortcut setup in this repo)
* Visit *http://localhost:4200/docs*




# How to use this addon in your application

## Installation

    ember install sl-ember-components

## Error Handling ##

The components in sl-ember-components will throw errors if the components are used incorrectly. For example, the `sl-radio-group` component requires that a `name` property be passed with the component. If one is not passed an error will be thrown with the name of the component that is throwing the error (sl-radio-group) and the message saying "The name property must be set".

If you wish to capture these errors and pass them along to your error logging application you can do so by adding the following lines to your application's `app/app.js` file:

```
import { errorWasThrown, isErrorInstanceOf } from 'sl-ember-components/utils/error';

var App;

...

Ember.onerror = function( error ) {

    if ( errorWasThrown( error ) ) {
        // This will catch any errors coming from the sl-ember-components addon
        // Insert the code you would use to send to your error logging application here
    }

    if ( isErrorInstanceOf( 'radioGroup' ) ) {
        // Use this option if you want granularity at the individual component level
        // Insert the code you would use to send to your error logging application here
    }

    ...Repeat the above for each component that you want to watch for where "radioGroup"
    is the name of the component "sl-radio-group". So if you wanted to watch "sl-menu" you
    would replace "radioGroup" with "menu". To see what can be used look at addon/utils/error.js.

    console.error( error ); // Still send the error to the console
};
```

## Fingerprinting Assets
If fingerprinting is enabled in the consuming application, then by default the following font types are fingerprinted:

    eot, svg, ttf, woff, woff2

**IMPORTANT**: If you list extensions that are not exact matches to [the default ones](https://github.com/rickharrison/broccoli-asset-rev/blob/master/lib/default-options.js)
set by broccoli-asset-rev, you will need to add the desired font extensions to the extensions property in the consuming application's fingerprinting settings in the `ember-cli-build.js` file, as demonstrated below:

```
const EmberApp = require( 'ember-cli/lib/broccoli/ember-app' );
const env = require( './config/environment' );

module.exports = function( defaults ) {
    const app = new EmberApp( defaults, {
        fingerprint: {
            enabled: true,
            exclude: [],
            extensions: [ 'png', 'jpg', 'gif', 'eot', 'svg', 'ttf', 'woff', 'woff2' ],
            prepend: env().baseAssetsURL,
            replaceExtensions: [ 'html', 'css', 'js' ]
        }
    });

    return app.toTree();
};
```

## Styling

If you wish to modify the styling of the components you have two options for doing so.

The first is to define your CSS declarations in your application's *app/styles* folder.

The second is to build the CSS declarations from the LESS source files.  This will layer
any of your LESS values on top of this addon's LESS values which are then in turn laid
on top of Twitter Bootstrap's.  This does require you though to use LESS for your
entire application's CSS generation.  To use LESS, run

    npm install --save-dev ember-cli-less

then create a `app/styles/app.less` file and add this to it:

    @import 'sl-ember-components';



### Namespaces

Each component has its own CSS namespacing so that it is easy to target specific components
for styling.  Refer to each component's respective documentation at
[http://softlayer.github.io/sl-ember-components](http://softlayer.github.io/sl-ember-components)
for these values.



### Icons

If you wish to use different Glyphicons than the defaut ones, you simply only need to redefine
the `content` definition for the appropriate styles.  For example, to replace the "Show All" icon
used for the `sl-menu` component, use the following declaration:

```
.sl-ember-components.menu .sl-icon-show-all:before {
    content: "\e011";
}
```

If you wish to use a font library other than Glyphicons Halflings you will need to take a few
extra steps but it is still very easy to do.  The first step is to make sure you have properly
installed, and are including, your desired font library.  Next, you need to define a
`[class^="sl-icon-"], [class*=" sl-icon-"]` declaration and copy your font library's main css
declaration into it.  The example below demonstrates this, replacing Glyphicons Halflings with
Font Awesome:

```
[class^="sl-icon-"], [class*=" sl-icon-"] {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
```

Then you only need to redefine the `content` definition in the appropriate styles, as
previously explained above:

```
.sl-ember-components.menu .sl-icon-show-all:before {
    content: "\f270";
}
```




## Examples and documentation on how to use each component

Examples and documentation on how to use each component can be viewed at
[http://softlayer.github.io/sl-ember-components](http://softlayer.github.io/sl-ember-components)




# Versioning
Employs [Semantic Versioning 2.0.0](http://semver.org/)



# Contribution
[See CONTRIBUTING.md](https://github.com/softlayer/sl-ember-components/blob/master/CONTRIBUTING.md)



# Copyright and License
sl-ember-components and its source files are Copyright © 2014-2015 [SoftLayer Technologies, Inc.](http://www.softlayer.com/)
The software is [MIT Licensed](https://github.com/softlayer/sl-ember-components/blob/master/LICENSE.md)

sl-ember-components leverages several third-party libraries which are not all MIT licensed. Specifically, Highcharts is only
free for non-commercial use and requires a license for any other use. See
[this FAQ page](http://shop.highsoft.com/faq/non-commercial#what-is-commercial-website) for more information.

Other libraries that are not MIT licensed, though it should not pose a problem, are:

* [Select2](https://github.com/ivaynberg/select2/blob/master/LICENSE)
* [Bootstrap-Datepicker](https://github.com/eternicode/bootstrap-datepicker/blob/release/LICENSE)




# Warranty
This software is provided “as is” and without any express or implied warranties, including, without limitation, the
implied warranties of merchantability and fitness for a particular purpose.
