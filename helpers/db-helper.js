const sql = require('mysql');

const config = require('../appConfig')


/**
 * Return a database connection
 * @returns {Promise}
 */
const getConnection = () => {
    return new Promise((resolve, reject) => {
        const connection = sql.createConnection(config.database);
        connection.connect(err => {
            if(err){
                reject(err);
            }
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
        getConnection()
            .then(conn => {
                console.log(query);
                conn.query(query, function (error, results, fields) {
                    if (error) throw error;
                    //End database connection
                    conn.end();
                    resolve(results);
                })
            })
            .catch(err => {
                reject(err);
            });

    })
};