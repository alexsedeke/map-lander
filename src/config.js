
const config = {
    validate: {
        password: {
            minLength: 8
        }
    },
    fetch: {
        baseURL: 'http://localhost:8000/',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
}

export default config;
