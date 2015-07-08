import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-date-range-picker', 'Unit | Component | sl date range picker', {
    needs: [
        'component:sl-date-picker'
    ],
    unit: true
});

test( 'Default classNames are present', function( assert ) {
    this.subject();
    this.render();

    assert.ok(
        this.$().hasClass('sl-date-range-picker'),
        'Default rendered component has class "sl-date-range-picker"'
    );
});

test( 'Change focus to end date input upon start date change', function( assert ) {
    this.subject();

    let endDateInput = this.$( '.sl-daterange-end-date input' );

    endDateInput.on( 'focus', () => {
        assert.ok( true, 'End date intput recieves focus upon start date change');
    });

    this.render();

    let startDateInput = this.$( '.sl-daterange-start-date input' );
    
    Ember.run( () => {
        startDateInput.trigger( 'change' );
    });

    assert.expect( 1 );
});

test( 'Earliest end date is the based on min date and start date', function( assert ) {
    let component = this.subject();

    assert.strictEqual(
        component.get( 'earliestEndDate' ),
        null
    );

    component.set( 'minDate', '01/01/2001' );

    assert.equal(
        component.get( 'earliestEndDate' ),
        '01/01/2001'
    );

    component.set( 'startDateValue', '01/01/2015' );

    assert.equal(
        component.get( 'earliestEndDate' ),
        '01/01/2015'
    );
});

test( 'Latest start date is the based on max date and end date', function( assert ) {
    let component = this.subject();

    assert.strictEqual(
        component.get( 'latestStartDate' ),
        null
    );

    component.set( 'maxDate', '01/01/2029' );

    assert.equal(
        component.get( 'latestStartDate' ),
        '01/01/2029'
    );

    component.set( 'endDateValue', '01/01/2015' );

    assert.equal(
        component.get( 'latestStartDate' ),
        '01/01/2015'
    );
});