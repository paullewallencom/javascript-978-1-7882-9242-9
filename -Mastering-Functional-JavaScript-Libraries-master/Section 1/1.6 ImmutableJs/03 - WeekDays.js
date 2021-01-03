// You need immutable.js to run this code

const businessDays = Immutable.List( [ 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday' 
] );
const weekendDays = Immutable.List( [
    'Saturday',
    'Sunday'
] );

const weekDays = businessDays.concat( weekendDays );

console.log( weekDays.toJS() );

const weekDays2 = businessDays.concat( ['Saturday', 'Sunday'] );

console.log( weekDays2.toJS() );

const weekDays3 = weekDays.map( day => day.slice( 0, 2 ) )

console.log( weekDays3.toString() );

const weekDays4 = weekDays
    .map( day => day.slice( 0, 2 ) )
    .filter( day => !day.startsWith( 'S' ) )
    .reduce( ( day1, day2 ) => `${ day1 } ${ day2 }` );

console.log( weekDays4 );