// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/mean_app", { useNewUrlParser: true });

//mongoose.connect('mongodb://localhost:27017/');
// Get our API routes
const api = require('./server/routes/api');

const app = express();


app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
        res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
        res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365);
        next();
});


// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));