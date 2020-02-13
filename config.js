let mysql = require("mysql");

let conn = mysql.createConnection({
    database: "the_good_number",
    host: "164.132.46.160",
    user: "good_number",
    password: "BgsUigDQHyhKPxFd"
  });

exports.conn = conn;