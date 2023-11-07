import axios, { Axios } from 'axios';

export const clientHttp = axios.create(
    {
        baseURL: "http://localhost:4010/",
        headers: {
            Accept: 'text/plain',
            'Content-Type': 'application/json',
           // 'Authorization': 'Bearer ${token}', 
        }
    }
)