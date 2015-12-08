# sl-ember-components Changelog

### 0.9.3

* [#684](https://github.com/softlayer/sl-ember-components/issues/684) [BUGFIX] jQuery mousewheel production import is incorrect
* [#509](https://github.com/softlayer/sl-ember-components/issues/509) [INTERNAL ENHANCEMENT] `sl-modal`: Computed properties should return null value by default
* [#672](https://github.com/softlayer/sl-ember-components/pull/672) [INTERNAL] Synchronize installed version of PhantomJS between TravisCI and dev environments

[View complete changeset](https://github.com/softlayer/sl-ember-components/compare/v0.9.2...v0.9.3)

### 0.9.2

[#651](https://github.com/softlayer/sl-ember-components/issues/651) [BUGFIX] sl-bootstrap blueprint needs to use name and source

[View complete changeset](https://github.com/softlayer/sl-ember-components/compare/v0.9.1...v0.9.2)

### 0.9.1

[#642](https://github.com/softlayer/sl-ember-components/issues/642) [BUGFIX] softlayer/sl-bootstrap entry in blueprints/sl-ember-components/index.js should reference correct version
[#643](https://github.com/softlayer/sl-ember-components/issues/643) [BUGFIX] ember-stream should be a dependency, not a devDependency

[View complete changeset](https://github.com/softlayer/sl-ember-components/compare/v0.9.0...v0.9.1)

### 0.9.0

* [INTERNAL] All components are now fully tested
* [INTERNAL] Codebase now aligns with the [Ember Style Guide](https://github.com/softlayer/ember-style-guide)
* [DOCUMENATION] Added and improved documentation and demo application
* [#365](https://github.com/softlayer/sl-ember-components/issues/365) [DOCUMENTATION] Support publishing of generated docs to gh-pages branch/site
* [#344](https://github.com/softlayer/sl-ember-components/issues/344) [BREAKING ENHANCEMENT] Upgrade to Ember CLI 0.2.7
* [#344](https://github.com/softlayer/sl-ember-components/pull/344) [BREAKING ENHANCEMENT] Replaced implementation of `sl-grid` with new one
* [#208](https://github.com/softlayer/sl-ember-components/issues/208) [BREAKING ENHANCEMENT] Refactored `sl-checkbox`and added improvements
* [#226](https://github.com/softlayer/sl-ember-components/issues/226) [BREAKING ENHANCEMENT] Refactored `sl-panel` and added improvements
* [#359](https://github.com/softlayer/sl-ember-components/issues/359) [BREAKING ENHANCEMENT] Refactored `sl-menu` and added improvements
* [#499](https://github.com/softlayer/sl-ember-components/pull/499) [BREAKING ENHANCEMENT] Added used of `ember-stream` by `sl-menu`
* [#429](https://github.com/softlayer/sl-ember-components/issues/429) [BREAKING ENHANCEMENT] Deleted `mixin:sl-notify-view`
* [#441](https://github.com/softlayer/sl-ember-components/pull/441) [BREAKING ENHANCEMENT] Deleted `mixin:sl-modal-manager` and `mixin:sl-modal`
* [#499](https://github.com/softlayer/sl-ember-components/pull/499) [BREAKING ENHANCEMENT] Deleted 'service:sl-modal'
* [#499](https://github.com/softlayer/sl-ember-components/pull/499) [BREAKING ENHANCEMENT] Refactored `sl-modal` to use `ember-stream` instead of `service:sl-modal`
* [#478](https://github.com/softlayer/sl-ember-components/pull/478) [BREAKING ENHANCEMENT] Put fonts in namespace
* [#306](https://github.com/softlayer/sl-ember-components/issues/305) [BREAKING BUGFIX] `sl-date-range-picker`: Remove change bindings for "startDateChange" and "endDateChange"
* [#309](https://github.com/softlayer/sl-ember-components/issues/309) [BUGFIX] Update dependencies for underlying dependency chaining mis-matches that have occurred within Ember CLI ecosystem
* [#389](https://github.com/softlayer/sl-ember-components/issues/389) [BUGFIX] Dropdown options are shifted off of the dropdown list element
* [#390](https://github.com/softlayer/sl-ember-components/pull/390) [BUGFIX] `sl-select`: Couldn't recognize Ember objects passed in (thanks to [@JKGisMe](https://github.com/JKGisMe))
* [#396](https://github.com/softlayer/sl-ember-components/issues/396) [BUGFIX] `Ember.typeOf( Symbol )` returns `"function"`, caused by [https://github.com/emberjs/ember.js/issues/11673](https://github.com/emberjs/ember.js/issues/11673)
* [#410](https://github.com/softlayer/sl-ember-components/issues/410) [BUGFIX] `sl-select` doesn' show pre-existing selection (thanks to [@JKGisMe](https://github.com/JKGisMe))
* [#526](https://github.com/softlayer/sl-ember-components/issues/526) [BUGFIX] Added `jquery-mousewheel` dependency
* [#392](https://github.com/softlayer/sl-ember-components/pull/392) [ENHANCMENT] Install `ember-cli-jsdoc`
* [#404](https://github.com/softlayer/sl-ember-components/pull/404) [ENHANCEMEN] Install `joshforisha/sl-eslint`
* [#331](https://github.com/softlayer/sl-ember-components/issues/331) [ENHANCEMENT] `mixin:sl-tooltip-enabled`: Enable tooltip functionality to include popover and title
* [#14](https://github.com/softlayer/sl-ember-components/issues/14) [INTERNAL] All expected properties that can be defined when a component is used in a template should also be set in the component

[View complete changeset](https://github.com/softlayer/sl-ember-components/compare/v0.8.0...v0.9.0)

### 0.8.0

* [#167](https://github.com/softlayer/sl-ember-components/pull/167) [ENHANCEMENT] Overwrite Font Awesome fonts if already in application tree
* [INTERNAL] Increase test coverage
* [INTERNAL] Refactor tests
* [#266](https://github.com/softlayer/sl-ember-components/pull/266) [BREAKING ENHANCEMENT] Remove es5-shim
* [#271](https://github.com/softlayer/sl-ember-components/pull/271) [BREAKING ENHANCEMENT] Upgrade to Ember CLI 0.1.15
* [#276](https://github.com/softlayer/sl-ember-components/pull/276) [ENHANCEMENT] Update sl-ember-test-helpers to 1.3.0
* [#279](https://github.com/softlayer/sl-ember-components/pull/279) [EHHANCEMENT] Removed ember-cli-6to5 3.0.0. Added ember-cli-babel 4.0.0
* [#280](https://github.com/softlayer/sl-ember-components/pull/280) [DOCUMENATION] Update installation instructions
* [#283](https://github.com/softlayer/sl-ember-components/pull/283) [INTERNAL] Replaced instances of `Ember.A()` with `[]`
* [#284](https://github.com/softlayer/sl-ember-components/pull/284) [ENHANCEMENT] Update sl-ember-translate to 1.4.0
* [#286](https://github.com/softlayer/sl-ember-components/pull/286) [BUGFIX] Closes [#130](https://github.com/softlayer/sl-ember-components/issues/130) - Keyboard shortcuts not working correctly in menu

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

* [#115](https://github.com/softlayer/sl-ember-components/pull/115) [BUGFIX] Remove duplicate LESS import statements
* [#116](https://github.com/softlayer/sl-ember-components/pull/116) [ENHANCEMENT] Make CSS source map inclusion dependent on development environment
* [#117](https://github.com/softlayer/sl-ember-components/pull/117) [BUGFIX] Fix Bower package name in blueprint
* [#120](https://github.com/softlayer/sl-ember-components/pull/120) [BUGFIX] Layout of hidden columns in grid system
* [#122](https://github.com/softlayer/sl-ember-components/pull/122) [ENHANCEMENT] Add "align" property to sl-drop-button
* [#123](https://github.com/softlayer/sl-ember-components/pull/123) [ENHANCEMENT] Improve buttons size options
* [#125](https://github.com/softlayer/sl-ember-components/pull/125) [BUGFIX] Cleanup event listeners in grid system
* [#131](https://github.com/softlayer/sl-ember-components/issues/131) [BREAKING ENHANCEMENT] Update sl-bootstrap Bower dependency to 1.1.0

[View complete changeset](https://github.com/softlayer/sl-ember-components/compare/v0.5.0...v0.6.0)

### 0.5.0

* [#90](https://github.com/softlayer/sl-ember-components/pull/90) [INTERNAL] Update bower dependency url
* [#97](https://github.com/softlayer/sl-ember-components/pull/97) [BUGFIX] Correct asset paths
* [#101](https://github.com/softlayer/sl-ember-components/pull/101) [ENHANCEMENT] Make date-picker properties configurable instead of hard-coded
* [#103](https://github.com/softlayer/sl-ember-components/pull/103) [ENHANCEMENT] Add properties for additional HTML attributes
* [#104](https://github.com/softlayer/sl-ember-components/pull/104) [ENHANCEMENT] Additional updates to textarea attributes
* [#106](https://github.com/softlayer/sl-ember-components/pull/106) [BREAKING ENHANCEMENT] Upgrade to Ember CLI 0.1.4

[View complete changeset](https://github.com/softlayer/sl-ember-components/compare/v0.4.0...v0.5.0)

### 0.4.0

* [[DOCUMENTATION]](https://github.com/softlayer/sl-ember-components/commit/47c0bf50dd768237c8ce0fd9b763181acd62c3e1) Add menu to demo application for integration with gh-pages content
* [[DOCUMENTATION]](https://github.com/softlayer/sl-ember-components/commit/5050a892d57330f6bb95e74fce91b7a44abea461) README.md: Remove browser information and link to GitHub page with same info; update installation instructions
* [[DOCUMENTATION]](https://github.com/softlayer/sl-ember-components/commit/93cf07c873f873dd0ec12f87e545d0480dcc3705) Add footer to demo application for integration with gh-pages content
* [[INTERNAL]](https://github.com/softlayer/sl-ember-components/issues/46) Change NPM package homepage to http://softlayer.github.io/sl-ember-components/ once it's created
* [#50](https://github.com/softlayer/sl-ember-components/pull/50) [DOCUMENTATION] Change display order of required property; change formatting of file
* [#52](https://github.com/softlayer/sl-ember-components/pull/52) [INTERNAL] Add additional keywords
* [#55](https://github.com/softlayer/sl-ember-components/pull/55) [BUGFIX] Add "disabled" class binding to checkbox's div
* [#58](https://github.com/softlayer/sl-ember-components/pull/58) [BREAKING ENHANCEMENT] Upgrade Ember CLI to 0.1.3
* [#59](https://github.com/softlayer/sl-ember-components/pull/59) [BUGFIX]
* [#60](https://github.com/softlayer/sl-ember-components/pull/60) [ENHANCEMENT] Remove content security policy addon
* Refine package.json configuration
* [#68](https://github.com/softlayer/sl-ember-components/pull/68) [INTERNAL] Update Brocfile.js
* [#82](https://github.com/softlayer/sl-ember-components/pull/82) [DOCUMENTATION] Update CONTRIBUTING.md
* [#84](https://github.com/softlayer/sl-ember-components/pull/84) [ENHANCEMENT] Changed the git endpoint for sl-bootstrap Bower dependency
* [#86](https://github.com/softlayer/sl-ember-components/pull/86)[ENHANCEMENT] Remove content security policy addon configuration from demo application

[View complete changeset](https://github.com/softlayer/sl-ember-components/compare/v0.3.0...v0.4.0)

### 0.3.0

* [#48](https://github.com/softlayer/sl-ember-components/pull/48) [BREAKING INTERNAL] Some additional references to previous repository name that was not correctly caught
* [#49](https://github.com/softlayer/sl-ember-components/pull/49) [INTERNAL] - Update dummy app .LESS reference
* [#58](https://github.com/softlayer/sl-ember-components/pull/58) [BREAKING INTERNAL] Upgrade Ember CLI to 0.1.3

[View complete changeset](https://github.com/softlayer/sl-ember-components/compare/v0.2.0...v0.3.0)

### 0.2.0

* [#40](https://github.com/softlayer/sl-ember-components/pull/40) [INTERNAL] - Add additional details to upgrade information
* [#41](https://github.com/softlayer/sl-ember-components/pull/41) [INTERNAL] - Change repository name references missed in previous rename changes
* [#42](https://github.com/softlayer/sl-ember-components/pull/42) [INTERNAL] - Remove incorrect bower dependency on self
* [#43](https://github.com/softlayer/sl-ember-components/pull/43) [INTERNAL] - Update urls
* [#44](https://github.com/softlayer/sl-ember-components/pull/44) [INTERNAL] - Remove @TODO text

[View complete changeset](https://github.com/softlayer/sl-ember-components/compare/v0.1.0...v0.2.0)

### 0.1.0

* Initial release
