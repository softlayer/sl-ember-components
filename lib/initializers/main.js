import IfcCalendarComponent    from '../components/ifc-calendar';
import IfcCalendarTemplate     from '../templates/ifc-calendar';
import IfcCheckboxComponent    from '../components/ifc-checkbox';
import IfcCheckboxTemplate     from '../templates/ifc-checkbox';
import IfcDropbuttonComponent  from '../components/ifc-dropbutton';
import IfcDropbuttonTemplate   from '../templates/ifc-dropbutton';
import IfcInputComponent       from '../components/ifc-input';
import IfcInputTemplate        from '../templates/ifc-input';
import IfcSelectComponent      from '../components/ifc-select';
import IfcSelectTemplate       from '../templates/ifc-select';
import IfcSelectDateComponent  from '../components/ifc-selectdate';
import IfcSelectDateTemplate   from '../templates/ifc-selectdate';
import IfcSimpleModalComponent from '../components/ifc-simplemodal';
import IfcSimpleModalTemplate  from '../templates/ifc-simplemodal';
import IfcTableComponent       from '../components/ifc-table';
import IfcTableTemplate        from '../templates/ifc-table';
import IfcTextareaComponent    from '../components/ifc-textarea';
import IfcTextareaTemplate     from '../templates/ifc-textarea';

export default {
    name: 'interface-components',

    initialize: function ( container ) {
        container.register( 'template:components/ifc-calendar', IfcCalendarTemplate );
        container.register( 'components:ifc-calendar', IfcCalendarComponent );

        container.register( 'template:components/ifc-checkbox', IfcCheckboxTemplate );
        container.register( 'components:ifc-checkbox', IfcCheckboxComponent );

        container.register( 'template:components/ifc-dropbutton', IfcDropbuttonTemplate );
        container.register( 'components:ifc-dropbutton', IfcDropbuttonComponent );

        container.register( 'template:components/ifc-input', IfcInputTemplate );
        container.register( 'components:ifc-input', IfcInputComponent );

        container.register( 'template:components/ifc-select', IfcSelectTemplate );
        container.register( 'components:ifc-select', IfcSelectComponent );

        container.register( 'template:components/ifc-selectdate', IfcSelectDateTemplate );
        container.register( 'components:ifc-selectdate', IfcSelectDateComponent );

        container.register( 'template:components/ifc-simplemodal', IfcSimpleModalTemplate );
        container.register( 'components:ifc-simplemodal', IfcSimpleModalComponent );

        container.register( 'template:components/ifc-table', IfcTableTemplate );
        container.register( 'components:ifc-table', IfcTableComponent );

        container.register( 'template:components/ifc-textarea', IfcTextareaTemplate );
        container.register( 'components:ifc-textarea', IfcTextareaComponent );
    }
};
