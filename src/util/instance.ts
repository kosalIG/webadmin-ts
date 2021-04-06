import axios from 'axios';
import { serviceAuthenticate, authKey } from 'env';

const instance = axios.create({
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'X-API-AUTH-KEY': authKey,
    },
    baseURL: serviceAuthenticate,
});

export default instance;
