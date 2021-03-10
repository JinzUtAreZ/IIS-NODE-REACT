const express = require('express');
const app = express();
const dbconfig = require('./connection/connectdb');

//const PORT = process.env.PORT || 5000;

// Define Routes
app.use('/api/users', require('./routes/users'));

app.listen(dbconfig.port(), function() {
  var datetime = new Date();
  var message =
    'Server runnning on Port:- ' +
    dbconfig.port() +
    ' Started at :- ' +
    datetime;
  console.log(message);
});
