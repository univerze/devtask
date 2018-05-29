const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

// load the controller for the /medicines endpoint
const medicineController = require('./medicines/medicine.controller');

const app = express();
const port = process.env.PORT || 3000;

// connect to local db
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/devtest');

// use the bodyparser to get params from POST requests
app.use(bodyParser.json());

app.use('/medicines', medicineController);

app.listen(port, () => {
    console.log('app listening on port', port);
});
