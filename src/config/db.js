// const database = require("mime-db");

const MySQL = require("mysql");

const db = MySQL.createConnection({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'1234',
    database: 'kwm',
});
db.connect();

module.exports = db;
