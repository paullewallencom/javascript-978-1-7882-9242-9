// Execute the code in the lazyjs console (http://danieltao.com/lazy.js/)

Lazy( [1,2,3] ).map( x => {
    console.log( 'map', x );
    return 2*x;
} ).filter( x => {
    console.log( 'filter', x ); 
    return x > 3; 
} ).first();