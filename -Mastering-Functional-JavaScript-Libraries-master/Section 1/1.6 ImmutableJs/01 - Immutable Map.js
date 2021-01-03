// You need immutable.js to run this code

const firstCourse = Immutable.Map({
    title: 'Deep Dive into Functional in JavaScript',
    author: 'Zsolt Nagy',
    sections: 6     
});

console.log( 
    firstCourse.get( 'author' ), 
    firstCourse1.get( 'author' ) 
);

console.log( firstCourse == firstCourse1, firstCourse === firstCourse1 );

const firstCourse2 = firstCourse1.set( 'author', 'Zsolt Nagy' );

console.log( firstCourse == firstCourse2, firstCourse === firstCourse2 );

console.log(
    firstCourse.equals( firstCourse2 ),
    firstCourse.equals( firstCourse1 )
);

console.log( firstCourse2.toObject() );

console.log( firstCourse2.toJSON() );

console.log( JSON.stringify( firstCourse2 ) );