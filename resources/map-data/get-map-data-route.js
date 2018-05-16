const express = require('express');
const router = express.Router();

const mapDataModel = require('./get-map-data-model');


router.get('/', (req, res) => {

    const params = req.query;

    mapDataModel.getMapDataModel(params)
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.status(500).send(error.toString());
        })

});


module.exports = router;