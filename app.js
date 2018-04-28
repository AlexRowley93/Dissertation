const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Initialize app
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Import routes
const getMapData = require("./resources/map-data/get-map-data-route");


//Listen on routes
app.use('/', getMapData);


app.listen(4000, done => {
    console.log('Running on port ' + 4000);
});


//Import routes




