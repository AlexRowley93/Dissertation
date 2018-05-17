const db = require('../../helpers/db-helper');


/**
 * Gets the unique crime types from the database.
 * @returns {Promise}
 */
exports.getCrimeTypes = () => {

    // Return a new promise
    return new Promise((resolve, reject) => {

        // Define the SQL query
        let query = `SELECT crime FROM CrimeType`;

        // Call the DB helper to execute the query
        db.executeQuery(query)
            .then(response => {

                //Create an empty array to store the crime types
                let crimeTypes = [];

                //Iterate over the response and add just the crime type data to the response array
                response.forEach(type => {
                    // Push crime types into the array
                    crimeTypes.push(type["crime"]);
                });

                // Return the array
                resolve(crimeTypes);
            })
            .catch(err => {
                reject(err);
            })
    })
};