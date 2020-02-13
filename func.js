const mysql = require('./config');

let timestamp = Math.round(new Date().getTime() / 1000);

splitnb(10);

function splitnb(day){

    let sqlRequest = 'SELECT * FROM number ORDER BY id DESC LIMIT 10';
    mysql.conn.query(sqlRequest, function(err, rows, fields) {
        let number;
        let numberBase;
        for (let i = 0; i < rows.length; i++) {
            console.log(i)
            number = rows[i].number.split("+");
            numberBase = number[0].split("-");
            numberLuck = number[1].split("-");
            console.log(numberLuck);
          }

    
  });
    

}

exports.splitnb = splitnb;
exports.timestamp = timestamp;