const db = require('../../helpers/db-helper');


/**
 * Gets the available locations available in the database
 * @returns {Promise}
 */
exports.getLocationData = () => {


    return new Promise((resolve, reject) => {

        let query = `SELECT location, longitude, latitude FROM locations`;

        db.executeQuery(query)
            .then(response => {

                let locations = [];
                response.forEach(location => {
                    locations.push(location["location"]);
                });

                resolve(locations);
            })
            .catch(err => {
                reject(err);
            })
    })
};