const db = require('../../helpers/db-helper');


/**
 * Gets the unique crime types from the database.
 * @returns {Promise}
 */
exports.getCrimeTypes = () => {


    return new Promise((resolve, reject) => {

        let query = `SELECT crime FROM CrimeType`;

        db.executeQuery(query)
            .then(response => {

                //Create an empty array to store the crime types
                let crimeTypes = [];

                //Iterate over the response and add just the crime type data to the response array
                response.forEach(type => {
                    crimeTypes.push(type["crime"]);
                });

                resolve(crimeTypes);
            })
            .catch(err => {
                reject(err);
            })
    })
};