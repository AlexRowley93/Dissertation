const express = require('express');
const router = express.Router();

const mapDataModel = require('./get-map-data-model');


router.get('/', (req, res) => {

    const params = req.query;

    mapDataModel.getMapDataModel(params)
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(error => {
            console.log('error:')
            console.log(error)
            res.status(500).send('There is an error');
        })

});


module.exports = router;