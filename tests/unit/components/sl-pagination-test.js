import Ember from 'ember';
import sinon from 'sinon';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-pagination', 'Unit | Component | sl pagination', {
    unit: true
});

test( 'Default property values are set correctly', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'tagName' ),
        'ul',
        'tagName is ul by default'
    );

    assert.strictEqual(
        component.get( 'busy' ),
        false,
        'busy is false by default'
    );

    assert.strictEqual(
        component.get( 'currentPage' ),
        1,
        'currentPage is 1 by default'
    );

    assert.strictEqual(
        component.get( 'totalPages' ),
        null,
        'totalPages is null by default'
    );
});

test( 'nextPage action increments currentPage', function( assert ) {
    const component = this.subject({ totalPages: 2 });

    Ember.run( () => {
        component.send( 'nextPage' );
    });

    assert.strictEqual(
        component.get( 'currentPage' ),
        2,
        'currentPage was incremented'
    );
});

test( 'previousPage action decrements currentPage', function( assert ) {
    const component = this.subject({ totalPages: 2, currentPage: 2 });

    Ember.run( () => {
        component.send( 'previousPage' );
    });

    assert.strictEqual(
        component.get( 'currentPage' ),
        1,
        'currentPage was decremented'
    );
});

test( 'onFirstPage property returns the expected values', function( assert ) {
    const component = this.subject({ currentPage: 2 });

    assert.strictEqual(
        component.get( 'onFirstPage' ),
        false,
        'Returns false when not on the first page'
    );

    Ember.run( () => {
        component.set( 'currentPage', 1 );
    });

    assert.strictEqual(
        component.get( 'onFirstPage' ),
        true,
        'Returns true when not on the first page'
    );
});

test( 'onLastPage property returns the expected values', function( assert ) {
    const component = this.subject({
        currentPage: 1,
        totalPages: 2
    });

    assert.strictEqual(
        component.get( 'onLastPage' ),
        false,
        'Returns false when not on the last page'
    );

    Ember.run( () => {
        component.set( 'currentPage', 2 );
    });

    assert.strictEqual(
        component.get( 'onLastPage' ),
        true,
        'Returns true when on the last page'
    );

    Ember.run( () => {
        component.set( 'totalPages', 3 );
    });

    assert.strictEqual(
        component.get( 'onLastPage' ),
        false,
        'Respects changes to the totalPages property'
    );
});

test( 'changePageBy() adds to currentPage when positive', function( assert ) {
    const component = this.subject({
        totalPages: 2
    });

    Ember.run( () => {
        component.changePageBy( 1 );
    });

    assert.strictEqual(
        component.get( 'currentPage' ),
        2,
        'currentPage was increased by 1'
    );
});

test( 'changePageBy() subtracts from currentPage when negative', function( assert ) {
    const component = this.subject({
        totalPages: 2,
        currentPage: 2
    });

    Ember.run( () => {
        component.changePageBy( -1 );
    });

    assert.strictEqual(
        component.get( 'currentPage' ),
        1,
        'currentPage was decreased by 1'
    );
});

test( 'changePageBy() sends the changePage action', function( assert ) {
    const targetObject = {
        testAction: sinon.spy()
    };

    const component = this.subject({
        totalPages: 2,
        changePage: 'testAction',
        targetObject: targetObject
    });

    Ember.run( () => {
        component.changePageBy( 1 );
    });

    assert.strictEqual(
        targetObject.testAction.getCall( 0 ).args[ 0 ],
        2,
        'the changePage action was sent with the new currentPage value'
    );
});

test( 'changePageBy() does nothing when busy is true', function( assert ) {
    const targetObject = {
        testAction: sinon.spy()
    };

    const component = this.subject({
        totalPages: 2,
        changePage: 'testAction',
        targetObject: targetObject
    });

    Ember.run( () => {
        component.set( 'busy', true );
        component.changePageBy( 1 );
    });

    assert.strictEqual(
        component.get( 'currentPage' ),
        1,
        'currentPage was not changed'
    );

    assert.strictEqual(
        targetObject.testAction.calledOnce,
        false,
        'changePage action was not sent'
    );
});

test( 'Dependent keys are correct', function( assert ) {
    const component = this.subject();

    const onFirstPageDependentKeys = [
        'currentPage'
    ];

    const onLastPageDependentKeys = [
        'currentPage',
        'totalPages'
    ];

    assert.deepEqual(
        component.onFirstPage._dependentKeys,
        onFirstPageDependentKeys,
        'Dependent keys are correct for onFirstPage()'
    );

    assert.deepEqual(
        component.onLastPage._dependentKeys,
        onLastPageDependentKeys,
        'Dependent keys are correct for onLastPage()'
    );
});
