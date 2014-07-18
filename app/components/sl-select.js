import Ember from 'ember';

/**
 * @module components
 * @class sl-select
 */
export default Ember.Component.extend({

    /**
     * Attribute bindings for the root element
     * @property {array} attributeBindings
     */
    attributeBindings: [ 'type' ],

    /**
     * Class names for the root element
     * @property {array} classNames
     */
    classNames: [ 'form-control', 'sl-select' ],

    /**
     * Called when the bound content changes
     * @method contentChanged
     */
    contentChanged: Ember.observer( 'content.@each', function () {
        this.valueChanged();
    }),

    /**
     * Set up select2 initialization after the element is inserted in the DOM
     * @method didInsertElement
     */
    didInsertElement: function () {
        var escapeExpression = Ember.Handlebars.Utils.escapeExpression,
            get = Ember.get,
            self = this;

        this.set( 'root', this.$().select2({
            multiple:    this.get( 'multiple' ),
            placeholder: this.get( 'placeholder' ),

            formatResult: function ( item ) {
                console.log( 's2.formatResult:', item );
                if ( !item ) { return; }

                if ( !( item instanceof Object )) {
                    return item;
                }

                var output      = get( item, self.get( 'optionLabelPath' )),
                    description = get( item, self.get( 'optionDescriptionPath' ));

                if ( description ) {
                    output += ' <span class="text-muted">' + description + '</span>';
                }

                return escapeExpression( output );
            },

            formatSelection: function ( item ) {
                console.log( 's2.formatSelection:', item );
                if ( !item ) { return; }

                if ( item instanceof Object ) {
                    return escapeExpression( get( item, self.get( 'optionLabelPath' )));
                }

                return escapeExpression( item );
            },

            initSelection: function ( element, callback ) {
                var value           = element.val(),
                    content         = self.get( 'content' ),
                    multiple        = self.get( 'multiple' ),
                    optionValuePath = self.get( 'optionValuePath' );

                console.log( 'initSelection:', value );

                if ( !value || !value.length ) {
                    return callback( [] );
                }

                var values          = value.split( ',' ),
                    filteredContent = [],
                    contentLength   = content.length,
                    unmatchedValues = values.length,
                    item, matchIndex, text;

                for ( var i = 0; i < contentLength; i++ ) {
                    item = content[i];
                    text = item instanceof Object ? get( item, optionValuePath ) : item;
                    matchIndex = values.indexOf( text );

                    if ( matchIndex !== -1 ) {
                        filteredContent[ matchIndex ] = item;
                        if ( --unmatchedValues === 0 ) {
                            break;
                        }
                    }
                }

                if ( unmatchedValues === 0 ) {
                    self.root.select2( 'readonly', false );
                } else {
                    self.root.select2( 'readonly', true );

                    Ember.warn( 'sl-select:select2#initSelection was not able to map each "' + optionValuePath + '" to an object from "content". The remaining keys are: ' + values + '. The input will be disabled until a) the desired objects are added to the "content" array, or b) the "value" is changed.', !values.length );
                }

                return callback( multiple ? filteredContent : filteredContent.get( 'firstObject' ));
            },

            query: function ( query ) {
                console.log( 's2.query:', query );
                var optionLabelPath = self.get( 'optionLabelPath' ),
                    select2 = this;

                query.callback({
                    results: self.get( 'content' ).reduce( function ( results, item ) {
                        var text = item instanceof Object ? get( item, optionLabelPath ) : item;

                        if ( select2.matcher( query.term, text )) {
                            results.push( item );
                        }

                        return results;
                    }, [] )
                });
            }
        }));

        this.root.on( 'change', function () {
            self.selectionChanged( self.root.select2( 'val' ));
        });

        this.valueChanged();
    },

    /**
     * Whether to allow multiple selections
     * @property {boolean} multiple
     * @default false
     */
    multiple: false,

    /**
     * The path key for each option object's description
     * @property {string} optionDescriptionPath
     * @default 'description'
     */
    optionDescriptionPath: 'description',

    /**
     * The path key for each option object's label
     * @property {string} optionLabelPath
     * @default 'label'
     */
    optionLabelPath: 'label',

    /**
     * The path key for each option object's value
     * @property {string} optionValuePath
     * @default 'value'
     */
    optionValuePath: 'value',

    /**
     * The root element jQuery binding
     * @property {object} root
     * @default null
     */
    root: null,

    /**
     * Called when the object selection changes
     * @method selectionChanged
     * @param {mixed} data - Data from the selected option
     */
    selectionChanged: function ( data ) {
        console.log( 'selectionChanged:', data );
        var multiple = this.get( 'multiple' ),
            optionValuePath = this.get( 'optionValuePath' ),
            value;

        if ( optionValuePath ) {
            value = multiple ? data.getEach( optionValuePath ) : Ember.get( data, optionValuePath );
        } else {
            value = data;
        }

        this.set( 'data', value );
    },

    /**
     * Name of the tag type for root element
     * @property {string} tagName
     * @default 'input'
     */
    tagName: 'input',

    /**
     * Type attribute for the root element
     * @property {string} type
     * @default 'hidden'
     */
    type: 'hidden',

    /**
     * Called when the component's value has changed
     * @method valueChanged
     */
    valueChanged: Ember.observer( 'value', function () {
        this.root.select2( 'val', this.get( 'value' ));
    }),

    /**
     * Teardown to prevent memory leaks
     * @method willDestroyElement
     */
    willDestroyElement: function () {
        this.root.off( 'change' ).select2( 'destroy' );
    }
});
