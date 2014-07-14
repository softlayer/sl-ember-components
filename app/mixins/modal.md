## SL-Components Modal

In trying to find a good balance between support for complex scenarios (i.e. modals that need the full Ember "stack" of template, view & controller) and supporting ease of use for more lightweight circumstances, I've come to the following implementation for modal support in sl-components.

### Mixins/Modal
The first of two supporting mixins for modals is the....Modal mixin.  This mixin is intended to provide basic modal functionality to a traditional Ember View and does so by adding the following things to view:
 * sets the layoutName property to 'modal'
 * adds class names 'modal' & 'fade'
 * adds an action handler 'close' that closes the modal the current view is supporting

The most important parts here are the layoutName, which allows us to wrap the bootstrap specified outer DIVs and the class names, which also tie in to bootstrap support.

### Mixins/Modal Manager
The Modal Manager isn't absolutely necessary, but I wanted to abstract the typical use case for launching these modals and this was the best way I could think of initially.  Essentially, this can be added to a controller or route and will add a 'showModal' action handler with the following properties:

 * showModal
   * selector - The jQuery selector for the modal you wish to launch, i.e. '.my-modal' (required)
   * controller - The controller (either string name or instance) you wish to support the modal.  NOTE:  Since this is NOT going to actually call render on the modal, but merely proxy the passed in model to the controller specified, you will need to use the render helper if you wish to generate a controller for your modal (more below). (optional)
   * model - Any data you wish to hand to the specified controller (optional)

### How to Use

To use the modal, you're going to want to do 3 things:

1) In your View file, mix in the Modal mixin.

    import Ember from 'ember';
    import ModalMixin from 'testapp/mixins/modal';

    export default Ember.View.extend( ModalMixin, {

        classNames: [ 'my-modal' ]

    });

2) In your template where you would like the modal to display, use either the `render` or `view` helper to inject the view into the page.


    <button>Show My Modal</button>
    ...
    {{view 'mymodal'}}


The main thing to keep in mind here is whether or not you have created a controller for this modal.  If so, use the `render` helper so that Ember generates an instance of your controller.  If you want the modal to be run and supported by the page's controller (or do not need support from a controller), simply using the `view` helper should suffice.


3) In the route or controller that you wish to be responsible for actually launching the modal, mix in the Mixinmodel mixin.


    import Ember from 'ember';
    import ModalManagerMixin from 'testapp/mixins/modalmanager';

    export default Ember.Route.extend( ModalManagerMixin, {
    });


This will provide support for the `showModal` action which you can then wire to whatever launch mechanism you would like, i.e. our button from step #2:


    <button {{action "showModal" ".my-modal" bubbles=false}}>Show My Modal</button>


The `showModal` action handler supports 3 parameters as described above and allow you to pass in a controller to use as well as the data you would like put on that controller (this allows for reuse of the controller).  Any value sent in to the `model` parameter will be set on the controller's `modalContent` property, so make sure to set this property on any controller you would like to use.


### EXAMPLE TIME
Here is a full example of an application that uses a list of buttons and shares a modal to provide a welcome message to each person who checks in by clicking the button with their name:


routes/index.js:

    import Ember from 'ember';
    import ModalManager from 'testapp/mixins/modalmanager';

    export default Ember.Route.extend( ModalManager, {

        setupController: function( controller, model ) {
            controller.set( 'content', Em.A([ 'Josh', 'Jeremy', 'Matt', 'Josh 2', 'Dan', 'Ryan' ]));
        }

    });


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


templates/hello.js:

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
    import ModalMixin from 'testapp/mixins/modal';

    export default Ember.View.extend( ModalMixin, {

        classNames: [ 'hello' ]

    });
