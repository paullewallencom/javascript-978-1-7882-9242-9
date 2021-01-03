// On top of lazy.js, you will need
// https://github.com/dtao/lazy.js/blob/master/lazy.browser.js
// to execute this code.

Lazy( document.getElementsByTagName( 'img' ) )
    .on( 'click' )
    .take( 5 )
    .each( event => console.log( 'Click:', event ) );