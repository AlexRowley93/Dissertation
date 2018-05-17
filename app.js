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
const getLocationData = require("./resources/location-data/location-route");
const getCrimeTypes = require("./resources/crime-type-data/crime-type-route");


//Listen on routes

// When /map hit, send all connections to ./resources/map-data/get-map-data-route file
app.use('/map', getMapData);

// When /locations hit, send all connections to ./resources/location-data/location-route file
app.use('/locations', getLocationData);

// When /crime-types hit, send all connections to ./resources/crime-type-data/crime-type-route file
app.use('/crime-type', getCrimeTypes);

// Set server to listen on port 4000
app.listen(4000, done => {
    console.log('Running on port ' + 4000);
});





