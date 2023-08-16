import axios from 'axios';

const instance = axios.create(
    {
        baseURL: 'http://localhost:5001/clone-6618c/us-central1/api'  // THE API URL (cloud function)
    }
)

export default instance;