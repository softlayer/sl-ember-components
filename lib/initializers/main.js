import SlCalendarComponent    from '../components/sl-calendar';
import SlCalendarTemplate     from '../templates/sl-calendar';
import SlCheckboxComponent    from '../components/sl-checkbox';
import SlCheckboxTemplate     from '../templates/sl-checkbox';
import SlDropbuttonComponent  from '../components/sl-dropbutton';
import SlDropbuttonTemplate   from '../templates/sl-dropbutton';
import SlInputComponent       from '../components/sl-input';
import SlInputTemplate        from '../templates/sl-input';
import SlSelectComponent      from '../components/sl-select';
import SlSelectTemplate       from '../templates/sl-select';
import SlSelectDateComponent  from '../components/sl-selectdate';
import SlSelectDateTemplate   from '../templates/sl-selectdate';
import SlSimpleModalComponent from '../components/sl-simplemodal';
import SlSimpleModalTemplate  from '../templates/sl-simplemodal';
import SlTableComponent       from '../components/sl-table';
import SlTableTemplate        from '../templates/sl-table';
import SlTextareaComponent    from '../components/sl-textarea';
import SlTextareaTemplate     from '../templates/sl-textarea';

export default {
    name: 'sl-components',

    initialize: function ( container ) {
        container.register( 'template:components/sl-calendar', SlCalendarTemplate );
        container.register( 'components:sl-calendar', SlCalendarComponent );

        container.register( 'template:components/sl-checkbox', SlCheckboxTemplate );
        container.register( 'components:sl-checkbox', SlCheckboxComponent );

        container.register( 'template:components/sl-dropbutton', SlDropbuttonTemplate );
        container.register( 'components:sl-dropbutton', SlDropbuttonComponent );

        container.register( 'template:components/sl-input', SlInputTemplate );
        container.register( 'components:sl-input', SlInputComponent );

        container.register( 'template:components/sl-select', SlSelectTemplate );
        container.register( 'components:sl-select', SlSelectComponent );

        container.register( 'template:components/sl-selectdate', SlSelectDateTemplate );
        container.register( 'components:sl-selectdate', SlSelectDateComponent );

        container.register( 'template:components/sl-simplemodal', SlSimpleModalTemplate );
        container.register( 'components:sl-simplemodal', SlSimpleModalComponent );

        container.register( 'template:components/sl-table', SlTableTemplate );
        container.register( 'components:sl-table', SlTableComponent );

        container.register( 'template:components/sl-textarea', SlTextareaTemplate );
        container.register( 'components:sl-textarea', SlTextareaComponent );
    }
};
