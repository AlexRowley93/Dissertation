const db = require('../../helpers/db-helper');


/**
 * Gets the map data
 * @param params
 * @returns {Promise}
 */
exports.getMapDataModel = async (params) => {


    return new Promise((resolve, reject) => {

        if(!(params.startDate && params.endDate && params.crimeType && params.location)){
            reject("Invalid params")
        }

        let query = `SELECT * from crime WHERE Month >= "${params.startDate}" AND Month <= "${params.endDate}" AND ReportedBy = "${params.location}" `;

        if(params.crimeType.toUpperCase() === "ALL"){
            query += `AND CrimeType LIKE "%" `;
        } else{
            query += `AND CrimeType = "${params.crimeType}" `;
        }

        console.log(query);


        db.executeQuery(query)
            .then(response => {
                resolve(response)
            })
            .catch(err => {
                reject(err);
            })
    })
};

