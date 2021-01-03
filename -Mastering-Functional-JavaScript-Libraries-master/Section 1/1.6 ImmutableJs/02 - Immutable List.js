// You need immutable.js to run this code

const eventList = Immutable.List([ 'click', 'scroll', 'keypress', 'click' ] );

const eventList2 = eventList.push( 'paste' );

console.log( eventList.size, eventList2.size );

console.log( 
    eventList2.get( 0 ),
    eventList2.get( 4 ),
    eventList2.get( 5 )
);

const eventList3 = eventList2.pop().shift();

console.log( eventList3.toJSON() );
console.log( eventList3.toJS() );
console.log( eventList3.toArray() );
console.log( eventList3.toObject() );

