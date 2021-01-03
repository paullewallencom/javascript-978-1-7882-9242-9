// Execute these lines in an UnderscoreJs environment

console.log( 
    _.map( [1,2,3], x => 2*x ) 
);

console.log( 
    _( [1,2,3] ).map( x => 2*x )
);

console.log(
    _.filter( _.map( [1,2,3], x => 2*x ), x => x > 3 )
);

console.log(
    _( [1,2,3] ).map( x => 2*x ).filter( x => x > 3 )
);
