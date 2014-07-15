# sl-components
## v0.7.0

The SoftLayer UI components library used for all Interface Ember projects.

---

## sl-alert

A message box component for short alert messages. Based on [Bootstrap - Alert messages](http://getbootstrap.com/javascript/#alerts).

### Properties
* _dismissable_ : Boolean to show dismiss button (default: false)
* _theme_ : String for bootstrap style type; 'danger', 'info' (default), 'primary', 'warning'

---

## sl-badge

A simple span used to label counts of objects. Based on [Bootstrap - Badges](http://getbootstrap.com/components/#badges).

### Properties
* _pullRight_ : Boolean to pull the badge all the way to the right of the containing element (default: false)
* _value_ : Bound value for the badge's span

## sl-button

An active &lt;button&gt; component. Based on [Bootstrap - Buttons](http://getbootstrap.com/css/#buttons).

### Properties
* _action_ : Name of an action to fire when the button is clicked
* _activeLabelText_ : Text to display during associated AJAX activity (requires ajaxEnabled=true)
* _ajaxEnabled_ : Allow behaviors to be bound to associated AJAX activity
* _class_ : `class` attribute value for the button
* _disableOnAjax_ : When true, button will become disabled during associated AJAX activity (requires ajaxEnabled=true)
* _disabled_ : Boolean that determines whether the button is disabled (default: false)
* _hideOnAjax_ : When true, button will become hidden during associated AJAX activity (requires ajaxEnabled=true)
* _label_ : Text label on the button
* _theme_ : String for bootstrap style type; 'danger', 'default' (default), 'info', 'primary', 'success', 'warning'
* _urlScope_ : A string or regular expression used to scope associated AJAX activity

---

## sl-calendar

*Coming soon*

---

## sl-chart

*Coming soon*

---

## sl-checkbox

An improved substitute for the default &lt;input type="checkbox"&gt; element. See [Bootstrap - Supported controls](http://getbootstrap.com/css/#forms-controls) for low-level details.

### Properties
* _disabled_ : Boolean to disable the checkbox (default: false)
* _label_ : String to display beside the checkbox
* _name_ : `name` attribute value for the input
* _value_ : Bound value for the checkbox

---

## sl-datepicker

*Coming soon*

---

## sl-dropbutton

A combination of a button with a drop-down menu, with triggered actions. Utilizes [Bootstrap - Dropdowns](http://getbootstrap.com/javascript/#dropdowns).

### Properties
* _label_ : String label value for text on the button
* _content_ : Array of objects representing the dropdown items (see below)
* _theme_ : String for bootstrap button style type; 'danger', 'default' (default), 'info', 'primary', 'success', 'warning'

### Content item properties
* _action_ : String for the name of the controller's action to call when option is clicked
* _label_ : String label for the option label text

---

## sl-grid

Custom grid table component (being worked on currently).

### Properties
* __columns__ : Array of column definitions (required; see below)
* __rows__ : Array of row objects (required)

### Column item properties
* _key_ : String for each row's value lookup (required if no template is supplied)
* template : String name of the template to render (required if no key is supplied)
* __title__ : String for the column header title (required)

---

## sl-input

Wrapper component for a text &lt;input&gt; element; includes label and help text options. See [Bootstrap - Forms](http://getbootstrap.com/css/#forms) for low-level details.

### Properties
* _disabled_ : Boolean used for disabled indication, and `disabled` attribute value of the input
* _helpText_ : Text to display below the input element
* _inputId_ : `id` attribute value of the input (default based on generated component ID)
* __label__ : String for label text to display above the input (required)
* _placeholder_ : `placeholder` attribute value of the input
* _srOnly_ : Boolean to hide the label for non-screenreaders (default: false)
* _type_ : `type` attribute value of the input (default: 'text')
* _value_ : Bound value for the input

---

## sl-label

A small component to display a text label in a styled container. Based on [Bootstrap - Labels](http://getbootstrap.com/components/#labels).

### Properties
* _label_ : Text to display in the label
* _theme_ : String for bootstrap style type; 'danger', 'default' (default), 'info', 'primary', 'success', 'warning'

---

## sl-modal

A simple modal component used to wrap content in. Based on [Bootstrap - Modals](http://getbootstrap.com/javascript/#modals).

### Properties
* _accept_ : Action to call when accept button is clicked
* _acceptText_ : Text label for the accept button (default: 'Accept')
* _close_ : Action to call when one of the close buttons is clicked
* _fade_ : Boolean to enable fade animation (default: false)
* _title_ : Title at the top of the modal (default: null)

---

## sl-progressbar

A component used to display progress. Based on [Bootstrap - Progress bars](http://getbootstrap.com/components/#progress).

### Properties
* _active_ : Boolean to animate the progress bar's stripes (default: false; requires striped=true)
* _striped_ : Boolean to style the progress bar with stripes (default: false)
* _theme_ : String for bootstrap style type; 'danger', 'info', 'primary' (default), 'success', 'warning'
* __value__ : Bound integer value for the progress \[0-100\] (required)

---

## sl-radiogroup

A component that contains a group of "radio" type inputs. See [Bootstrap - Supported controls](http://getbootstrap.com/css/#forms-controls) for low-level details.

### Properties
* _inline_ : Boolean to display the radio inputs inline with each other (default: false)
* _name_ : Shared `name` attribute for the radio inputs
* __content__ : Array of radio definitions (required, see below)

### Content item properties
* _disabled_ : `disabled` attribute value
* _label_ : String label for radio button
* __value__ : `value` attribute value

---

## sl-select

A full-featured select input. Based on [Select2](http://ivaynberg.github.io/select2/).

### Properties
* _content_ : Bound content for the select's options
* _optionLabelPath_ : String for option's label field
* _optionValuePath_ : String for option's value field
* _placeholder_ : `placeholder` attribute value for the select
* _value_ : Current/initial value

---

## sl-tabpanel

A combined component with selectable tabs and related tab panes. Based on [Bootstrap - Tooglable tabs](http://getbootstrap.com/javascript/#tabs).

### Properties
* _activeTabName_ : String for the name of the initial tab to open
* __content__ : Array of tab data objects (required; see below)

### Content item properties
* __name__ : String for the tab label and internal identification (required)
* __template__ : String name of the template to render into the tab panel (required)

---

## sl-textarea

A Bootstrap-wrapped component based on Ember's textarea helper.

### Properties
* _cols_ : `cols` attribute value
* _disabled_ : `disabled` attribute value
* _maxlength_ : `maxlength` attribute value
* _rows_ : `rows` attribute value
* _placeholder_ : `placeholder` attribute value
* _tabindex_ : `tabindex` attribute value
* _value_ : Bound value for the textarea

---

# Development

When incrementing the library's version number, be sure to update it in these files:

* bower.json
* package.json
* README.md
* yuidoc.json
