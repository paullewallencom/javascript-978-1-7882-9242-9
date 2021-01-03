// You need ramda.js to execute this code.

const transducer = R.compose(   
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

R.into( [], transducer )( [1,2,3,4,5,6,7] );