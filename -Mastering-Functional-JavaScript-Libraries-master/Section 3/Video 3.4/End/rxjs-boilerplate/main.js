import Rx from 'rxjs/Rx';
import { fetchChannels } from './models/channels.model';
import { fetchMessages, getChannelUpdates } from './models/chat.model';

const appContainer = document.querySelector( '.js-app' );

fetchChannels()
    .subscribe( channels => console.table( channels ) );

// join fetchUsers and fetchMessages to one, then call updateChannel

// C62134CF9     C62134DC7
const channelId = 'C62134CF9';
fetchMessages( channelId )
    .subscribe( messages => {
        console.table( messages );
        getChannelUpdates( channelId )
            .then( observable =>  
                observable.subscribe( event => console.log( event ) )
            );
    } );


/* error
Rx.Observable.webSocket( 'wss:\/\/mpmulti-g1jh.slack-msgs.com\/websocket\/U1HFPtp6X2m_YtHGIYekGMrBA3rDjZ2W6OoRFChjlY-uUe2opZ2PlXZ36mljzpHF66SFODdvYUMSZGSHy3dT_f4cC1FVhns5TzjQheWq3roS42QVmE2MIZpgOVYWJseVvCjVFFPOvr_F2VOxjeGY5iEoZ5sl0XqSpZXvXUkVve0=' )
    .subscribe( x => console.log( x ) )

*/

