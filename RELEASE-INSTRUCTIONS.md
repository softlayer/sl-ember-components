# Repository Release Instructions

This document captures the steps a project maintainer should follow when releasing a new version of this Addon.

* Merge all desired pull requests into `master` branch
* Create a test Ember application and run `ember install softlayer/sl-ember-components#master` to ensure addon installs correctly
    * Exercise the functionality of this addon in the test application
* If change is due to upgrading Ember CLI version
    * Update Ember CLI version text in *README.md* file
* Update *CHANGELOG.md*
    * Organize each entry into one of the following categories, to be displayed in this order:
        * Breaking Enhancement
            * An enhancement that breaks the existing usage or features
            * Any change that requires a user to change their configuration, *bower.json*, *package.json*, or *ember-cli-build.js* files
        * Breaking Bug Fix
            * A bug fix that breaks the existing usage or features
        * Enhancement
            * An improvement to the usage or feature set that users are interested in.
        * Deprecation
            * A removed feature or method of usage
        * Bug Fix
            * Bug fixes
        * Documentation
            * Documentation changes
        * Internal
            * Changes that do not affect the usage or feature set
    * Following the pattern of the existing entries for guidance
    * Add appropriately linked "View complete changeset" link at bottom of entries
* Mark as completed any related task items in the appropriate version section of the [ROADMAP](ROADMAP.md)
* After changes have been committed:
    * `npm version x.x.x`, where *x.x.x* is the Semantic Version of the changeset
    * `git push origin master`
    * `git push origin --tags`
    * `npm publish --registry http://registry.npmjs.org/`
        * Note: `--registry` flag is workaround for occasional issues with default SSL url
* Copy the content of the additions made to the *CHANGELOG.md* file to the Release Notes of the just-released tag
* Run `ember build`
* Run `npm run docs`
* Copy the following resources outside of the working directory so they can be retained between switching branches:
    * */docs*
    * */dist/index.html*
    * */dist/assets/dummy/* *
    * */dist/assets/vendor/* *
    * */dist/fonts* folder
    * */sl-ember-components/assets* folder
* Switch to the `gh-pages` branch
* Replace the same resources listed above with their copies
* Commit and push the changes
