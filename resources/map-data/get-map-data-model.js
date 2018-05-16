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

        let returnResponse = {
            "type":"FeatureCollection",
        };


        db.executeQuery(query)
            .then(response => {

                let locations = [];

                response.forEach(location => {

                    let template = {
                        "type":"Feature",
                        "properties":{},
                        "geometry":{
                            "type":"Point",
                            "coordinates":[]
                        }
                    };

                    if(location.Longitude && location.Latitude){
                        template.properties = {
                            "ReportedBy": location.ReportedBy,
                            "location": location.Location,
                            "CrimeType": location.CrimeType
                        };
                        template.geometry.coordinates = [location.Longitude, location.Latitude, 0];
                        locations.push(template)
                    }
                });
                returnResponse.features = locations;
                resolve(returnResponse)
            })
            .catch(err => {
                reject(err);
            })
    })
};

