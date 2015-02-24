# Repository Release Instructions

This document captures the steps a project maintainer should follow when releasing a new version of this Addon.

* Merge all desired pull requests into `develop` branch
* Merge `develop` branch into `master` branch
* If change is due to upgrading Ember CLI version
    * Update Ember CLI version text in README.md file
* Update the */tests/dummy/app/templates/browsers.hbs* file
    * Update reference to the version number in the "sl-ember-components" section
* Update CHANGELOG.md
    * Prefix the entries with one of the following tags inside brackets:
        * BUGFIX
            * A link to a bug and a link to a patch.
        * FEATURE or ENHANCEMENT
            * Are for things that users are interested in. Avoid super technical talk. Craft a concise description of the change.
        * INTERNAL
            * An internal log of changes.
    * If a change requires a user to change their configuration, *bower.json*, *package.json*, or *Brocfile.js* also add a BREAKING tag within the brackets before any other tags (example [BREAKING BUGFIX])
    * Following the pattern of the existing entries for guidance
    * Add appropriately linked "View complete changeset" link at bottom of entries
* After changes have been committed:
    * `npm version x.x.x`, where *x.x.x* is the Semantic Version of the changeset
    * `git push origin master`
    * `git push origin --tags`
    * `npm publish --registry http://registry.npmjs.org/`
        * Note: `--registry` flag is workaround for occasional issues with default SSL url
* Merge `master` branch into `develop`

If any of these conditions are true:

* There have been modifications to the *tests/dummy/app* demo application
* There have been changes to the *bower.json*, *package.json*, or *Brocfile.js* files
* Ember CLI has been upgraded

Then follow these steps:

* Run `ember build`
* Copy the following files from */dist* folder outside of the working directory so they can be retained between switching branches:
    * *index.html*
    * *assets/dummy.* *
    * *assets/vendor.* *
    * *fonts* folder
    * *sl-ember-components* folder
* Switch to the `gh-pages` branch
* Replace the same files listed above with their copies
* Commit and push the changes