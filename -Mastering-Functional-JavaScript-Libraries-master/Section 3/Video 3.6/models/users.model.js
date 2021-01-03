import Rx from 'rxjs/Rx';
import axios from 'axios';
import { API_TOKEN } from '../constants/api.const';

export const fetchUsers = () =>
    Rx.Observable.fromPromise( 
        axios.get( `https://slack.com/api/users.list?token=${API_TOKEN}` ) 
    );