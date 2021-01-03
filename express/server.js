const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();

const router = express.Router();
// ================================================================
// setup our express application
// ================================================================
app.use('/public', express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('./pages/index');
});

app.get('/generic', function(req, res) {
  res.render('./pages/generic');
});

app.get('/element', function(req, res) {
  res.render('./pages/element');
});

app.post('/', (req, res) => res.json({ postBody: req.body }));

app.use('/.netlify/functions/server', router);  // path must route to lambda



module.exports = app;
module.exports.handler = serverless(app);
