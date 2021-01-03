import Rx from 'rxjs/Rx';
import axios from 'axios';
import { API_TOKEN } from '../constants/api.const';

const getChannelUrl = channelId => 
    `https://slack.com/api/channels.history?token=${API_TOKEN}&channel=${channelId}`;

export const fetchMessages = channelId => 
    Rx.Observable.fromPromise( axios.get( getChannelUrl( channelId ) ) )
      .map( response => response.data.messages );

export const getChannelUpdates = channelId => 
    axios.get( `https://slack.com/api/rtm.connect?token=${API_TOKEN}&channel=${channelId}` )
        .then( response => Rx.Observable.webSocket( response.data.url ) );


