// Execute these lines in an LoDash environment

console.log(
    _.filter( _.map( [1,2,3], x => 2*x ), x => x > 3 )
);

console.log(
    _( [1,2,3] ).map( x => 2*x ).filter( x => x > 3 )
);

console.log(
    _( [1,2,3] ).map( x => 2*x ).filter( x => x > 3 ).value()
);

console.log(
    _( [1,2,3] ).map( x => 2*x ).filter( x => x > 3 ).first()
);

console.log(
    _( [1,2,3] ).map( x => 2*x ).filter( x => x > 3 ).take(1).value()
);

console.log(
    _( [1,2,3] ).map( x => 2*x ).reduce( (a,b) => a*b, 1 )
);