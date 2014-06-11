import IfcSelectComponent from '../components/ifc-select';
import IfcSelectTemplate from '../templates/ifc-select';

export default {
    name: 'interface-components',

    initialize: function ( container ) {
        container.register( 'template:components/ifc-select', IfcSelectTemplate );
        container.register( 'component:ifc-select', IfcSelectComponent );
    }
};
