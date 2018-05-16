const express = require('express');
const router = express.Router();

const locationModel = require('./crime-type-model');

/**
 * GET /
 * Get's the available crime types from the crime type model.
 */
router.get('/', (req, res) => {

    locationModel.getCrimeTypes()
        .then(crimeTypes => {
            res.status(200).send(crimeTypes);
        })
        .catch(err => {
            res.status(500).send(err.toString());
        })

});

module.exports = router;