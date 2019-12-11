const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const db = require('./db'); 

//I'm not sure where to put the dbStore.sync()
db.sync();

app.use(morgan('dev'));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Any routes or other various middlewares should go here!

app.use('/api', require('./api'))

app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });