import axios from 'axios';

const clientHttp = axios.create(
    {
        baseURL: "http://localhost:4010/",
        headers: {
            Accept: 'text/plain',
            'Content-Type': 'application/json',
        }
    }
)

export default  clientHttp