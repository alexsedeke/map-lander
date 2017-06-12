import config from '../config';
import { handleFetchErrors } from './error';

export const login = (email, password) => {
    return fetch(config.fetch.baseURL + 'account/auth', {
        method: 'POST',
        headers: config.fetch.headers,
        body: JSON.stringify({
            username: email,
            password: password
        })
    })
    .then(handleFetchErrors)
    .then(res => res.json());
}
