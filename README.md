
[![Latest Release](https://img.shields.io/github/release/softlayer/sl-ember-components.svg)](https://github.com/softlayer/sl-ember-components/releases) ![Ember CLI version](https://img.shields.io/badge/ember%20cli-2.4.3-blue.svg) [![License](https://img.shields.io/npm/l/sl-ember-components.svg)](LICENSE.md) [![Downloads](https://img.shields.io/npm/dm/sl-ember-components.svg)](https://www.npmjs.com/package/sl-ember-components)

[![Dependencies](https://img.shields.io/david/softlayer/sl-ember-components.svg)](https://david-dm.org/softlayer/sl-ember-components) [![Dev Dependencies](https://img.shields.io/david/dev/softlayer/sl-ember-components.svg)](https://david-dm.org/softlayer/sl-ember-components#info=devDependencies)

[![Build Status](https://circleci.com/gh/softlayer/sl-ember-components.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/softlayer/sl-ember-components) [![Code Climate](https://img.shields.io/codeclimate/github/softlayer/sl-ember-components.svg)](https://codeclimate.com/github/softlayer/sl-ember-components) [![Ember Observer](http://emberobserver.com/badges/sl-ember-components.svg)](http://emberobserver.com/addons/sl-ember-components) [![Inch CI](http://inch-ci.org/github/softlayer/sl-ember-components.svg?branch=master)](http://inch-ci.org/github/softlayer/sl-ember-components) [![Join us on Slack](https://sl-ember-components-signup.herokuapp.com/badge.svg)](https://sl-ember-components-signup.herokuapp.com/)

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

Provides a mechanism for initiating `console.warn()`s

*error*

Provides a way for individual components to throw errors that are able to be recognized by methods inside of a consuming application's `Ember.onerror()` function. For more details reference the [Error Handling](#error-handling) section below.


**CSS Classes provided**

*sl-loading*

Apply a loading indicator to an element.  See the [Loading Indicator section](#loading-indicator) for more information.


---


All of this functionality is provided through a combination of leveraging the best-of-breed of other component offerings as well as our own implementations when the existing offerings were deficient. Existing offerings that were leveraged include:

* [Twitter Bootstrap](http://getbootstrap.com/)
* [Highcharts](http://www.highcharts.com/)
* [Select2](http://ivaynberg.github.io/select2/)
* [typeahead.js](https://twitter.github.io/typeahead.js/)

## LICENSE WARNING

While this library is MIT licensed not all of the third-party component libraries are. Specifically, Highcharts is only free for non-commercial use and requires a license for any other use. See
[this FAQ page](http://shop.highsoft.com/faq/non-commercial#what-is-commercial-website) for more information.





# Supported browsers

See [http://softlayer.github.io/sl-ember-components/#/browsers](http://softlayer.github.io/sl-ember-components/#/browsers)





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

Finally, you will need to run [broccoli-autoprefixer](https://github.com/sindresorhus/broccoli-autoprefixer) against the updated Twitter Bootstrap and/or LESS files.  To do so, run

    npm install --save-dev broccoli-autoprefixer

and set the `browsers` option in your *ember-cli-build.js* file to:

```
var autoprefixer = require( 'broccoli-autoprefixer' );
...
tree = autoprefixer(
    tree,
    {
        browsers: [
            'Android 2.3',
            'Android >= 4',
            'Chrome >= 20',
            'Firefox >= 24',
            'Explorer >= 8',
            'iOS >= 6',
            'Opera >= 12',
            'Safari >= 6'
        ]
    }
);
```

The options listed in `browsers` above are the recommended settings by [Twitter Bootstrap](https://github.com/twbs/bootstrap-sass#sass-autoprefixer)

### Component Classes

Each component has its own unique CSS class selector so that it is easy to target and style specific components.  Refer to each component's respective documentation at
[http://softlayer.github.io/sl-ember-components](http://softlayer.github.io/sl-ember-components)
for these values.

### Customizing a component's CSS prefix
All components share a common CSS prefix, namely, `sl-ember-components`. To target and style a particular component, for example the `sl-grid` component, one would use the CSS class selector `.sl-ember-components-grid`. The reason for such a verbose selector is to prevent styling conflicts with other libraries. You can customize the prefix value and change it from the default `sl-ember-components` to whatever you would like. Depending on what option you picked in the [Styling](#styling) section, the steps below describe how you would go about customizing the CSS prefix.

To get started, you will need to add a config value to your `ember-cli-build.js`

```
var app = new EmberApp(defaults, {
    'sl-ember-components': {
        componentClassPrefix: 'custom-prefix' // specify your custom prefix here
    }
});
```

If you are *not* using LESS as a preprocessor then nothing else needs to be done on your part. You should now be able to target components using your custom prefix (e.g. in the case of `sl-grid` you should now be able to use the CSS class selector `.custom-prefix-grid`).

If you are using LESS then you will need to set a `@component-class-prefix` variable *below* the line of code which imports the `sl-ember-components` as shown below.

```
@import 'sl-ember-components'
@component-class-prefix: custom-prefix;
```

You should now be able to target components using your custom prefix (e.g. in the case of `sl-grid` you should now be able to use the CSS class selector `.custom-prefix-grid`).

*Note: If you have already served your application, remember to re-serve after making changes to the `ember-cli-build.js` file so changes can take affect.*


### Icons

If you wish to use different Glyphicons than the defaut ones, you simply only need to redefine
the `content` definition for the appropriate styles.  For example, to replace the "Show All" icon
used for the `sl-menu` component, use the following declaration:

```
.sl-ember-components-menu .sl-icon-show-all:before {
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
.sl-ember-components-menu .sl-icon-show-all:before {
    content: "\f270";
}
```

### Loading indicator

A loading indicator can be made to display over an element's content, masking it from view, by simply adding the
*"sl-loading"* class to it.  This class blurs the content via a dark-colored mask.  If a lighter mask is desired then add
the additional *"inverse"* class to the same element.

*Examples*

![Dark Mask Example](https://raw.githubusercontent.com/softlayer/sl-ember-components/gh-pages/readmeAssets/loadingMaskDark.png "Dark Mask Example") ![Light Mask Example](https://raw.githubusercontent.com/softlayer/sl-ember-components/gh-pages/readmeAssets/loadingMaskLight.png "Light Mask Example")


If you wish to modify the loading image displayed when applying the *"sl-loading"* class you can do so by either
defining CSS declarations or setting LESS variable values, depending on which [Styling](#styling) approach you are using
in your application.

To do so via CSS declarations, define the `background-image` property for the `.sl-loading:after` and
`.sl-loading.inverse:after` selectors.

To do so via LESS, assign values to the `@loading-spinner-light` and `@loading-spinner-dark` variables.

Additional modifications can be applied to any of these selectors as well:

* .sl-loading
* .sl-loading:before
* .sl-loading:after
* .sl-loading.inverse:before
* .sl-loading.inverse:after




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
