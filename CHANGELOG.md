# sl-ember-components Changelog

### 0.12.3

**BUG FIX**

* Support Ember 2.11.0+ ([#1681](https://github.com/softlayer/sl-ember-components/issues/1681), [#1682](https://github.com/softlayer/sl-ember-components/issues/1682), [#1683](https://github.com/softlayer/sl-ember-components/issues/1683))

[View complete changeset](https://github.com/softlayer/sl-ember-components/compare/v0.12.2...v0.12.3)


### 0.12.2

* [#1672](https://github.com/softlayer/sl-ember-components/issues/1672) Broccoli plugin fails when running in Node >= 5

[View complete changeset](https://github.com/softlayer/sl-ember-components/compare/v0.12.1...v0.12.2)


### 0.12.1

All of the changes from the 0.12.0 release that were inadvertenly not merged into the branch.

[View complete changeset](https://github.com/softlayer/sl-ember-components/compare/v0.12.0...v0.12.1)

### 0.12.0

**BREAKING ENHANCEMENT**

* [#1663](https://github.com/softlayer/sl-ember-components/issues/1663) Upgrade Ember CLI to v2.4.3


**DOCUMENTATION**

* [#1654](https://github.com/softlayer/sl-ember-components/issues/1654) Update `sl-grid` documentation


[View complete changeset](https://github.com/softlayer/sl-ember-components/compare/v0.11.1...v0.12.0)


### 0.11.1

**BUG FIX**

Move `broccoli-autoprefixer` from `devDependencies` to `dependencies`

[View complete changeset](https://github.com/softlayer/sl-ember-components/compare/v0.11.0...v0.11.1)

### 0.11.0

**BREAKING ENHANCEMENT**

* **No longer require `ember-cli-less` to be installed in an application in order to use this addon!!**
* [#564](https://github.com/softlayer/sl-ember-components/issues/564) The page number(s) indicator visually reacts like a button even though is not interactive as such
* [#974](https://github.com/softlayer/sl-ember-components/issues/974) Refactor DOM structure and supporting CSS and JS logic of `sl-grid` component
* [#1338](https://github.com/softlayer/sl-ember-components/issues/1338) Create instructions for using loading class
* [#1395](https://github.com/softlayer/sl-ember-components/issues/1395) Remove *addon/utils/all.js* file
* [#1399](https://github.com/softlayer/sl-ember-components/issues/1399) Refactor to support "sl-ember-components-[component]" class pattern for `sl-alert` component
* [#1374](https://github.com/softlayer/sl-ember-components/issues/1374) Refactor to support "sl-ember-components-[component]" class pattern for `sl-button` component
* [#1400](https://github.com/softlayer/sl-ember-components/issues/1400) Refactor to support "sl-ember-components-[component]" class pattern for `sl-calendar` component
* [#1401](https://github.com/softlayer/sl-ember-components/issues/1401) Refactor to support "sl-ember-components-[component]" class pattern for `sl-chart` component
* [#1375](https://github.com/softlayer/sl-ember-components/issues/1375) Refactor to support "sl-ember-components-[component]" class pattern for `sl-checkbox` component
* [#1376](https://github.com/softlayer/sl-ember-components/issues/1376) Refactor to support "sl-ember-components-[component]" class pattern for `sl-date-picker` component
* [#1377](https://github.com/softlayer/sl-ember-components/issues/1377) Refactor to support "sl-ember-components-[component]" class pattern for `sl-date-range-picker` component
* [#1378](https://github.com/softlayer/sl-ember-components/issues/1378) Refactor to support "sl-ember-components-[component]" class pattern for `sl-date-time` component
* [#1379](https://github.com/softlayer/sl-ember-components/issues/1379) Refactor to support "sl-ember-components-[component]" class pattern for `sl-drop-button` component
* [#1380](https://github.com/softlayer/sl-ember-components/issues/1380) Refactor to support "sl-ember-components-[component]" class pattern for `sl-input` component
* [#1403](https://github.com/softlayer/sl-ember-components/issues/1403) Refactor to support "sl-ember-components-[component]" class pattern for `sl-grid` component
* [#1404](https://github.com/softlayer/sl-ember-components/issues/1404) Refactor to support "sl-ember-components-[component]" class pattern for `sl-loading-icon` component
* [#1405](https://github.com/softlayer/sl-ember-components/issues/1405) Refactor to support "sl-ember-components-[component]" class pattern for `sl-menu` component
* [#1406](https://github.com/softlayer/sl-ember-components/issues/1406) Refactor to support "sl-ember-components-[component]" class pattern for `sl-modal` component
* [#1407](https://github.com/softlayer/sl-ember-components/issues/1407) Refactor to support "sl-ember-components-[component]" class pattern for `sl-pagination` component
* [#1408](https://github.com/softlayer/sl-ember-components/issues/1408) Refactor to support "sl-ember-components-[component]" class pattern for `sl-progress-bar` component
* [#1381](https://github.com/softlayer/sl-ember-components/issues/1381) Refactor to support "sl-ember-components-[component]" class pattern for `sl-radio` component
* [#1382](https://github.com/softlayer/sl-ember-components/issues/1382) Refactor to support "sl-ember-components-[component]" class pattern for `sl-select` component
* [#1383](https://github.com/softlayer/sl-ember-components/issues/1383) Refactor to support "sl-ember-components-[component]" class pattern for `sl-span` component
* [#1384](https://github.com/softlayer/sl-ember-components/issues/1384) Refactor to support "sl-ember-components-[component]" class pattern for `sl-tab-panel` component
* [#1385](https://github.com/softlayer/sl-ember-components/issues/1385) Refactor to support "sl-ember-components-[component]" class pattern for `sl-textarea` component
* [#1386](https://github.com/softlayer/sl-ember-components/issues/1386) Refactor to support "sl-ember-components-[component]" class pattern for `sl-tooltip` component
* [#1446](https://github.com/softlayer/sl-ember-components/issues/1446) Missing "icon" property in component definition for `sl-drop-option`, `sl-drop-button`, and `sl-drop-option-divider`
* [#1477](https://github.com/softlayer/sl-ember-components/issues/1477) Allow `sl-chart` options to be updated after render
* [#1486](https://github.com/softlayer/sl-ember-components/issues/1486) Prevent click event in `sl-menu-item-show-all` component


**ENHANCEMENT**

* All components now correctly leverage Twitter Bootstrap DOM and classes
* [#315](https://github.com/softlayer/sl-ember-components/issues/315) Autoprefixer support
* [#864](https://github.com/softlayer/sl-ember-components/issues/864) Add ability to specify initial sorted column and direction
* [#1173](https://github.com/softlayer/sl-ember-components/issues/1173) Standardize bootstrap glyphs across components
* [#1179](https://github.com/softlayer/sl-ember-components/issues/1179) Add size support to `sl-modal` component
* [#1201](https://github.com/softlayer/sl-ember-components/issues/1201) and [#1478](https://github.com/softlayer/sl-ember-components/pull/1478) Upgrade version of Twitter Bootstrap to v3.3.5
* [#1243](https://github.com/softlayer/sl-ember-components/issues/1243) `sl-select` background color
* [#1350](https://github.com/softlayer/sl-ember-components/issues/1350) Create error architecture for sl-ember-components


**BUG FIX**

* [#1035](https://github.com/softlayer/sl-ember-components/issues/1035) Invalid CSS property declaration at: *


**DEPRECATION**

* [#1197](https://github.com/softlayer/sl-ember-components/issues/1197) Remove `sl-loading-icon` component offering


**DOCUMENTATION**

* [#11](https://github.com/softlayer/sl-ember-components/issues/11) Demo app doesn't like being in a "narrower" browser window
* [#33](https://github.com/softlayer/sl-ember-components/issues/33) Provide directions on how to modify the CSS to swap the loading image
* [#47](https://github.com/softlayer/sl-ember-components/issues/47) Document how consuming application should reference .LESS files
* [#1387](https://github.com/softlayer/sl-ember-components/issues/1387) Add documentation to each component about its CSS namespacing
* [#1417](https://github.com/softlayer/sl-ember-components/issues/1417) Improve the content on the Error Handling wiki page
* [#1419](https://github.com/softlayer/sl-ember-components/issues/1419) Add content to Built in Icon Support page
* [#1430](https://github.com/softlayer/sl-ember-components/issues/1420) Create instructions on swapping base font
* [#1434](https://github.com/softlayer/sl-ember-components/issues/1434) Link in README.md to support browsers is incorrect.
* [#1452](https://github.com/softlayer/sl-ember-components/issues/1452) Remove copy/paste error in warn section of *README*
* [#1344](https://github.com/softlayer/sl-ember-components/pull/1344) Remove `select2` from list of dependencies that are not MIT licensed in *README*


**INTERNAL**

* Improved test coverage
* [#1279](https://github.com/softlayer/sl-ember-components/issues/1279) Fix file naming
* [#1283](https://github.com/softlayer/sl-ember-components/issues/1283) Reduce `app.import()` calls to single entries vs per-environment


[View complete changeset](https://github.com/softlayer/sl-ember-components/compare/v0.10.2...v0.11.0)

### 0.10.2

**BUG FIX**

* [#1391](https://github.com/softlayer/sl-ember-components/pull/1391) jQuery version increased but Ember CLI is checking for previous version

**DOCUMENTATION**

* Added [Vision Statement](VISION-STATEMENT.md)
* Added [Roadmap](ROADMAP.md)

**INTERNAL**

* Updated [Release Instructions](RELEASE-INSTRUCTIONS.md)

[View complete changeset](https://github.com/softlayer/sl-ember-components/compare/v0.10.1...v0.10.2)

### 0.10.1

**BUG FIX**

* [#1340](https://github.com/softlayer/sl-ember-components/issues/1340) Highcharts library changed the folder structure of their built/distributed code...again.

**DOCUMENTATION**

* [#1344](https://github.com/softlayer/sl-ember-components/pull/1344) Update README.md.  `Select2` dependency license is now MIT.

[View complete changeset](https://github.com/softlayer/sl-ember-components/compare/v0.10.0...v0.10.1)

### 0.10.0

**BREAKING ENHANCEMENT**

* [#452](https://github.com/softlayer/sl-ember-components/issues/452) Upgrade to Ember CLI 1.13.8
* [#1223](https://github.com/softlayer/sl-ember-components/issues/1223) Validate timezone value in `sl-date-time`
* [#823](https://github.com/softlayer/sl-ember-components/pull/823) Refactor "spellcheck" property in `sl-textarea`

**ENHANCEMENT**

* [#916](https://github.com/softlayer/sl-ember-components/issues/916) Add name property to `sl-input-based` mixin
* [#791](https://github.com/softlayer/sl-ember-components/issues/791) Extract `setInputId()` from `sl-input-based` mixin into own mixin
* [#784](https://github.com/softlayer/sl-ember-components/issues/784) Add missing properties to `sl-radio`
* [#762](https://github.com/softlayer/sl-ember-components/issues/762) Refactor DOM of `sl-modal-header`
* [#759](https://github.com/softlayer/sl-ember-components/issues/759) Refactor DOM of `sl-modal-footer`
* [#757](https://github.com/softlayer/sl-ember-components/issues/757) Refactor DOM of `sl-modal-body`

**BUG FIX**

* [#949](https://github.com/softlayer/sl-ember-components/issues/949) `sl-grid footer` is misaligned
* [#900](https://github.com/softlayer/sl-ember-components/issues/900) Auto-column width does not align header with body
* [#685](https://github.com/softlayer/sl-ember-components/issues/685) Replace use of single quotes with double quotes in template construction in integration tests
* [#682](https://github.com/softlayer/sl-ember-components/issues/682) Refactor the format of the template rendering in the tests to pass linting checks
* [#648](https://github.com/softlayer/sl-ember-components/issues/648) `sl-drop-button` not showing dropdown options when clicked
* [#614](https://github.com/softlayer/sl-ember-components/issues/614) Failing tests for `sl-textarea`
* [#613](https://github.com/softlayer/sl-ember-components/issues/613) Failing tests for `sl-tab-panel`
* [#610](https://github.com/softlayer/sl-ember-components/issues/610) Failing tests for `sl-modal`

**DOCUMENTATION**

* [#1233](https://github.com/softlayer/sl-ember-components/issues/1233) `sl-calender`'s demo model is not in sync with demo model template
* [#1014](https://github.com/softlayer/sl-ember-components/issues/1014) *README.MD* needs to be updated to include correct components, mixins, etc
* [#962](https://github.com/softlayer/sl-ember-components/issues/962) Add action to documentation for `sl-date-picker`
* [#877](https://github.com/softlayer/sl-ember-components/issues/877) "Align" enum is not showing up in generated documentation as expected
* [#878](https://github.com/softlayer/sl-ember-components/issues/878) Are other enums experiencing this same documentation problem?
* [#808](https://github.com/softlayer/sl-ember-components/issues/808) Add missing entry for `sl-component-input-id` mixin in documentation pages
* [#807](https://github.com/softlayer/sl-ember-components/issues/807) Add missing `@augments` for `sl-component-input-id` mixin in `sl-input` and `sl-textarea`
* [#744](https://github.com/softlayer/sl-ember-components/issues/744) Update `sl-button` documentation
* [#700](https://github.com/softlayer/sl-ember-components/issues/700) Remove undefined from the `@type` for the "value" property for `sl-date-time`
* [#696](https://github.com/softlayer/sl-ember-components/issues/696) Grid demo is broken
* [#664](https://github.com/softlayer/sl-ember-components/issues/664) Change reference to *Brocfile.js* in 8README.MD* to *ember-cli-build.js*

**INTERNAL**

A large majority of these are related to creating a better testing story through the use of component integration tests.

* [179 Issues](https://github.com/softlayer/sl-ember-components/issues?q=is%3Aissue+milestone%3A%22v0.10.0+%28Ember+CLI+1.13.8+Upgrade%29%22+label%3A%22changetype%3A6+internal%22+is%3Aclosed)
* [12 PRs](https://github.com/softlayer/sl-ember-components/pulls?q=is%3Apr+milestone%3A%22v0.10.0+%28Ember+CLI+1.13.8+Upgrade%29%22+label%3A%22changetype%3A6+internal%22+is%3Aclosed)

[View complete changeset](https://github.com/softlayer/sl-ember-components/compare/v0.9.4...v0.10.0)

### 0.9.4

**ENHANCEMENT**

* [#902](https://github.com/softlayer/sl-ember-components/pull/902) Update CONTRIBUTING.MD
* *CONTRIBUTING.MD*: [https://github.com/softlayer/sl-ember-components/commit/99af879f3705aeb9957538a8daf007f8df98a875](https://github.com/softlayer/sl-ember-components/commit/99af879f3705aeb9957538a8daf007f8df98a875)

**BUGFIX**

* [#1250](https://github.com/softlayer/sl-ember-components/pull/1250) Highcharts dependency changed the location of their source files

**INTERNAL**

* [#880](https://github.com/softlayer/sl-ember-components/pull/880) Upgrade *sl-eslint* and *ember-cli-jsdoc* dependencies
* [#1278](https://github.com/softlayer/sl-ember-components/pull/1278) Update blueprint to reflect latest Highcharts version already being installed

[View complete changeset](https://github.com/softlayer/sl-ember-components/compare/v0.9.3...v0.9.4)

### 0.9.3

**BUGFIX**

* [#684](https://github.com/softlayer/sl-ember-components/issues/684) jQuery mousewheel production import is incorrect

**INTERNAL**

* [#509](https://github.com/softlayer/sl-ember-components/issues/509) `sl-modal`: Computed properties should return null value by default
* [#672](https://github.com/softlayer/sl-ember-components/pull/672) Synchronize installed version of PhantomJS between TravisCI and dev environments

[View complete changeset](https://github.com/softlayer/sl-ember-components/compare/v0.9.2...v0.9.3)

### 0.9.2

**BUGFIX**

[#651](https://github.com/softlayer/sl-ember-components/issues/651) sl-bootstrap blueprint needs to use name and source

[View complete changeset](https://github.com/softlayer/sl-ember-components/compare/v0.9.1...v0.9.2)

### 0.9.1

**BUGFIX**

[#642](https://github.com/softlayer/sl-ember-components/issues/642) softlayer/sl-bootstrap entry in blueprints/sl-ember-components/index.js should reference correct version
[#643](https://github.com/softlayer/sl-ember-components/issues/643) ember-stream should be a dependency, not a devDependency

[View complete changeset](https://github.com/softlayer/sl-ember-components/compare/v0.9.0...v0.9.1)

### 0.9.0

**BREAKING ENHANCEMENT**

* [#344](https://github.com/softlayer/sl-ember-components/issues/344) Upgrade to Ember CLI 0.2.7
* [#344](https://github.com/softlayer/sl-ember-components/pull/344) Replaced implementation of `sl-grid` with new one
* [#208](https://github.com/softlayer/sl-ember-components/issues/208) Refactored `sl-checkbox`and added improvements
* [#226](https://github.com/softlayer/sl-ember-components/issues/226) Refactored `sl-panel` and added improvements
* [#359](https://github.com/softlayer/sl-ember-components/issues/359) Refactored `sl-menu` and added improvements
* [#499](https://github.com/softlayer/sl-ember-components/pull/499) Added used of `ember-stream` by `sl-menu`
* [#429](https://github.com/softlayer/sl-ember-components/issues/429) Deleted `mixin:sl-notify-view`
* [#441](https://github.com/softlayer/sl-ember-components/pull/441) Deleted `mixin:sl-modal-manager` and `mixin:sl-modal`
* [#499](https://github.com/softlayer/sl-ember-components/pull/499) Deleted 'service:sl-modal'
* [#499](https://github.com/softlayer/sl-ember-components/pull/499) Refactored `sl-modal` to use `ember-stream` instead of `service:sl-modal`
* [#478](https://github.com/softlayer/sl-ember-components/pull/478) Put fonts in namespace

**BREAKING BUGFIX**

* [#306](https://github.com/softlayer/sl-ember-components/issues/305) `sl-date-range-picker`: Remove change bindings for "startDateChange" and "endDateChange"

**ENHANCEMENT**

* [#392](https://github.com/softlayer/sl-ember-components/pull/392) Install `ember-cli-jsdoc`
* [#404](https://github.com/softlayer/sl-ember-components/pull/404) Install `joshforisha/sl-eslint`
* [#331](https://github.com/softlayer/sl-ember-components/issues/331) `mixin:sl-tooltip-enabled`: Enable tooltip functionality to include popover and title

**BUGFIX**

* [#309](https://github.com/softlayer/sl-ember-components/issues/309) Update dependencies for underlying dependency chaining mis-matches that have occurred within Ember CLI ecosystem
* [#389](https://github.com/softlayer/sl-ember-components/issues/389) Dropdown options are shifted off of the dropdown list element
* [#390](https://github.com/softlayer/sl-ember-components/pull/390) `sl-select`: Couldn't recognize Ember objects passed in (thanks to [@JKGisMe](https://github.com/JKGisMe))
* [#396](https://github.com/softlayer/sl-ember-components/issues/396) `Ember.typeOf( Symbol )` returns `"function"`, caused by [https://github.com/emberjs/ember.js/issues/11673](https://github.com/emberjs/ember.js/issues/11673)
* [#410](https://github.com/softlayer/sl-ember-components/issues/410) `sl-select` doesn' show pre-existing selection (thanks to [@JKGisMe](https://github.com/JKGisMe))
* [#526](https://github.com/softlayer/sl-ember-components/issues/526) Added `jquery-mousewheel` dependency

**DOCUMENTATION**

* Added and improved documentation and demo application
* [#365](https://github.com/softlayer/sl-ember-components/issues/365) Support publishing of generated docs to gh-pages branch/site

**INTERNAL**
* All components are now fully tested
* Codebase now aligns with the [Ember Style Guide](https://github.com/softlayer/ember-style-guide)
* [#14](https://github.com/softlayer/sl-ember-components/issues/14) All expected properties that can be defined when a component is used in a template should also be set in the component

[View complete changeset](https://github.com/softlayer/sl-ember-components/compare/v0.8.0...v0.9.0)

### 0.8.0

**BREAKING ENHANCEMENT**

* [#266](https://github.com/softlayer/sl-ember-components/pull/266) Remove es5-shim
* [#271](https://github.com/softlayer/sl-ember-components/pull/271) Upgrade to Ember CLI 0.1.15

**ENHANCEMENT**

* [#167](https://github.com/softlayer/sl-ember-components/pull/167) Overwrite Font Awesome fonts if already in application tree
* [#276](https://github.com/softlayer/sl-ember-components/pull/276) Update sl-ember-test-helpers to 1.3.0
* [#279](https://github.com/softlayer/sl-ember-components/pull/279) Removed ember-cli-6to5 3.0.0. Added ember-cli-babel 4.0.0
* [#284](https://github.com/softlayer/sl-ember-components/pull/284) Update sl-ember-translate to 1.4.0

**BUGFIX**

* [#130](https://github.com/softlayer/sl-ember-components/issues/130) Keyboard shortcuts not working correctly in menu

**DOCUMENTATION**

* [#280](https://github.com/softlayer/sl-ember-components/pull/280) Update installation instructions

**INTERNAL**

* Increase test coverage
* Refactor tests
* [#283](https://github.com/softlayer/sl-ember-components/pull/283) Replaced instances of `Ember.A()` with `[]`

[View complete changeset](https://github.com/softlayer/sl-ember-components/compare/v0.7.0...v0.8.0)

### 0.7.0

**BREAKING ENHANCEMENT**

* [#159](https://github.com/softlayer/sl-ember-components/pull/159) Upgrade to Ember CLI 0.1.5
* [#152](https://github.com/softlayer/sl-ember-components/pull/152) Upgrade dependencies

**ENHANCEMENT**

* [#140](https://github.com/softlayer/sl-ember-components/pull/140) Close grid action menu on mouseLeave

**DOCUMENTATION**

* [#147](https://github.com/softlayer/sl-ember-components/pull/147) Change demo application link
* [#155](https://github.com/softlayer/sl-ember-components/pull/155) Update installation instructions

**INTERNAL**

* [#145](https://github.com/softlayer/sl-ember-components/pull/145) Installed ember-cli-es5-shim to faciliate running of tests via TravisCI

[View complete changeset](https://github.com/softlayer/sl-ember-components/compare/v0.6.0...v0.7.0)

### 0.6.0

**BREAKING ENHANCEMENT**

* [#131](https://github.com/softlayer/sl-ember-components/issues/131) [BREAKING ENHANCEMENT] Update sl-bootstrap Bower dependency to1.1.0

**ENHANCEMENT**

* [#116](https://github.com/softlayer/sl-ember-components/pull/116) [ENHANCEMENT] Make CSS source map inclusion dependent on development environment
* [#122](https://github.com/softlayer/sl-ember-components/pull/122) [ENHANCEMENT] Add "align" property to sl-drop-button
* [#123](https://github.com/softlayer/sl-ember-components/pull/123) [ENHANCEMENT] Improve buttons size options

**BUGFIX**

* [#115](https://github.com/softlayer/sl-ember-components/pull/115) [BUGFIX] Remove duplicate LESS import statements
* [#117](https://github.com/softlayer/sl-ember-components/pull/117) [BUGFIX] Fix Bower package name in blueprint
* [#120](https://github.com/softlayer/sl-ember-components/pull/120) [BUGFIX] Layout of hidden columns in grid system
* [#125](https://github.com/softlayer/sl-ember-components/pull/125) [BUGFIX] Cleanup event listeners in grid system

[View complete changeset](https://github.com/softlayer/sl-ember-components/compare/v0.5.0...v0.6.0)

### 0.5.0

**BREAKING ENHANCEMENT**

* [#106](https://github.com/softlayer/sl-ember-components/pull/106) Upgrade to Ember CLI 0.1.4

**ENHANCEMENT**

* [#101](https://github.com/softlayer/sl-ember-components/pull/101) Make date-picker properties configurable instead of hard-coded
* [#103](https://github.com/softlayer/sl-ember-components/pull/103) Add properties for additional HTML attributes
* [#104](https://github.com/softlayer/sl-ember-components/pull/104) Additional updates to textarea attributes

**BUGFIX**

* [#97](https://github.com/softlayer/sl-ember-components/pull/97) Correct asset paths

**INTERNAL**

* [#90](https://github.com/softlayer/sl-ember-components/pull/90) Update bower dependency url

[View complete changeset](https://github.com/softlayer/sl-ember-components/compare/v0.4.0...v0.5.0)

### 0.4.0

**BREAKING ENHANCEMENT**

* [#58](https://github.com/softlayer/sl-ember-components/pull/58) Upgrade Ember CLI to 0.1.3

**ENHANCEMENT**

* [#60](https://github.com/softlayer/sl-ember-components/pull/60) Remove content security policy addon
* [#84](https://github.com/softlayer/sl-ember-components/pull/84) Changed the git endpoint for sl-bootstrap Bower dependency
* [#86](https://github.com/softlayer/sl-ember-components/pull/86) Remove content security policy addon configuration from demo application

**BUGFIX**

* [#55](https://github.com/softlayer/sl-ember-components/pull/55) Add "disabled" class binding to checkbox's div
* [#59](https://github.com/softlayer/sl-ember-components/pull/59)

**DOCUMENTATION**

* [Add menu to demo application for integration with gh-pages content](https://github.com/softlayer/sl-ember-components/commit/47c0bf50dd768237c8ce0fd9b763181acd62c3e1)
* [README.md: Remove browser information and link to GitHub page with same info; update installation instructions](https://github.com/softlayer/sl-ember-components/commit/5050a892d57330f6bb95e74fce91b7a44abea461)
* [Add footer to demo application for integration with gh-pages content](https://github.com/softlayer/sl-ember-components/commit/93cf07c873f873dd0ec12f87e545d0480dcc3705)
* [Change display order of required property; change formatting of file](https://github.com/softlayer/sl-ember-components/pull/50)
* [#82](https://github.com/softlayer/sl-ember-components/pull/82) Update CONTRIBUTING.md

**INTERNAL**

* [#46](https://github.com/softlayer/sl-ember-components/issues/46) Change NPM package homepage to http://softlayer.github.io/sl-ember-components/ once it's created
* [#52](https://github.com/softlayer/sl-ember-components/pull/52) Add additional keywords
* [#68](https://github.com/softlayer/sl-ember-components/pull/68) Update Brocfile.js
* Refine package.json configuration

[View complete changeset](https://github.com/softlayer/sl-ember-components/compare/v0.3.0...v0.4.0)

### 0.3.0

**BREAKING INTERNAL**

* [#48](https://github.com/softlayer/sl-ember-components/pull/48) Some additional references to previous repository name that was not correctly caught
* [#58](https://github.com/softlayer/sl-ember-components/pull/58) Upgrade Ember CLI to 0.1.3

**INTERNAL**

* [#49](https://github.com/softlayer/sl-ember-components/pull/49) Update dummy app .LESS reference

[View complete changeset](https://github.com/softlayer/sl-ember-components/compare/v0.2.0...v0.3.0)

### 0.2.0

**INTERNAL**

* [#40](https://github.com/softlayer/sl-ember-components/pull/40) Add additional details to upgrade information
* [#41](https://github.com/softlayer/sl-ember-components/pull/41) Change repository name references missed in previous rename changes
* [#42](https://github.com/softlayer/sl-ember-components/pull/42) Remove incorrect bower dependency on self
* [#43](https://github.com/softlayer/sl-ember-components/pull/43) Update urls
* [#44](https://github.com/softlayer/sl-ember-components/pull/44) Remove @TODO text

[View complete changeset](https://github.com/softlayer/sl-ember-components/compare/v0.1.0...v0.2.0)

### 0.1.0

* Initial release
