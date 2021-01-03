const createRow = () => _.times( 9, _.constant( null ) );
const createTable = () => _.times( 9, createRow );

// Testing
// createRow2 = x => _.map( _.range( 9 ), y => `${x}-${y}` );
// createTable2 = () => _.map( _.range( 9 ), createRow2 );

const getRow = ( table, row ) => table[ row ];
const getColumn = ( table, columnIndex ) => 
    _.map( table, row => row[ columnIndex ] );

const getArea = ( table, x, y ) => {
    const rows = [ table[3*y], table[3*y + 1], table[3*y + 2] ];
    return _.flatMap( rows, row => row.slice( 3*x, 3*x + 3 ) );
}

const getMainDiag = table => _.map( table, (row, index) => row[index] );
const getBackDiag = table => _.map( table, (row, index) => row[ 8 - index] );



