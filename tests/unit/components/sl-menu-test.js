import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
<<<<<<< HEAD
||||||| merged common ancestors
import startApp from '../../helpers/start-app';

var clickCounter = 0,
    modelStub = {
        label: null,
        pages: [
            { label: 'Top Level A', extraClassNames: [ 'class1', 'class2' ], pages: [
                { label: 'Option A1', action: 'MyAction' },
                { label: 'Option A2', action: function() { clickCounter = 0; clickCounter++; }},
                { label: 'Option A3', action: { actionName: 'MyAction', data: { name: 'Joe' }}},
                { label: 'Sub Menu A3', pages: [
                    { label: 'Sub Sub Menu A3.1' },
                    { label: 'Sub Sub Menu A3.2' },
                    { label: 'Sub Sub Menu A3.3' },
                    { label: 'Sub Sub Menu A3.4' }
                ]}
            ]},
            { label: 'Top Level B' },
            { label: 'Top Level C' }
        ]
    },
    App;
=======
import startApp from '../../helpers/start-app';

let clickCounter = 0;
const modelStub = {
    label: null,
    pages: [
        {
            label: 'Top Level A',
            extraClassNames: [ 'class1', 'class2' ],
            pages: [
                {
                    label: 'Option A1',
                    action: 'MyAction'
                }, {
                    label: 'Option A2',
                    action() {
                        clickCounter = 0; clickCounter++;
                    }
                }, {
                    label: 'Option A3',
                    action: {
                        actionName: 'MyAction',
                        data: { name: 'Joe' }
                    }
                }, {
                    label: 'Sub Menu A3',
                    pages: [
                        { label: 'Sub Sub Menu A3.1' },
                        { label: 'Sub Sub Menu A3.2' },
                        { label: 'Sub Sub Menu A3.3' },
                        { label: 'Sub Sub Menu A3.4' }
                    ]
                }
            ]
        },
        { label: 'Top Level B' },
        { label: 'Top Level C' }
    ]
};

let App;
>>>>>>> d3bfac1483600e0dff760538af8f21fd41f0c13c

moduleForComponent( 'sl-menu', 'Unit | Component | sl menu', {
    unit: true
});

<<<<<<< HEAD
test( 'It renders', function( assert ) {
    assert.ok( true );
||||||| merged common ancestors
test( '"children" property is an empty array on initialization', function( assert ) {
    var component = this.subject();

    this.render();

    assert.equal(
        Ember.typeOf( component.get( 'children' ) ),
        'array',
        'Is array'
    );

    assert.equal(
        component.get( 'children' ).length,
        0,
        'Array is empty'
    );
});

test( 'Class attributes are properly bound', function( assert ) {
    var component  = this.subject({ menu: modelStub });
    var menus = this.$( 'li' );
    var firstMenuClasses = Ember.$( menus[0] ).attr( 'class' ).split( ' ' );
    var secondMenuClasses = Ember.$( menus[1] ).attr( 'class' ).split( ' ' );

    assert.ok(
        firstMenuClasses.indexOf( 'class1' ) > -1,
        '"class1" is added to the first menu element class'
    );

    assert.ok(
        firstMenuClasses.indexOf( 'class2' ) > -1,
        '"class2" is added to the first menu element class'
    );

    assert.ok(
        firstMenuClasses.indexOf( 'sl-menu' ) > -1,
        '"sl-menu" is added to the first menu element class'
    );

    assert.ok(
        secondMenuClasses.indexOf( 'sl-menu' ) > -1,
        '"sl-menu" is added to a menu when no classNames property is present'
    );
});

test( 'Menu creates correct DOM structure', function( assert ) {
    var component = this.subject({ menu: modelStub });

    assert.equal(
        this.$( 'li' ).length,
        11
    );
});

test( 'Menu properly hides all but root list', function( assert ) {
    var component = this.subject({ menu: modelStub });

    assert.equal(
        this.$( 'li:visible' ).length,
        3
    );
});

test( 'Menu shows child on hover', function( assert ) {
    var component = this.subject({ menu: modelStub });

    assert.equal(
        this.$( 'li:visible' ).length,
        3
    );

    this.$( 'li:visible' ).first().mouseenter();

    assert.equal(
        this.$( 'li:visible' ).length,
        7
    );
});

test( 'Menu closes child on mouse exit', function( assert ) {
    var component = this.subject({ menu: modelStub });
    var child = this.$( 'li:visible' ).first();

    assert.equal(
        this.$( 'li:visible' ).length,
        3
    );

    child.trigger( 'mouseenter' );
    assert.equal(
        this.$( 'li:visible' ).length,
        7
    );

    child.trigger( 'mouseleave' );
    assert.equal(
        this.$( 'li:visible' ).length,
        3
    );
});

test( 'Menu click supports native function', function( assert ) {
    var component = this.subject({ menu: modelStub });
    var child = this.$( 'li:visible' ).first();
    var spy = sinon.spy();

    Ember.set(
        Ember.get(
            Ember.get( component, 'pages' )[ 0 ], 'pages'
        )[ 1 ],
        'action',
        spy
    );

    child.trigger( 'mouseenter' );
    child.find( 'li:visible' ).eq( 1 ).trigger( 'click' );

    andThen( () => {
        assert.equal(
            spy.calledOnce,
            true
        );
    });
});

test( 'Menu click supports action names', function( assert ) {
    var component = this.subject({ menu: modelStub });
    var child = this.$( 'li:visible' ).first();
    var spy = sinon.spy();
    var targetObject = {
        actionHandler: spy
    };

    component.set( 'actionInitiated', 'actionHandler' );
    component.set( 'targetObject', targetObject );

    child.trigger( 'mouseenter' );
    child.find( 'li:visible' ).first().trigger( 'click' );

    andThen( () => {
        assert.equal(
            spy.args[ 0 ][ 0 ],
            'MyAction'
        );
    });
});

test( 'Menu click supports action names with supporting data', function( assert ) {
    var component = this.subject({ menu: modelStub });
    var child = this.$( 'li:visible' ).first();
    var spy = sinon.spy();
    var targetObject = {
        actionHandler: spy
    };

    component.set( 'actionInitiated', 'actionHandler' );
    component.set( 'targetObject', targetObject );

    child.trigger( 'mouseenter' );

    child.find( 'li:visible' ).eq( 2 ).trigger( 'click' );

    andThen( () => {
        assert.equal(
            spy.args[ 0 ][ 0 ],
            'MyAction'
        );

        assert.equal(
            spy.args[ 0 ][ 1 ][ 'name' ],
            'Joe'
        );
    });
});

test( 'Menu selection fires proper selection event', function( assert ) {
    var component = this.subject({ menu: modelStub });
    var selectionCounter = 0;
    var targetObject = {
        selectionHandler( path ) {
            selectionCounter++;
        }
    };

    component.set( 'selectionMade', 'selectionHandler' );
    component.set( 'targetObject', targetObject );

    let child1 = this.$( 'li:visible' ).first();
    child1.trigger( 'mouseenter' );
    child1.trigger( 'click' );

    let child2 = child1.find( 'li:visible' ).last();
    child2.trigger( 'mouseenter' );
    child2.trigger( 'click' );

    let child3 = child2.find( 'li:visible' ).first();
    child3.trigger( 'mouseenter' );
    child3.trigger( 'click' );

    assert.equal( selectionCounter, 3 );
=======
test( '"children" property is an empty array on initialization', function( assert ) {
    const component = this.subject();

    this.render();

    assert.equal(
        Ember.typeOf( component.get( 'children' ) ),
        'array',
        'Is array'
    );

    assert.equal(
        component.get( 'children' ).length,
        0,
        'Array is empty'
    );
});

test( 'Class attributes are properly bound', function( assert ) {
    this.subject({ menu: modelStub });

    const menus = this.$( 'li' );
    const firstMenuClasses = Ember.$( menus[0] ).attr( 'class' ).split( ' ' );

    assert.ok(
        firstMenuClasses.indexOf( 'class1' ) > -1,
        '"class1" is added to the first menu element class'
    );

    assert.ok(
        firstMenuClasses.indexOf( 'class2' ) > -1,
        '"class2" is added to the first menu element class'
    );

    assert.ok(
        firstMenuClasses.indexOf( 'sl-menu' ) > -1,
        '"sl-menu" is added to the first menu element class'
    );

    const secondMenuClasses = Ember.$( menus[1] ).attr( 'class' ).split( ' ' );

    assert.ok(
        secondMenuClasses.indexOf( 'sl-menu' ) > -1,
        '"sl-menu" is added to a menu when no classNames property is present'
    );
});

test( 'Menu creates correct DOM structure', function( assert ) {
    this.subject({ menu: modelStub });

    assert.equal(
        this.$( 'li' ).length,
        11
    );
});

test( 'Menu properly hides all but root list', function( assert ) {
    this.subject({ menu: modelStub });

    assert.equal(
        this.$( 'li:visible' ).length,
        3
    );
});

test( 'Menu shows child on hover', function( assert ) {
    this.subject({ menu: modelStub });

    assert.equal(
        this.$( 'li:visible' ).length,
        3
    );

    this.$( 'li:visible' ).first().mouseenter();

    assert.equal(
        this.$( 'li:visible' ).length,
        7
    );
});

test( 'Menu closes child on mouse exit', function( assert ) {
    this.subject({ menu: modelStub });

    const child = this.$( 'li:visible' ).first();

    assert.equal(
        this.$( 'li:visible' ).length,
        3
    );

    child.trigger( 'mouseenter' );
    assert.equal(
        this.$( 'li:visible' ).length,
        7
    );

    child.trigger( 'mouseleave' );
    assert.equal(
        this.$( 'li:visible' ).length,
        3
    );
});

test( 'Menu click supports native function', function( assert ) {
    const component = this.subject({ menu: modelStub });
    const child = this.$( 'li:visible' ).first();
    const spy = window.sinon.spy();

    Ember.set(
        Ember.get(
            Ember.get( component, 'pages' )[ 0 ], 'pages'
        )[ 1 ],
        'action',
        spy
    );

    child.trigger( 'mouseenter' );
    child.find( 'li:visible' ).eq( 1 ).trigger( 'click' );

    window.andThen( () => {
        assert.equal(
            spy.calledOnce,
            true
        );
    });
});

test( 'Menu click supports action names', function( assert ) {
    const component = this.subject({ menu: modelStub });
    const child = this.$( 'li:visible' ).first();
    const spy = window.sinon.spy();
    const targetObject = {
        actionHandler: spy
    };

    component.set( 'actionInitiated', 'actionHandler' );
    component.set( 'targetObject', targetObject );

    child.trigger( 'mouseenter' );
    child.find( 'li:visible' ).first().trigger( 'click' );

    window.andThen( () => {
        assert.equal(
            spy.args[ 0 ][ 0 ],
            'MyAction'
        );
    });
});

test( 'Menu click supports action names with supporting data', function( assert ) {
    const component = this.subject({ menu: modelStub });
    const child = this.$( 'li:visible' ).first();
    const spy = window.sinon.spy();
    const targetObject = {
        actionHandler: spy
    };

    component.set( 'actionInitiated', 'actionHandler' );
    component.set( 'targetObject', targetObject );

    child.trigger( 'mouseenter' );

    child.find( 'li:visible' ).eq( 2 ).trigger( 'click' );

    window.andThen( () => {
        assert.equal(
            spy.args[ 0 ][ 0 ],
            'MyAction'
        );

        assert.equal(
            spy.args[ 0 ][ 1 ].name,
            'Joe'
        );
    });
});

test( 'Menu selection fires proper selection event', function( assert ) {
    let selectionCounter = 0;

    this.subject({
        menu: modelStub,

        selectionMade: 'selectionHandler',

        targetObject: {
            selectionHandler() {
                selectionCounter++;
            }
        }
    });

    const child1 = this.$( 'li:visible' ).first();
    child1.trigger( 'mouseenter' );
    child1.trigger( 'click' );

    const child2 = child1.find( 'li:visible' ).last();
    child2.trigger( 'mouseenter' );
    child2.trigger( 'click' );

    const child3 = child2.find( 'li:visible' ).first();
    child3.trigger( 'mouseenter' );
    child3.trigger( 'click' );

    assert.equal( selectionCounter, 3 );
>>>>>>> d3bfac1483600e0dff760538af8f21fd41f0c13c
});
