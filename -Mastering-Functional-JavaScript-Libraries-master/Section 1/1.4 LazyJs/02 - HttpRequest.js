// On top of lazy.js, you will need
// https://github.com/dtao/lazy.js/blob/master/lazy.browser.js
// to execute this code.

let response = '';

const onFulfilled = () => console.log( JSON.parse( response ) );

Lazy.makeHttpRequest( 'https://api.github.com/users/facebook/repos' )
    .lines()
    .each( line => {
    response += line;
} ).then( onFulfilled );