const mysql = require('mysql')

//This is our connection to the database. Its passed to many files.
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Jakeybear5!',
  port     : 3306,
  database: 'HolisticDB'
});
  //This is just to log when your done connecting.
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
  });
  //this is telling all those files that this is being sent to. to specifically use connection when calling on this file.
  module.exports = connection