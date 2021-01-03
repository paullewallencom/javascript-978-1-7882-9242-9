// You need immutable.js to run this code

const countToHundredStepFive = Immutable.range( 0, 100, 5 );

console.log( countToHundredStepFive.toJSON() );

console.log( countToHundredStepFive.take( 2 ).toJSON() );

console.log( Immutable.Repeat( 'ha' ).take( 10 ).toJS().join( '' ) );

console.log( Immutable.Repeat( 'ha', 10 ).toJS().join( '' ) );

console.log(
    Immutable.Repeat()
        .map( Math.random )
        .take( 10 )
        .toJS()
);

console.log( 
    Immutable.Repeat()
        .map( Math.random )
        .take( 10000 )
        .reduce( (a, b) => a + b, 0 )
);