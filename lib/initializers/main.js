import SlButtonComponent      from '../components/sl-button';
import SlButtonTemplate       from '../templates/sl-button';
import SlCalendarComponent    from '../components/sl-calendar';
import SlCalendarTemplate     from '../templates/sl-calendar';
import SlCheckboxComponent    from '../components/sl-checkbox';
import SlCheckboxTemplate     from '../templates/sl-checkbox';
import SlDropbuttonComponent  from '../components/sl-dropbutton';
import SlDropbuttonTemplate   from '../templates/sl-dropbutton';
import SlGridComponent        from '../components/sl-grid';
import SlGridTemplate         from '../templates/sl-grid';
import SlInputComponent       from '../components/sl-input';
import SlInputTemplate        from '../templates/sl-input';
import SlSelectComponent      from '../components/sl-select';
import SlSelectDateComponent  from '../components/sl-selectdate';
import SlSelectDateTemplate   from '../templates/sl-selectdate';
import SlSelectTemplate       from '../templates/sl-select';
import SlSimpleModalComponent from '../components/sl-simplemodal';
import SlSimpleModalTemplate  from '../templates/sl-simplemodal';
import SlTabPanelComponent    from '../components/sl-tabpanel';
import SlTabPanelTemplate     from '../templates/sl-tabpanel';
import SlTextareaComponent    from '../components/sl-textarea';
import SlTextareaTemplate     from '../templates/sl-textarea';

/**
 * The sl-components initializer
 */
export default {
    name: 'sl-components',

    /**
     * Registers all relevant components and templates to the app's container
     *
     * @param {Ember Container} container - The importing app's container
     */
    initialize: function ( container ) {
        container.register( 'template:components/sl-button', SlButtonTemplate );
        container.register( 'component:sl-button', SlButtonComponent );

        container.register( 'template:components/sl-calendar', SlCalendarTemplate );
        container.register( 'component:sl-calendar', SlCalendarComponent );

        container.register( 'template:components/sl-grid', SlGridTemplate );
        container.register( 'component:sl-grid', SlGridComponent );

        container.register( 'template:components/sl-checkbox', SlCheckboxTemplate );
        container.register( 'component:sl-checkbox', SlCheckboxComponent );

        container.register( 'template:components/sl-dropbutton', SlDropbuttonTemplate );
        container.register( 'component:sl-dropbutton', SlDropbuttonComponent );

        container.register( 'template:components/sl-input', SlInputTemplate );
        container.register( 'component:sl-input', SlInputComponent );

        container.register( 'template:components/sl-select', SlSelectTemplate );
        container.register( 'component:sl-select', SlSelectComponent );

        container.register( 'template:components/sl-selectdate', SlSelectDateTemplate );
        container.register( 'component:sl-selectdate', SlSelectDateComponent );

        container.register( 'template:components/sl-simplemodal', SlSimpleModalTemplate );
        container.register( 'component:sl-simplemodal', SlSimpleModalComponent );

        container.register( 'template:components/sl-tabpanel', SlTabPanelTemplate );
        container.register( 'component:sl-tabpanel', SlTabPanelComponent );

        container.register( 'template:components/sl-textarea', SlTextareaTemplate );
        container.register( 'component:sl-textarea', SlTextareaComponent );
    }
};
