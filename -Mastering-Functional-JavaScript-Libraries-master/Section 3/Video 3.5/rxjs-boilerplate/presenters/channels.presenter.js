import Rx from 'rxjs/Rx';

const renderChannel = channel => `
    <div class="app__channel-box  js-channel-box"  data-id="${ channel.id }">
        <h3 class="channel-box__title">${ channel.name }</h3>
        <span class="js-message-count  channel-box__text">
            ${ channel.topic }
        </span>
    </div>    
`;

export const setupChannelListeners = () => 
    Rx.Observable.fromEvent( 
        document.querySelectorAll( '.js-channel-box' ), 
        'click' 
    ).map( event => event.currentTarget.dataset.id );


export const renderChannels = channels => {
    document.querySelector( '.js-channels' ).innerHTML =
        channels.map( renderChannel ).join( '' );
};