// You need ramda.js to execute this code.

const pickNameForks = R.map( R.pick( ['full_name', 'forks'] ) );
const sortForks = R.sortBy( R.prop( 'forks' ) );
const formatData = R.pipe( pickNameForks, sortForks );

fetch( 'http://api.github.com/users/facebook/repos' )
    .then( resp => resp.json() )
    .then( formatData )
    .then( console.table )