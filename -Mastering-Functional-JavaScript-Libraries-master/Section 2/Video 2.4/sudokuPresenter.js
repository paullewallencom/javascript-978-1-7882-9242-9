import _ from 'lodash';
import { setCell } from './sudokuModel'

const templateString = 
    document.getElementsByClassName( 'js-table-template' )[0].innerHTML;

const tableTemplate = _.template( templateString );

const selectCell = domNode => {
    _.each( 
        document.getElementsByClassName( 'js-selected' ),
        node => {
            node.classList.remove( 'selected' );
            node.classList.remove( 'js-selected' );
        }
    );
    domNode.classList.add( 'selected' );
    domNode.classList.add( 'js-selected' );
}

const addClickEvent = item => 
    item.addEventListener( 'click', event => {
        console.log( 'target', event.target );
        console.log( 'dataset', event.target.dataset );
        //selectCell( item );
    } );

const addAllClickEvents = () => 
    _.each( 
        document.getElementsByClassName( 'js-sudoku-cell' ),
        addClickEvent
    );

const insertValue = key => {
    const selectedNode = document.getElementsByClassName( 'js-selected' )[0];
    if ( selectedNode ) {
        const dataset = selectedNode.dataset;
        const value = parseInt( key ) || null;
        renderTable( setCell( tableModel, dataset.row, dataset.column, value ) );
    }
}

const addKeyEvent = () => 
    window.addEventListener( 'keypress', event => {
        console.log( 'event', event ) 
        const key = event.key;
        if ( '123456789 '.indexOf( key ) >= 0 ) {
            insertValue( key );
        }
    } );

let tableModel = null;

export const renderTable = table => {
    document.getElementsByClassName( 'js-table' )[0].innerHTML =
        tableTemplate( { table } );

    tableModel = table;

    addAllClickEvents();
}

addKeyEvent();