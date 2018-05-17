const express = require('express');
const router = express.Router();

const locationModel = require('./crime-type-model');

/**
 * GET /
 * Get's the available crime types from the crime type model.
 * Route only deals with the reuqest and response, not the fetching of data
 */
router.get('/', (req, res) => {

    // Use model to get data, query constructed within here
    locationModel.getCrimeTypes()
        .then(crimeTypes => {
            res.status(200).send(crimeTypes);
        })
        .catch(err => {
            res.status(500).send(err.toString());
        })

});

module.exports = router;