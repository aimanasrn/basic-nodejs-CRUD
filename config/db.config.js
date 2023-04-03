require("dotenv").config()

const {DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD} = process.env

const config = {
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USERNAME,
    database: DB_DATABASE,
}

console.log(DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME)
console.log(config)

module.exports = config;

// module.exports = {
//   host: DB_HOST,
//   port: DB_PORT,
//   user: DB_USERNAME,
//   database: DB_DATABASE,
// };
