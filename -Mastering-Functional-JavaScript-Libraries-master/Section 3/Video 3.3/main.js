import Rx from 'rxjs/Rx';

const appContainer = document.querySelector( '.js-app' );

Rx.Observable.from( [1,2,3] )
    .map( x => 2*x )
    .subscribe( x => appContainer.append( `${x} ` ) );