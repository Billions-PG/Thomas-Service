import http from 'k6/http';
import { sleep } from 'k6';
// const relic = require('newrelic');

var rand = (min, max) => {
  return Math.random() * (max-min) + min;
}

export default function () {
  http.get(`http://127.0.0.1:3003/api/product${rand(1, 10000000)}`);
  sleep(1);
}