# Getting Involved

There are many ways to contribute to the project, including fixing issues or improving documentation.

# Questions

This is the issue tracker for `sl-ember-components`. The community uses this site to collect and track bugs and
discussions of new features. If you are having difficulties using `sl-ember-components` or have a question about
usage please ask a question on Stack Overflow: http://stackoverflow.com/questions/ask?tags=sl-ember-components

# Issues

Think you've found a bug or have a new feature to suggest? Let us know!

## Reporting a Bug

1. Make sure you have the latest version of the code, if possible, as we may have already fixed your bug.

2. Search for similar issues. It's possible somebody has encountered this bug already.

3. Provide a demo that specifically shows the problem. This demo should be fully operational with the exception of
the bug you want to demonstrate. The more pared down, the better. Issues with demos are prioritized.

4. Your issue will be verified. The provided demo will be tested for correctness. The sl-ember-components team will
work with you until your issue can be verified.

5. Keep up to date with feedback from the sl-ember-components team on your ticket. Your ticket may be closed if it
becomes stale.

6. If possible, submit a Pull Request with a failing test. Better yet, take
a stab at fixing the bug yourself if you can!

The more information you provide, the easier it is for us to validate that
there is a bug and the faster we'll be able to take action.

## Requesting a Feature

1. Search Issues for similar feature requests. It's possible somebody has already asked
for this feature or provided a pull request that we're still discussing.

2. Provide a clear and detailed explanation of the feature you want and why it's important to add. Keep in mind that
we want features that will be useful to the majority of our users and not just a small subset. If you're just
targeting a minority of users, consider writing your own addon library for `ember-cli` that extends this one.

3. If the feature is complex, consider writing some initial documentation for it. If we do end up accepting the
feature it will need to be documented and this will also help us to understand it better ourselves.

4. Attempt a Pull Request. If you are willing to help the project out, you can submit a Pull Request. We always have
more work to do than time to do it. If you can write some code then that will speed the process along.

# Pull Requests

## Contributer License Agreement
Contributions to the sl-ember-components project require the submission of a contributer license agreement. Individual
contributers should review and complete the [Individual CLA](CLA-INDIVIDUAL.md). Contributions made on behalf of a
company/employer will necessitate the completion of the [Corporate CLA](CLA-CORPORATE.md).

If you have any questions about either of these documents please contact the same individual listed in the documents
you are to send your completed copies to.

## We love pull requests!
Here's a quick guide:

1. Fork the repo.

2. Run the tests. We only take pull requests with passing tests, and it's great to know that you have a clean slate:
`npm install && bower install && ember test`.

3. Add a test for your change. Only refactoring and documentation changes require no new tests. If you are adding
functionality or fixing a bug, we need a test!

4. Make the test pass.

5. Make sure your code follows the [Ember.js Style Guide](https://github.com/softlayer/ember-style-guide).  This addon leverages the [sl-eslint](https://github.com/joshforisha/sl-eslint) addon to
enforce compliance with these guides.  Simply run `npm run lint-all` to confirm compliance.

6. Document your code and make sure the documentation is still able to generate and creates the result you are
expecting.  This addon leverages the [ember-cli-jsdoc](https://github.com/softlayer/ember-cli-jsdoc) addon to
generate documentation.  Simply run either `ember ember-cli-jsdoc` or `npm run docs` (shortcut setup in this repo)
and then visit *http://localhost:4200/docs*.  You will need to be running Node version 5+ for the documentation to generate correctly.

7. Commit your changes.
    * If your pull request fixes an issue specify it in the commit message. Here's an example:
`git commit -m "Close #12 Fix passing of context"`.
[GitHub offers additional examples here.](https://help.github.com/articles/closing-issues-via-commit-messages/)
    * Follow [these instructions](http://chris.beams.io/posts/git-commit/#imperative) on how to write a commit message, paying particular attention to [#5](http://chris.beams.io/posts/git-commit/#imperative) and [#7](http://chris.beams.io/posts/git-commit/#why-not-how).

8. Push to your fork and submit a pull request againt the `master` branch. Please provide us with some explanation of why you made the changes you made. For new features make sure to explain a standard use case to us.

We try to be quick about responding to tickets but sometimes we get a bit backlogged.  If the response is slow, try
to find someone on IRC(#softlayer) to give the ticket a review.

Some things that will increase the chance that your pull request is accepted include:

* Include tests that fail without your code, and pass with it.
* Update the documentation, the surrounding one, examples elsewhere, guides, whatever is affected by your
contribution.
* Follow the [Ember.js Style Guide](https://github.com/softlayer/ember-style-guide).


And in case we didn't emphasize it enough: **we love tests!**

NOTE: Partially copied from https://raw.githubusercontent.com/stefanpenner/ember-cli/master/CONTRIBUTING.md
