import http from 'k6/http';
import { sleep, check } from 'k6';

import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

//token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDkwNjI2NTksImlhdCI6MTY0OTA2MjA1OSwiVWlkIjoiZGY5MDBhYjMtYjNmMy0xMWVjLTlkZDQtMDI0MmFjMTUwMDA1In0.NtC2dxbuQlYm1lroTk9CsSS_q4CUNODa4kYjpKZADJo

const BASE_URL = ''

export const options = {
    stages: [
        {duration: '30s', target: 100},
        {duration: '30s', target: 200},
        {duration: '30s', target: 300},
        {duration: '30s', target: 400},
        {duration: '30s', target: 500},
        {duration: '30s', target: 600},
        {duration: '30s', target: 700},
        {duration: '30s', target: 800},
        {duration: '30s', target: 900},
        {duration: '30s', target: 1000},
        {duration: '30s', target: 1500},
        {duration: '30s', target: 2000},
        {duration: '30s', target: 50}
    ]
};

export default function() {

    let resp = http.get(`${BASE_URL_GAME}/allUsers`, {timeout: 300000})
    console.log(resp.status)
    check(resp, {
            'status was 200':(req) => req.status === 200,
            'status was 500':(req)=> req.status === 500,
            'status was 502':(req)=> req.status === 502,
            'status was 403':(req)=> req.status === 403,
            'status was 520':(req)=> req.status === 504,
            'status was 401':(req)=> req.status === 401,
        })
    sleep(1)
}
