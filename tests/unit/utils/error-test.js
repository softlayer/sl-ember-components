import {
    errorWasThrown,
    isErrorInstanceOf,
    setErrorTypeThrown,
    throwChartError,
    throwDateTimeError,
    throwMenuError,
    throwRadioGroupError,
    throwTooltipError
} from 'sl-ember-components/utils/error';
import { module, test } from 'qunit';

module( 'Unit | Utility | error', {
    beforeEach() {
        setErrorTypeThrown( null );
    }
});

test( 'errorWasThrown() returns false when "errorTypeThrown" is not set', function( assert ) {

    assert.strictEqual(
        errorWasThrown(),
        false,
        'errorWasThrown() returns correct result when "errorTypeThrown" is not set'
    );
});

test( 'isErrorInstanceOf() returns false when "errorTypeThrown" is null', function( assert ) {

    assert.strictEqual(
        isErrorInstanceOf( 'chart' ),
        false,
        'isErrorInstanceOf() returns correct result when "errorTypeThrown" uses default value'
    );
});

test( 'errorWasThrown() returns true when "errorTypeThrown" is set', function( assert ) {
    assert.expect( 1 );

    try {
        throwChartError( 'This is a test' );
    } catch ( error ) {

        assert.strictEqual(
            errorWasThrown(),
            true,
            'errorWasThrown() returns correct result when "errorTypeThrown" is set'
        );
    }
});

test( 'isErrorInstanceOf() returns true when "errorTypeThrown" equals the error thrown', function( assert ) {
    assert.expect( 1 );

    try {
        throwChartError( 'This is a test' );
    } catch ( error ) {

        assert.strictEqual(
            isErrorInstanceOf( 'chart' ),
            true,
            'isErrorInstanceOf() returns correct result when "errorTypeThrown" is set'
        );
    }
});

test( 'isErrorInstanceOf() returns false when "errorTypeThrown" is not equivalent', function( assert ) {
    assert.expect( 1 );

    try {
        throwDateTimeError( 'This is a test' );
    } catch ( error ) {

        assert.strictEqual(
            isErrorInstanceOf( 'chart' ),
            false,
            'isErrorInstanceOf() returns correct result when "errorTypeThrown" is not set'
        );
    }
});

test( 'throwChartError() sets attributes on chart error', function( assert ) {
    assert.expect( 2 );

    try {
        throwChartError( 'This is a test' );
    } catch ( error ) {

        assert.strictEqual(
            error.name,
            'sl-chart',
            'throwChartError() returns an instance with name set correctly'
        );

        assert.strictEqual(
            error.message,
            'This is a test',
            'throwChartError() returns an instance with message set correctly'
        );
    }
});

test( 'throwDateTimeError() sets attributes on dateTime error', function( assert ) {
    assert.expect( 2 );

    try {
        throwDateTimeError( 'This is a test' );
    } catch ( error ) {

        assert.strictEqual(
            error.name,
            'sl-date-time',
            'throwDateTimeError() returns an instance with name set correctly'
        );

        assert.strictEqual(
            error.message,
            'This is a test',
            'throwDateTimeError() returns an instance with message set correctly'
        );
    }
});

test( 'throwMenuError() sets attributes on menu error', function( assert ) {
    assert.expect( 2 );

    try {
        throwMenuError( 'This is a test' );
    } catch ( error ) {

        assert.strictEqual(
            error.name,
            'sl-menu',
            'throwMenuError() returns an instance with name set correctly'
        );

        assert.strictEqual(
            error.message,
            'This is a test',
            'throwMenuError() returns an instance with message set correctly'
        );
    }
});

test( 'throwRadioGroupError() sets attributes on radioGroup error', function( assert ) {
    assert.expect( 2 );

    try {
        throwRadioGroupError( 'This is a test' );
    } catch ( error ) {

        assert.strictEqual(
            error.name,
            'sl-radio-group',
            'throwRadioGroupError() returns an instance with name set correctly'
        );

        assert.strictEqual(
            error.message,
            'This is a test',
            'throwRadioGroupError() returns an instance with message set correctly'
        );
    }
});

test( 'throwTooltipError() sets attributes on tooltip error', function( assert ) {
    assert.expect( 2 );

    try {
        throwTooltipError( 'This is a test' );
    } catch ( error ) {

        assert.strictEqual(
            error.name,
            'sl-tooltip',
            'throwTooltipError() returns an instance with name set correctly'
        );

        assert.strictEqual(
            error.message,
            'This is a test',
            'throwTooltipError() returns an instance with message set correctly'
        );
    }
});

test( 'buildErrorFunction() sets message to empty string when message is not provided', function( assert ) {
    assert.expect( 1 );

    try {
        throwTooltipError();
    } catch ( error ) {

        assert.strictEqual(
            error.message,
            '',
            'buildErrorFunction() returns an instance with message set to empty string'
        );
    }
});
