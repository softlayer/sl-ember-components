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

An text input component to select date values. Based on [bootstrap-datepicker](http://bootstrap-datepicker.readthedocs.org/en/release/index.html).

### Properties
* _autoclose_ : Boolean; whether or not to close the datepicker immediately when a date is selected (default: false)
* _beforeShowDay_ : A function that takes a date as a parameter and returns one of the following:
    * undefined to have no effect
    * A boolean, indicationg whether or not this date is selectable
    * A string, representing additional CSS classes to apply to the date's cell
    * An object with the following properties:
        * _enabled_ : Same as the boolean value above
        * _classes_ : Same as the string value above
        * _tooltip_ : A tooltip to apply to this date, via the `title` attribute
* _calendarWeeks_ : Boolean; whether or not to show week numbers to the left of week rows (default: false)
* _clearBtn_ : Boolean; if true, displays a "Clear" button at the bottom of the datepicker to clear the input value. If "autoclose" is also set to true, this button will also close the datepicker (default: false)

* Days of the week that should be disabled. Values are 0 (Sunday) to
* 6 (Saturday). Multiple values should be comma-separated.
* @property {array|string} daysOfWeekDisabled
* @default []

* The latest date that may be selected; all later dates will be disabled.
* @property {date} endDate
* @default null

* Whether or not to force parsing of the input value when the picker is
* closed. That is, when an invalid date is left in the input field by the
* user, the picker will forcibly parse that value, and set the input's
* value to the new, valid date, conforming to the given _format_.
* @property {boolean} forceParse
* @default true

* The date format; combination of d, dd, D, DD, m, mm, M, MM, yy, yyyy
* - d, dd: Numeric date, no leading zero and leading zero, respectively
* - D, DD: Abbreviated and full weekday names, respectively
* - m, mm: Numeric month, no leading zero and leading zero, respectively
* - M, MM: Abbreviated and full month names, respectively
* - yy, yyyy: 2- and 4-digit years, respectively
* @property {string} format
* @default 'mm/dd/yyyy'

* A list of inputs to be used in a range picker, which will be attached to
* the selected element. Allows for explicitly creating a range picker on a
* non-standard element.
* @property {array} inputs
* @default null

* Whether or not to allow date navigation by arrow keys
* @property {boolean} keyboardNavigation
* @default true

* The IETF code of the language to use for month and day names
* @property {string} language
* @default 'en'

* Set a limit for the view mode. Accepts 'days', 'months', or 'years'.
* @property {string} minViewMode
* @default 'days'

* Enable multidate picking
* @property {boolean} multidate
* @default false

* The string that will appear between dates when multidate is true
* @property {string} multidateSeparator
* @default ','

* A space-separated string consisting of one or two of "left" or "right",
* "top" or "bottom", and "auto" (may be omitted). Refers to the location
* of the picker popup's "anchor".
* @property {string} orientation
* @default 'auto'

* The earliest date that may be selected; all earlier dates will be disabled
* @property {date} startDate
* @default null

* The view that the datepicker should show when it is opened. Accepts
* "month", "year", or "decade".
* @property {string} startView
* @default 'month'

* If true or "linked", displays a "Today" button at the bottom of the
* datepicker to select the current date. If true, the "Today" button will
* only move the current date into view; if "linked", the current date will
* also be selected.
* @property {boolean|string} todayBtn
* @default false

* Whether to highlight the current date or not
* @property {boolean} todayHighlight
* @default false

* Day of the week to start on. 0 (Sunday) to 6 (Saturday)
* @property {number} weekStart
* @default 0

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
* __key__ : String for each row's value lookup (required)
* __title__ : String for the column header title (required)

---

## sl-input

Wrapper component for a text &lt;input&gt; element; includes label and help text options. See [Bootstrap - Forms](http://getbootstrap.com/css/#forms) for low-level details.

### Properties
* _disabled_ : Boolean used for disabled indication, and `disabled` attribute value of the input
* _helpText_ : Text to display below the input element
* _inputId_ : `id` attribute value of the input (default based on generated component ID)
* _label_ : String for label text to display above the input
* _placeholder_ : `placeholder` attribute value of the input
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
