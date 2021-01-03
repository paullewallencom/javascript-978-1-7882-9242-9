// You need ramda.js to execute this code.

console.log( 
    R.map( x => 2*x, [1, 2, 3] ) 
);

console.log( 
    R.map( x => 2*x )( [ 1, 2, 3 ] ) 
);

const doubleEach = R.map( x => 2*x )
console.log( 
    doubleEach( [1, 2, 3, 4, 5 ] )
);
