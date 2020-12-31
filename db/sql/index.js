const mysql = require('mysql');
const mysqlConfig = require('../../config.js');

const connection = mysql.createConnection(mysqlConfig);

module.exports = {
  connection: connection
}

//database connection did not work without exporting the connection, do I have to do this?
//how do node exports work?