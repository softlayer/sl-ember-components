# Repository Upgrade Notes

## Due to Ember CLI version

* Update Ember CLI version in README.md file
* Update CHANGELOG.md
* After changes have been committed:
    * `npm version x.x.x`, where *x.x.x* is the Semantic Version of the changeset
    * `git push origin master`
    * `git push origin --tags`
    * `npm publish --registry http://registry.npmjs.org/`
        * Note: `--registry` flag is workaround for occasional issues with default SSL url