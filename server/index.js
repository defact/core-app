/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const http = require('http');

const routes = require('./routes');
const proxy = require('./proxy');

const app = express();

app.use('/', express.static(path.join(__dirname, '..', 'dist')));
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));

const apiHost = process.env.API_HOST || 'http://localhost:4200';

app.use('/api', proxy(apiHost));
app.use('/', routes);

const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Server Running on port ${port}`));
