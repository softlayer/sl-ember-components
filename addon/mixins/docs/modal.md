## mixins/sl-modal

This mixin is intended to provide basic modal functionality to a traditional Ember View and does so by adding the following things to the view:

 * sets the layoutName property to 'modal'
 * adds class names 'modal' & 'fade'
 * sets (or supports the setting of) these attribute values:
    * aria-describedby
    * aria-hidden
    * aria-labelledby
    * tabindex
 * adds an action handler 'close' that closes the modal the current view is supporting
 * provides hooks into the exposed Twitter Bootstrap 3 modal events:
    * show.bs.modal
    * shown.bs.modal
    * hide.bs.modal
    * hidden.bs.modal
    * loaded.bs.modal

The most important parts here are the layoutName, which allows us to wrap the Twitter Bootstrap-specified outer DIVs and the class names, which also tie into Twitter Bootstrap support.  To support this layout, sl-ember-components also contains a *template/modal.hbs* file that includes the DOM to wrap around the template.

## mixins/sl-modal-manager

This mixin can be added to a controller or route and will add a 'showModal' action handler that accepts the following arguments:

* selector (required)

    * The jQuery selector for the modal you wish to launch, i.e. '.my-modal'

* controller (optional)
    * The controller (either string name or instance) you wish to support the modal

    NOTE:  Since this is NOT going to actually call render on the modal, but merely proxy the passed in model to the controller specified, you will need to use the render helper if you wish to generate a controller for your modal (there is more on this below).
* model (optional)
    * Any data you wish to hand to the specified controller

## How to use these mixins

To use the modal, you're going to want to do 3 things:

1) In your View file, mix in the sl-modal mixin.

    import Ember from 'ember';
    import ModalMixin from 'sl-ember-components/mixins/sl-modal';

    export default Ember.View.extend( ModalMixin, {
        classNames: [ 'my-modal' ]
    });

2) In your template where you would like the modal to display, use either the `render` or `view` helper to inject the view into the page.

    <button>Show My Modal</button>
    ...
    {{view 'mymodal'}}


The main thing to keep in mind here is whether or not you have created a controller for this modal.  If so, use the `render` helper so that Ember generates an instance of your controller.  If you want the modal to be run and supported by the page's controller (or do not need support from a controller), simply using the `view` helper should suffice.


3) In the route or controller that you wish to be responsible for actually launching the modal, mix in the sl-modal-manager mixin.

    import Ember from 'ember';
    import ModalManager from 'sl-ember-components/mixins/sl-modal-manager';

    export default Ember.Route.extend( ModalManager, {
    });


This will provide support for the `showModal` action which you can then wire to whatever launch mechanism you would like, i.e. our button from step #2:


    <button {{action "showModal" ".my-modal" bubbles=false}}>Show My Modal</button>


The `showModal` action handler accepts 3 arguments as previously described and allows you to pass in a controller to use, as well as the data you would like put on that controller (this allows for reuse of the controller).  Any value sent in to the `model` parameter will be set on the controller's `modalContent` property, so make sure to set this property on any controller you would like to use.


## ARIA Support

**aria-labelledby**

It is a good practice to set the *aria-labelledby* attribute.  The *sl-modal* mixin can help you do this automatically though you will still need to direct it to the element containing the appropriate information:

    <div class="modal-header">
        <h4 class="modal-title" {{bind-attr id=view.aria-labelledby}}>Keyboard Shortcuts</h4>
    </div>

Also note the use of the *modal-title* class.  While not required for ARIA support it is still considered best practice to use this for styling purposes


**aria-describedby**

It is a good practice to set the *aria-describedby* attribute.  To do so set the *aria-describedby* property in your view which contains *sl-modal* mixin.  It should be a space-separated list of element IDs, such as:

    import Ember from 'ember';
    import ModalMixin from 'sl-ember-components/mixins/sl-modal';

    export default Ember.View.extend( ModalMixin, {
        classNames: [ 'myClassName' ],

        'aria-describedby': 'idOne idTwo idThree'
    });

These are the IDs of the elements that describe the object. See [Using the aria-describedby attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute) for more information.



## Code Example #1

Here is a full example of an application that uses a list of buttons and shares a modal to provide a welcome message to each person who checks in by clicking the button with their name:


routes/index.js:

    import Ember from 'ember';
    import ModalManager from 'sl-ember-components/mixins/sl-modal-manager';

    export default Ember.Route.extend( ModalManager, {
        setupController: function( controller, model ) {
            controller.set( 'content', [ 'Josh', 'Jeremy', 'Matt', 'Dan', 'Ryan' ]);
        }
    });


controllers/index.js

    import Ember from 'ember';

    export default Ember.ArrayController.extend();


templates/index.hbs:

    <ul class="list-unstyled">
    {{#each controller}}
        <li><button class="btn btn-primary" {{action "showModal" ".hello" "hello" this bubbles=false}}>Check in: {{this}}</button></li>
    {{/each}}
    </ul>

    {{render "hello"}}


controllers/hello.js:

    import Ember from 'ember';

    export default Ember.ObjectController.extend({
        modalContent: null
    });


templates/hello.hbs:

    <div class="modal-header">
        Hello {{modalContent}}
    </div>
    <div class="modal-body">
        Thank you for clicking the check in button, {{modalContent}}
    </div>
    <div class="modal-footer">
        <button class="btn btn-primary" {{action "close" target="view" bubbles=false}}>Close</button>
    </div>


views/hello.js:

    import Ember from 'ember';
    import ModalMixin from 'sl-ember-components/mixins/sl-modal';

    export default Ember.View.extend( ModalMixin, {
        classNames: [ 'hello' ]
    });


## Code Example #2

This is an example of implementing ARIA support and tying into Twitter Bootstrap 3's modal events:

views/modals/keyboard-shortcut-list.js:

    import Ember from 'ember';
    import ModalMixin from 'sl-ember-components/mixins/sl-modal';

    export default Ember.View.extend( ModalMixin, {
        'aria-describedby': 'describe-kb-global',

        showHandler: function() {
            // pause keyboard bindings on modal show
        },

        hideHandler: function() {
            // unpause keyboard bindings on modal hide
        },
    });


templates/modals/keyboard-shortcut-list.hbs:

    <div class="modal-header">
        <div class="modal-title" {{bind-attr id=view.aria-labelledby}}>Keyboard Shortcuts</div>
    </div>

    <div class="modal-body">
        <div id="describe-kb-global">Description of keyboard shortcuts</div>
    </div>

    <div class="modal-footer">
        <button class="btn btn-primary" {{action "close" target="view" bubbles=false}}>Close</button>
    </div>
