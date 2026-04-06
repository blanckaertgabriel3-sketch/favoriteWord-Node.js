const mysql = require("mysql");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "favoriteword",
  });

  module.exports = pool;