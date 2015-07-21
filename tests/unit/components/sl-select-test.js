import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-select', 'Unit | Component | sl select', {
    unit: true
});

test( 'Default classNames are present', function( assert ) {
    this.subject( { content: [] } );

    assert.ok(
        this.$().hasClass( 'form-group' ),
        'Default rendered component has class "form-group"'
    );

    assert.ok(
        this.$().hasClass( 'sl-select' ),
        'Default rendered component has class "sl-select"'
    );
});

test( 'Content is a required parameter of type array', function( assert ) {
    assert.throws(
        this.subject,
        new Error( 'Assertion Failed: "content" is a required property of type array' ),
        'Error is thrown if content is not passed in'
    );

    assert.throws(
        () => {
            this.subject( { content: {} } );
        },
        new Error( 'Assertion Failed: "content" is a required property of type array' ),
        'Error is thrown if content is an object'
    );

    assert.throws(
        () => {
            this.subject( { content: 1 } );
        },
        new Error( 'Assertion Failed: "content" is a required property of type array' ),
        'Error is thrown if content is a number'
    );

    assert.throws(
        () => {
            this.subject( { content: true } );
        },
        new Error( 'Assertion Failed: "content" is a required property of type array' ),
        'Error is thrown if content is a boolean'
    );

    assert.throws(
        () => {
            this.subject( { content: null } );
        },
        new Error( 'Assertion Failed: "content" is a required property of type array' ),
        'Error is thrown if content is null'
    );

    assert.throws(
        () => {
            this.subject( { content: undefined } );
        },
        new Error( 'Assertion Failed: "content" is a required property of type array' ),
        'Error is thrown if content is undefined'
    );

    assert.throws(
        () => {
            this.subject( { content: function(){} } );
        },
        new Error( 'Assertion Failed: "content" is a required property of type array' ),
        'Error is thrown if content is a function'
    );

    assert.throws(
        () => {
            this.subject( { content: "hi" } );
        },
        new Error( 'Assertion Failed: "content" is a required property of type array' ),
        'Error is thrown if content is a string'
    );

    assert.ok(
        this.subject( { content: [] } ),
        'No error is thrown when content is an array'
    );
});

test( 'Default properties contain expected values', function( assert ) {
    const component = this.subject( { content: [] } );

    assert.strictEqual(
        component.get( 'disableSearch' ),
        false,
        'disableSearch is false by default'
    );

    assert.strictEqual(
        component.get( 'input' ),
        null,
        'input is null by default'
    );

    assert.strictEqual(
        component.get( 'maximumSelectionSize' ),
        null,
        'maximumSelectionSize is null by default'
    );

    assert.strictEqual(
        component.get( 'multiple' ),
        false,
        'multiple is false by default'
    );

    assert.equal(
        component.get( 'optionDescriptionPath' ),
        'description',
        'optionDescriptionPath contains "description" by default'
    );

    assert.equal(
        component.get( 'optionLabelPath' ),
        'label',
        'optionLabelPath contains "label" by default'
    );

    assert.equal(
        component.get( 'optionValuePath' ),
        'value',
        'optionValuePath contains value by default'
    );

    assert.strictEqual(
        component.get( 'placeholder' ),
        undefined,
        'placeholder is undefined by default'
    );

    assert.strictEqual(
        component.get( 'value' ),
        null,
        'value is null by default'
    );

    assert.strictEqual(
        component.get( 'label' ),
        undefined,
        'label is undefined by default'
    );

    assert.strictEqual(
        component.get( 'optional' ),
        false,
        'optional is false by default'
    );

    assert.strictEqual(
        component.get( 'required' ),
        false,
        'required is false by default'
    );

    assert.strictEqual(
        component.get( 'disabled' ),
        false,
        'disabled is false by default'
    );

    assert.strictEqual(
        component.get( 'readonly' ),
        false,
        'readonly is false by default'
    );

    assert.strictEqual(
        component.get( 'helpText' ),
        undefined,
        'helpText is undefined by deafult'
    );
});

test( 'Template elements bind to properties', function( assert ) {
    const component = this.subject( { content: [] } );

    assert.strictEqual(
        this.$( 'label.control-label' )[0],
        undefined,
        'No label is created by default'
    );

    assert.strictEqual(
        this.$( 'small.text-info' )[0],
        undefined,
        'No optional text is created by default'
    );

    assert.strictEqual(
        this.$( 'small.text-danger' )[0],
        undefined,
        'No required text is created by default'
    );

    assert.strictEqual(
        this.$( 'p.help-block' )[0],
        undefined,
        'No help text is created by default'
    );

    Ember.run( () => {
        component.set( 'optional', true );
    });

    assert.strictEqual(
        this.$( 'small.text-info' )[0],
        undefined,
        'No optional text is created when there is no label'
    );

    Ember.run( () => {
        component.set( 'required', true );
    });

    assert.strictEqual(
        this.$( 'small.text-danger' )[0],
        undefined,
        'No required text is created when there is no label'
    );

    const labelText = 'testLabel';

    Ember.run( () => {
        component.set( 'label', labelText );
    });

    assert.equal(
        this.$( 'label.control-label' )[0].innerText,
        `${labelText} Optional Required`,
        'Label text was correctly bound'
    );

    assert.equal(
        this.$( 'small.text-info' ).html(),
        'Optional',
        'Optional text was correctly bound'
    );

    assert.equal(
        this.$( 'small.text-danger' ).html(),
        'Required',
        'Required text was correctly bound'
    );

    const helpText = 'testHelp';

    Ember.run( () => {
        component.set( 'helpText', helpText );
    });

    assert.equal(
        this.$( 'p.help-block' ).html(),
        helpText,
        'Help text was correctly bound'
    );

    const valueText = 'testValue';

    Ember.run( () => {
        component.set( 'value', valueText );
    });

    assert.equal(
        this.$( 'input.form-control').val(),
        valueText,
        'Value was correctly bound'
    );
});

test( 'Options are based on the correct properties', function( assert ) {
    const formatResult = function(){};
    const formatSelection = function(){};
    const id = function(){};
    const initSelection = function(){};
    const query = function(){};

    const component = this.subject({
        content: [],
        disableSearch: true,
        maximumSelectionSize: 5,
        multiple: true,
        placeholder: 'placeholderTest',
        select2FormatResult: formatResult,
        select2FormatSelection: formatSelection,
        select2Id: id,
        select2InitSelection: initSelection,
        select2Query: query
    });

    const testOptions = {
        formatResult: formatResult,
        formatSelection: formatSelection,
        id: id,
        initSelection: initSelection,
        maximumSelectionSize: 5,
        minimumResultsForSearch: -1,
        multiple: true,
        placeholder: 'placeholderTest',
        query: query
    };

    assert.deepEqual(
        component.get( 'options' ),
        testOptions,
        'Options are based on the correct properties'
    );
});

test( 'Select2 is initialized with the correct arguments', function( assert ) {
    const optionsMock = {
        formatResult: function(){},
        formatSelection: function(){},
        id: function(){},
        initSelection: function(){},
        maximumSelectionSize: 5,
        minimumResultsForSearch: 0,
        multiple: false,
        placeholder: 'placeholderTest',
        query: function(){},
    };
    const inputMock = {
        attr(){},
        off() {
            return this;
        },
        on(){},
        select2( options ) {
            return this;
        },
    };
    const component = this.subject({
        content: [],
        options: optionsMock,
        $: function( id ) {
            return inputMock;
        }
    });

    const inputSpy = sinon.spy( component, '$' );
    const select2Spy = sinon.spy( inputMock, 'select2' );

    this.render();

    assert.ok(
        inputSpy.calledWithExactly( 'input' ),
        'Select2 is initialized on the input element'
    );

    assert.ok(
        select2Spy.calledWithExactly( optionsMock ),
        'Select2 was initialized with the correct options'
    );
});

test( 'Select2 is setup and torn down properly', function( assert ) {
    const component = this.subject( { content: [] } );

    this.render();

    assert.equal(
        Ember.typeOf( this.$( 'input.form-control' ).data( 'select2' ) ),
        'object',
        'Select2 is initialized after render'
    );

    assert.equal(
        this.$( 'input.select2-input' ).attr( 'placeholder' ),
        'Search...',
        'Select2 input has the correct placeholder set'
    );

    assert.equal(
        Ember.typeOf( component.get( 'input' ) ),
        'object',
        'input is set after render'
    );

    Ember.run( () => {
        component.trigger( 'willClearRender' );
    });

    assert.equal(
        Ember.typeOf( this.$( 'input.form-control' ).data( 'select2' ) ),
        'undefined',
        'Select2 is destroyed on willClearRender'
    );
});

test( 'Select2 results are formatted correctly', function( assert ) {
    const component = this.subject( { content: [] } );
    const formatResult = component.get( 'select2FormatResult' );

    assert.strictEqual(
        formatResult(),
        undefined,
        'formatResult returns undefined when not passed parameters'
    );

    assert.strictEqual(
        formatResult( null ),
        null,
        'formatResult directly returns null'
    );

    assert.strictEqual(
        formatResult( undefined ),
        undefined,
        'formatResult directly returns undefined'
    );

    assert.deepEqual(
        formatResult( [ 1, 2 ,3 ] ),
        [ 1, 2, 3 ],
        'formatResult directly returns arrays'
    );

    assert.strictEqual(
        formatResult( true ),
        true,
        'formatResult directly returns booleans'
    );

    assert.strictEqual(
        formatResult( 1 ),
        1,
        'formatResult directly returns numbers'
    );

    assert.equal(
        formatResult( 'test123' ),
        'test123',
        'formatResult directly returns strings'
    );

    assert.equal(
        formatResult( { label: 'test123' } ),
        'test123',
        'formatResult return label when no description is provided'
    );

    assert.equal(
        formatResult({
            label: 'test123',
            description: 'test456'
        }),
        'test123 <span class="text-muted">test456</span>',
        'formatResult return label with formatted description when passed both'
    );
});

test( 'Select2 selections are formatted correctly', function( assert ) {
    const component = this.subject( { content: [] } );
    const formatSelection = component.get( 'select2FormatSelection' );

    assert.strictEqual(
        formatSelection(),
        undefined,
        'formatSelection returns undefined when not passed parameters'
    );

    assert.strictEqual(
        formatSelection( null ),
        null,
        'formatSelection directly returns null'
    );

    assert.strictEqual(
        formatSelection( undefined ),
        undefined,
        'formatSelection directly returns undefined'
    );

    assert.deepEqual(
        formatSelection( [ 1, 2 ,3 ] ),
        [ 1, 2, 3 ],
        'formatSelection directly returns arrays'
    );

    assert.strictEqual(
        formatSelection( true ),
        true,
        'formatSelection directly returns booleans'
    );

    assert.strictEqual(
        formatSelection( 1 ),
        1,
        'formatSelection directly returns numbers'
    );

    assert.equal(
        formatSelection( 'test123' ),
        'test123',
        'formatSelection directly returns strings'
    );

    assert.equal(
        formatSelection( { label: 'test123' } ),
        'test123',
        'formatSelection return label when passed object'
    );
});

test( 'Select2 ids are retrieved correctly', function( assert ) {
    const component = this.subject( { content: [] } );
    const getId = component.get( 'select2Id' );

    assert.strictEqual(
        getId(),
        undefined,
        'id returns undefined when not passed parameters'
    );

    assert.strictEqual(
        getId( null ),
        null,
        'id directly returns null'
    );

    assert.strictEqual(
        getId( undefined ),
        undefined,
        'id directly returns undefined'
    );

    assert.deepEqual(
        getId( [ 1, 2 ,3 ] ),
        [ 1, 2, 3 ],
        'id directly returns arrays'
    );

    assert.strictEqual(
        getId( true ),
        true,
        'id directly returns booleans'
    );

    assert.strictEqual(
        getId( 1 ),
        1,
        'id directly returns numbers'
    );

    assert.equal(
        getId( 'test123' ),
        'test123',
        'id directly returns strings'
    );

    assert.equal(
        getId( { value: 'test123' } ),
        'test123',
        'id return value when passed object'
    );
});

test( 'select2InitSelection does not split values when multiple is disabled', function( assert ) {
    assert.expect( 1 );

    const testValue = 'test,123';
    const component = this.subject({
        content: [ testValue ],
        value: testValue
    });
    const initSelection = component.get( 'select2InitSelection' );
    const callback = ( data ) => {
        assert.equal(
            data,
            testValue,
            'Data was returned without being split'
        );
    };

    initSelection( this.$( 'input.form-control' ), callback );
});

test( 'select2InitSelection handles empty values correctly', function( assert ) {
    assert.expect( 4 );

    const component = this.subject( { content: [] } );
    const initSelection = component.get( 'select2InitSelection' );
    const callback = ( data ) => {
        assert.deepEqual(
            data,
            [],
            'initSelection calls back with an empty array when given empty values'
        );
    };
    const inputMock = {};

    inputMock.val = () => {
        return null;
    };

    initSelection( inputMock, callback );

    inputMock.val = () => {
        return;
    };

    initSelection( inputMock, callback );

    inputMock.val = () => {
        return '';
    };

    initSelection( inputMock, callback );

    inputMock.val = () => {
        return [];
    };

    initSelection( inputMock, callback );
});

test( 'select2InitSelection sets readonly status correctly', function( assert ) {
    assert.expect( 4 );

    const testValue = 'test123';
    const component = this.subject({
        content: [],
        value: testValue
    });
    const initSelection = component.get( 'select2InitSelection' );
    const input = this.$( 'input.form-control' );

    initSelection( input, ( data ) => {
        assert.deepEqual(
            data,
            [],
            'initSelection calls back with an empty array when no matches are found'
        );
    });

    assert.strictEqual(
        input.data( 'select2' )._readonly,
        true,
        'input is readonly when matches could not be found'
    );

    component.set( 'content', [ testValue ] );

    initSelection( input, ( data ) => {
        assert.deepEqual(
            data,
            testValue,
            'initSelection calls back with match when found in content'
        );
    });

    assert.strictEqual(
        input.data( 'select2' )._readonly,
        false,
        'input is not readonly when matches are found'
    );
});

test( 'select2InitSelection returns multiple matches in order', function( assert ) {
    assert.expect( 1 );

    const component = this.subject({
        content: [ 123, 456, 789 ],
        multiple: true,
        value: '789,123'
    });
    const initSelection = component.get( 'select2InitSelection' );
    const input = this.$( 'input.form-control' );

    initSelection( input, ( data ) => {
        assert.deepEqual(
            data,
            [ 789, 123 ],
            'Matches are returned in order'
        );
    });
});


test( 'select2Query calls back with only matched values', function( assert ) {
    assert.expect( 4 );

    const loremItem = { label: 'lorem' };
    const testItem = { label: 'test123' };
    const component = this.subject({
        content: [
            loremItem,
            'ipsum',
            testItem,
            'test456'
        ]
    });
    const query = component.get( 'select2Query' );
    const queryMock = {};

    this.render();

    queryMock.term = 'lor';
    queryMock.callback = ( data ) => {
        assert.deepEqual(
            data.results,
            [ loremItem ],
            'query matched "lor" to lorem object'
        );
    };

    query( queryMock );

    queryMock.term = 'ipsum';
    queryMock.callback = ( data ) => {
        assert.deepEqual(
            data.results,
            [ 'ipsum' ],
            'query matched "ipsum" to ipsum text'
        );
    };

    query( queryMock );

    queryMock.term = 'test';
    queryMock.callback = ( data ) => {
        assert.deepEqual(
            data.results,
            [ testItem, 'test456' ],
            'query matched multiple results with "test"'
        );
    };

    query( queryMock );

    queryMock.term = 'not found';
    queryMock.callback = ( data ) => {
        assert.deepEqual(
            data.results,
            [],
            'query found no results for "not found"'
        );
    };

    query( queryMock );

});
