// You need ramda.js to execute this code.

console.log(
    R.filter( x => x > 3, R.map( x => 2*x, [1,2,3] ) )
);

console.log(
    R.filter( x => x > 3 )( R.map( x => 2*x, [1,2,3] ) )
);

const mapFilter = R.compose( 
    R.filter( x => x > 3 ), 
    R.map( x => 2*x ) 
);

console.log( 
    mapFilter( [1,2,3,4,5] ) 
);

const pipedMapFilter = R.pipe( 
    R.map( x => 2*x )
    R.filter( x => x > 3 ) 
);

console.log( 
    pipedMapFilter( [1,2,3,4,5] )
);

const logMapFilter = R.pipe( 
    R.map( x => {
        console.log( 'map', x );
        return 2*x;
    } ),
    R.filter( x => { 
        console.log( 'filter', x ); 
        return x > 3;
    } ),  
    R.take( 2 )   
);

console.log( 
    logMapFilter( [1,2,3,4,5] )
);