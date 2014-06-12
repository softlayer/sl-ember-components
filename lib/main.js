import IfcCalendarComponent    from './components/ifc-calendar';
import IfcCheckboxComponent    from './components/ifc-checkbox';
import IfcDropbuttonComponent  from './components/ifc-dropbutton';
import IfcInputComponent       from './components/ifc-input';
import IfcSelectComponent      from './components/ifc-select';
import IfcSelectDateComponent  from './components/ifc-selectdate';
import IfcSimpleModalComponent from './components/ifc-simplemodal';
import IfcTableComponent       from './components/ifc-table';
import IfcTextareaComponent    from './components/ifc-textarea';
import MainInitializer         from './initializers/main';

Ember.Application.initializer( MainInitializer );

Ember.libraries.register( 'interface-components', '0.0.1' );

export {
    MainInitializer,
    IfcCalendarComponent,
    IfcCheckboxComponent,
    IfcDropbuttonComponent,
    IfcInputComponent,
    IfcSelectComponent,
    IfcSelectDateComponent,
    IfcSimpleModalComponent,
    IfcTableComponent,
    IfcTextareaComponent
};
