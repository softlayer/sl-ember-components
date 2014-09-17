# sl-components

The SoftLayer UI components library used for all Interface Ember projects.

---

# Demo

Run the addon as its own Ember app to view the demo pages.

```sh
ember serve
```

You can also simply build it as an Ember app, then view the `dist/` folder, or change its `--output-path`.

```sh
ember build --output-path somewhere/else/
```

---

# Using sl-components in an Ember app

The sl-components library needs to be included as a Node module, then its blueprint should be run to properly pull in all dependency libraries.

```sh
npm install --save-dev git@gitlab.softlayer.local:interface/sl-components#develop
ember generate sl-components
```

---

# Development

When incrementing the library's version number, be sure to update it in these files:

* bower.json
* package.json
* yuidoc.json
