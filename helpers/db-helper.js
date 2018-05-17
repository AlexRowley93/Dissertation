const sql = require('mysql');

const config = require('../appConfig');


/**
 * Return a database connection
 * @returns {Promise}
 */
const getConnection = () => {
    return new Promise((resolve, reject) => {
        // Creates a new SQL connection with the database using the config from the config file
        const connection = sql.createConnection(config.database);
        // Connects to the database
        connection.connect(err => {
            if(err){
                reject(err);
            }
            // Return the connection
            resolve(connection);
        });
    })
};

/**
 * Executes a query in the database
 * @param conn
 * @param query
 * @returns {Promise}
 */
exports.executeQuery = async (query) => {
    return new Promise((resolve, reject) => {
        // Gets the connection using the above function
        getConnection()
            .then(conn => {
                // Use the connection to execute the query passed into the function
                conn.query(query, function (error, results, fields) {
                    if (error) throw error;
                    //End database connection
                    conn.end();
                    // Return the results back to where the function was called from
                    resolve(results);
                })
            })
            .catch(err => {
                reject(err);
            });
    })
};
