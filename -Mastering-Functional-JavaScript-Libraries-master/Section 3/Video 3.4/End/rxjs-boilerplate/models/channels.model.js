import Rx from 'rxjs/Rx';
import axios from 'axios';
import { API_TOKEN } from '../constants/api.const';

const CHANNELS_URL = `https://slack.com/api/channels.list?token=${API_TOKEN}`;

export const fetchChannels = () => 
    Rx.Observable.fromPromise( axios.get( CHANNELS_URL) )
      .map( response => {
          return response.data.channels.map( channel => {
              return { 
                  id:      channel.id,
                  name:    channel.name,
                  topic:   channel.topic.value,
                  members: channel.members 
              }; 
          } );
      } );



