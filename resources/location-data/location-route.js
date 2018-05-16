const express = require('express');
const router = express.Router();

const locationModel = require('./location-model');

/**
 * Gets the location data from the location model
 */
router.get('/', (req, res) => {

    locationModel.getLocationData()
        .then(locations => {
            res.status(200).send(locations);
        })
        .catch(err => {
            res.status(500).send(err.toString());
        })

});

module.exports = router;