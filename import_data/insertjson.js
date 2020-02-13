const mysql = require('./config');
const fs = require('fs');

let monJson = JSON.parse(fs.readFileSync('convertcsv.json', 'utf8'));

function toTimestamp(myDate){
    myDate=myDate.split("/");
    let newDate=myDate[1]+"/"+myDate[0]+"/"+myDate[2];
    return new Date(newDate).getTime();
 }

for(let valeur of monJson){
    let tempDate = toTimestamp(`'${valeur.date_de_tirage}'`);
    let sqlRequest = `INSERT INTO number(date,number) VALUES('${tempDate}','${valeur.combinaison_gagnante_en_ordre_croissant}')`;
    mysql.conn.query(sqlRequest);
 }