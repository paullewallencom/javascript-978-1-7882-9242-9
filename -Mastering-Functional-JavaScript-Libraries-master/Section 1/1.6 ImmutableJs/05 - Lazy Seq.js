// You need immutable.js to run this code

function *fibonacci() {
    let fib1 = 1;
    let fib2 = 1;
    yield fib1;
    while ( true ) {
        yield fib2;
        [ fib2, fib1 ] = [ fib1 + fib2, fib2 ];
    }
}

const fibonacciIterator = fibonacci();

const fibonacciSequence = Immutable.Seq( fibonacciIterator );

console.log(
    fibonacciSequence
        .filter( x => x % 2 === 0 )
        .take( 20 )
        .toJS()
);

console.log(
    Immutable.Seq( [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ] ).take( 5 ).map( day => { 
        console.log( 'map', day );
        return day.slice( 0, 2 ); 
    } ).reduce( (acc, day) => {
        console.log( 'reduce', acc, day );
        return `${acc} ${day}`
    } )
);

console.log(
    Immutable.Seq( [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ] ).map( day => { 
        console.log( 'map', day );
        return day.slice( 0, 2 ); 
    } ).take( 5 ).reduce( (acc, day) => {
        console.log( 'reduce', acc, day );
        return `${acc} ${day}`
    } )
);