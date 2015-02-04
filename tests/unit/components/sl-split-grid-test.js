import Ember from 'ember';
import { test, moduleFor, moduleForComponent } from 'ember-qunit';

moduleForComponent( 'sl-split-grid', 'Unit - component:sl-split-grid', {
    needs: [
        'view:sl-split-grid-cell',
        'view:sl-split-grid-column-header',
        'view:sl-split-grid-row'
    ]
});

test( 'Detail content height is correctly set', function() {
    var height    = 350,
        component = this.subject({
            detailContentHeight: height
        }),
        $component = this.append();

    equal( $component.find( '.detail-pane .content' ).height(), height );
});

test( 'List content height is correctly set', function() {
    var height    = 350,
        component = this.subject({
            listContentHeight: height
        }),
        $component = this.append();

    equal( $component.find( '.list-pane .content' ).height(), height );
});

test( 'Sorting action is fired on sortable column header click', function() {
    var testColumn = { sortable: true, title: 'Test' },
        component  = this.subject({
            columns: [ testColumn ]
        }),
        $component = this.append(),
        spy        = sinon.spy( component._actions, 'sortColumn' );

    Ember.run( function() {
        $component.find( 'th.sortable-column' ).trigger( 'click' );
        ok( spy.called );
    });
});

test( 'Next page of data is requested when list is scrolled', function() {
    var component = this.subject({
            content    : [ {} ],
            totalCount : 2
        }),
        $component = this.append(),
        spy        = sinon.spy( component, 'requestNextPage' );

    Ember.run( function() {
        $component.find( '.list-pane .content' ).trigger( 'scroll' );
        ok( spy.called );
    });
});
