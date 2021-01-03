import _ from 'lodash';

const templateString = 
    document.getElementsByClassName( 'js-table-template' )[0].innerHTML;

const tableTemplate = _.template( templateString );

export const renderTable = table =>
    document.getElementsByClassName( 'js-table' )[0].innerHTML =
        tableTemplate( { table } ); 