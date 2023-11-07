import axios, { Axios } from 'axios';
/*  const token = localStorage.getItem('token');
if (token) {
  http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}  */

export const clientHttp = axios.create(
    {
        baseURL: "http://localhost:4008/",
        headers: {
            Accept: 'text/plain',
            'Content-Type': 'application/json',
           // 'Authorization': 'Bearer ${token}', 
        }
    }
)