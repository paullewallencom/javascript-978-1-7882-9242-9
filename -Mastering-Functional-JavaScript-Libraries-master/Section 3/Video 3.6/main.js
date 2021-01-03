import Rx from 'rxjs/Rx';
import { fetchChannels } from './models/channels.model';
import { fetchMessages, getChannelUpdates } from './models/chat.model';  
import { fetchUsers } from './models/users.model';
import { renderChannels, setupChannelListeners } from './presenters/channels.presenter';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
import { renderMessageBox } from './presenters/messagebox.presenter';

let channelId = null;
let messages = [];
let users = [];


const prepareMessageBox = newChannelId => {
    fetchMessages( newChannelId )
        .subscribe( newMessages => {
            channelId = newChannelId;
            messages = newMessages;
            renderMessageBox( messages, users );
        } );
}

const prepareChannels = channels => {
    renderChannels( channels );
    setupChannelListeners()
        .subscribe( prepareMessageBox );    
}
                                                                                                                                                                                                                                                                                                                
Rx.Observable.forkJoin( fetchChannels(), fetchUsers() )
  .subscribe( result => {
      users = result[1].data.members;
      prepareChannels( result[0] );
  } ); 

getChannelUpdates().then( socket => 
    socket
        .filter( update => update.type === 'message' && 
                           update.channel === channelId 
        ).subscribe( update => {
            const isMessageNew = 
                typeof messages.find( m => m.ts === update.ts ) === 'undefined';
            if ( isMessageNew ) {
                messages.push( update );
                renderMessageBox( messages );
            }
        } ) );