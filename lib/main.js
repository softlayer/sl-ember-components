import SlButtonComponent      from './components/sl-button';
import SlCalendarComponent    from './components/sl-calendar';
import SlCheckboxComponent    from './components/sl-checkbox';
import SlDropbuttonComponent  from './components/sl-dropbutton';
import SlGridComponent        from './components/sl-grid';
import SlInputComponent       from './components/sl-input';
import SlSelectComponent      from './components/sl-select';
import SlSelectDateComponent  from './components/sl-selectdate';
import SlSimpleModalComponent from './components/sl-simplemodal';
import SlTabPanelComponent    from './components/sl-tabpanel';
import SlTextareaComponent    from './components/sl-textarea';
import MainInitializer        from './initializers/main';

Ember.Application.initializer( MainInitializer );

Ember.libraries.register( 'sl-components', '0.2.0' );

/**
 * The sl-components UI component library
 *
 * @version 0.2.0
 */
export {
    MainInitializer,
    SlButtonComponent,
    SlCalendarComponent,
    SlCheckboxComponent,
    SlDropbuttonComponent,
    SlGridComponent,
    SlInputComponent,
    SlSelectComponent,
    SlSelectDateComponent,
    SlSimpleModalComponent,
    SlTabPanelComponent,
    SlTextareaComponent
};
