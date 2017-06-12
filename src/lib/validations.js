import config from '../config';

export const validateEmail = (email) => {
    return fetch(config.fetch.baseURL + 'validate/email', {
        method: 'POST',
        headers: config.fetch.headers,
        body: JSON.stringify({email: email})
    }).then(res => res.json());
}
