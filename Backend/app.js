import http from 'http';
var ip = '127.0.0.1';
var port = 9000;
import express from './express';
import api from './api';

var app = express(api);
const server = http.createServer(app);

setImmediate(() => {
  server.listen(port, ip, () => {
    console.log('Express server listening on http://%s:%d', ip, port)
  })
});

export default app
