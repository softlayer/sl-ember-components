# sl-components
## v0.3.2

The SoftLayer UI components library used for all Interface Ember projects.

----

## sl-button

A simple substitute for a plain &lt;button&gt; element. Currently based on [EmberUI's Button](http://emberui.com/documentation/button).

### Parameters
* _action_ : Name of an action to fire when the button is clicked
* _class_ : String attribute value for the &lt;button&gt; element
* _disabled_ : Boolean that determines whether the button is disabled (default: false)
* _icon_ : Icon/CSS class name of icon to include with label text
* _label_ : Text label on the button
* _loading_ : Boolean to indicate the button's loading state
* _size_ : String denoting size of button; 'tiny', 'small', 'medium' (default), 'large'
* _style_ : Aesthetic style of button; 'default' (default), 'primary'
* _type_ : String attribute value for the &lt;button&gt; element
* _width_ : Width of the button, requires CSS unit

----

## sl-calendar

Calendar display with date selection and active month control. Based on [EmberUI's Calendar](http://emberui.com/documentation/calendar).

### Parameters
* _allowMultiple_ : Boolean to allow user to select multiple days (default: false)
* _continuousSelection_ : Boolean to allow user to select multiple days that are not adjacent to each other (default: true)
* _disableFuture_ : Boolean to prevent user from navigating into the future (default: false)
* _disablePast_ : Boolean to prevent user from navigation into the past (default: false)
* _disabledDates_ : Array of moment dates to indicate as disabled
* _maxFutureDate_ : Maximum future date, as a moment date
* _maxPastDate_ : Maximum past date, as a moment date
* _month_ : The month to render
* _selectAction_ : Name of an action to fire when a date is selected
* _selection_ : Date, or array of dates, to indicate selected, as moment dates
* _showNextMonth_ : Boolean to show the next month (default: true)
* _showPrevMonth_ : Boolean to show the previous month (default: false)
* _style_ : The aesthetic style string of the calendor; 'default' (default), 'popup'

----

## sl-checkbox

An Ember-friendly substitute for the default &lt;input type="checkbox"&gt; element. Based on [EmberUI's Checkbox](http://emberui.com/documentation/checkbox)

### Parameters
* _class_ : Text attribute value for the &lt;input&gt; element
* _disabled_ : Boolean to indicate disabled state (default: false)
* _error_ : Boolean or string to handle error (see [EmberUI error handling](http://emberui.com/documentation/errorhandling))
* _forceErrorCheck_ : Boolean to force an error check (default: false)
* _label_ : Text displayed next to the checkbox
* _size_ : String size; 'medium' (default); extended with [EmberUI theming](http://emberui.com/documentation/theming)
* _style_ : The aesthetic style string of the checkbox; 'default' (default)

----

## sl-dropbutton

A combination of a button with a drop-down menu, with triggered actions. Based on [EmberUI's Dropbutton](http://emberui.com/documentation/dropbutton).

### Parameters
* _animationStyle_ : String name of the animation style to use when toggling the menu; see [EmberUI animations](http://emberui.com/documentation/animations)
* _actions_ : Array of objects used for menu, with each menu item having a "label" string and an "action" string
* _disabled_ : Boolean to disable the button (default: false)
* _icon_ : Icon/CSS class name of icon to include with label text
* _label_ : Text displayed on the &lt;button&gt; element
* _listWidth_ : Width of the drop-down menu; requires CSS unit with value
* _loading_ : Boolean to indicate the button's loading state
* _size_ : String size of the button; same options as {{sl-button}}
* _style_ : Aesthetic style of the button; same options as {{sl-button}}

----

## sl-grid

Custom grid table component, based on [Addepar's ember-table](http://addepar.github.io/#/ember-table/overview).

### Parameters
* __columns__ (required) : Array of column definitions, with these options
* __content__ (required) : Array of row objects
* _enableColumnReorder_ : Boolean to allow the reorder of columns (default: true)
* _footerHeight_ : Minimum footer height, in pixels (default: 30)
* _forceFillColumns_ : Boolean to expand the columns to fill the given width (default: false)
* _hasFooter_ : Boolean to show the footer block (default: true)
* _hasHeader_ : Boolean to show the header block (default: true)
* _minHeaderHeight_ : Minimum header height, in pixels (default: 30)
* _numFixedColumns_ : Number of frozen columns from the left of the table (default: 0)
* _numFooterRow_ : Number of footer rows in the table (default: 0)
* _rowHeight_ : Row height, in pixels (default: 30)

### Column Options
* _canAutoResize_ : Boolean to have column resize to extra space in table (default: true)
* _contentPath_ : Path of the content for a cell, for a given row object
* _defaultColumnWidth_ : Width of the column on initialization
* _headerCellName_ : Text that appears in the column header
* _isResizable_ : Boolean to allow resizing of the column (default: true)
* _isSortable_ : Boolean to allow sorting of the column's content (default: true)
* _maxWidth_ : Maximum width of the column
* _minWidth_ : Minimum width of the column
* _textAlign_ : String determining text alignment; 'text-align-left', 'text-align-center', 'text-align-right' (default)

### Cell Options
* _classNameBindings_ : String used to dynamically associate class names with this cell
* _classNames_ : Array of string class names
* _styleBindings_ : String values which are bound to the cell's `style` attribute
* _templateName_ : Name of the template to be rendered into the cell

----

## sl-input

An Ember-friendly substitute for a plain &lt;input&gt;. Based on [EmberUI's Input](http://emberui.com/documentation/input).

### Parameters
* _action_ : Action to fire when the user presses `enter` in the input
* _disabled_ : Boolean to indicate the disabled state of the input
* _error_ : Boolean or string for error handling; see [EmberUI error handling](http://emberui.com/documentation/errorhandling)
* _forceErrorCheck_ : Boolean to force an error check on the input
* _placeholder_ : Placeholder string for the &lt;input&gt; element
* _size_ : String size of the input; 'tiny', 'small', 'medium' (default), 'large'
* _style_ : Aesthetic style of the input; 'default' (default)
* _type_ : String attribute value for the &lt;input&gt; element; 'text' (default), 'password'
* _value_ : Bound value of the input
* _width_ : String for the width of the input; requires CSS unit with value

----

## sl-select

A feature rich substitute for &lt;select&gt;, able to filter dynamically bound options. Based on [EmberUI's Select](http://emberui.com/documentation/select).

### Parameters
* _animationStyle_ : String for the style of animation used when toggling the options selection; see [EmberUI animations](http://emberui.com/documentation/animations)
* _disabled_ : Boolean to indicate the select's disabled state
* _error_ : Boolean or string for error handling; see [EmberUI error handling](http://emberui.com/documentation/errorhandling)
* _forceErrorCheck_ : Boolean to force an error check, even if value is blank
* _labelPath_ : String path to the label property for each of `options` (default: 'label')
* _listWidth_ : String for the width of the options popup; requires CSS unit with value
* _options_ : Array of objects used for options
* _placeholder_ : String placeholder label for select
* _required_ : Boolean to determine if a null value is invalid (default: false)
* _selection_ : Object value set to the current selection; null if nothing is selected
* _size_ : String size for the overall width of the select; 'tiny', 'small', 'medium' (default), 'large'
* _style_ : Aesthetic style of the select; 'default' (default), 'primary'
* _valuePath_ : String path to the value property for each of `options` (default: 'value')
* _value_ : Object that uses `valuePath` to look up the current `selection`
* _width_ : String for the width of the select; requires CSS unit with value

----

## sl-selectdate

Special select input to allow selection of a date or date range. Based on [EmberUI's SelectDate](http://emberui.com/documentation/selectdate).

### Parameters
* _animationStyle_ : String for the name of animation style; see [EmberUI animations](http://emberui.com/documentation/animations)
* _dateRange_ : Boolean to allow the user to select a range of dates (default: false)
* _disableFuture_ : Boolean to prevent user from navigating into the future (default: false)
* _disablePast_ : Boolean to prevent user from navigating into the past (default: false)
* _disabledDates_ : Array of moment dates to disable on the calendar
* _disabled_ : Boolean to indicate disabled state of select
* _error_ : Boolean or string used for error handling; see [EmberUI error handling](http://emberui.com/documentation/errorhandling)
* _forceErrorCheck_ : Boolean to force error checking, even if value is blank
* _formatting_ : Hash settings to use when formatting the date for display; see [Twix.js formatting](http://emberui.com/documentation/isaaccambron.com/twix.js/#smartFormatting)
* _maxFutureDate_ : Maximum future date, as moment date
* _maxPastDate_ : Maximum past date, as moment date
* _placeholder_ : Placeholder string for the select input
* _selection_ : Moment or array of moments, equal to the currently selected date(s)
* _size_ : String for the overall button size; 'tiny', 'small', 'medium' (default), 'large'
* _style_ : Aesthetic style of the button; 'default' (default), 'primary'
* _value_ : Unix time stamp or array of time stamps, equal to the currently selected date(s)
* _width_ : String width of the select; requires CSS unit with value

----

## sl-simplemodal

A basic modal intended for use with simpler display of data. Based on [EmberUI's Modal](http://emberui.com/documentation/modal).

### Parameters
* _animationStyle_ : Name of the animation style to use for animations; see [EmberUI animations](http://emberui.com/documentation/animations)
* _class_ : String value for the `class` attribute of the modal's element
* _style_ : Aesthetic style of the modal; 'default' (default), 'full'
* _enforceModality_ : Boolean to prevent `esc` from closing the model (default: false)
* _open_ : Boolean used to show and hide the modal
* _targetObject_ : Object used as target of triggered events
* _accept_ : Action used for acceptance of modal
* _cancel_ : Action called if the user closes the modal by pressing `esc`

----

## sl-tabpanel

A custom, unified tab panel component. Combines [bs_for_ember's Tabs](http://ember-addons.github.io/bootstrap-for-ember/#/show_components/tabs) and [bs_for_ember's TabsPanes](http://ember-addons.github.io/bootstrap-for-ember/#/show_components/tabs-panes).

### Parameters
* _content_ : Array of objects that contain a column `label` and a template name `template`
* _selected_ : The currently selected tab pane; `null` to close all panes

----

## sl-textarea

An Ember-friendly substitute for a plain &lt;textarea&gt; input. Based on [EmberUI's Textarea](http://emberui.com/documentation/textarea).

### Parameters
* _placeholder_ : String value for the `placeholder` attribute on the &lt;textarea&gt; element
* _value_ : Value of the textarea
* _style_ : Aesthetic style of the textarea; 'default' (default)
* _size_ : String for the overall size of the textarea; 'tiny', 'small', 'medium' (default), 'large'
* _width_ : String width of the textarea; requires CSS unit with value
* _height_ : Height of the textarea; requires CSS unit with value
* _disabled_ : Boolean used to indicate disabled state for textarea
* _error_ : Boolean or string for error handling; see [EmberUI error handling](http://emberui.com/documentation/errorhandling)
* _forceErrorCheck_ : Boolean to force error handling, even when value is blank
