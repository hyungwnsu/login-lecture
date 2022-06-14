// const database = require("mime-db");

const MySQL = require("mysql");

const db = MySQL.createConnection({
    host:'localhost',
    port:'3305',
    user:'root',
    password:'1234',
    database: 'kwm',
});
db.connect();

module.exports = db;