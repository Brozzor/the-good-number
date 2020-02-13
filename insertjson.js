const mysql = require('./config');
const fs = require('fs');

let monJson = JSON.parse(fs.readFileSync('convertcsv.json', 'utf8'));

function toTimestamp(myDate){
    myDate=myDate.split("/");
    let newDate=myDate[1]+"/"+myDate[0]+"/"+myDate[2];
    return new Date(newDate).getTime();
 }
let i = 44;
for(let valeur of monJson){
    let tempDate = toTimestamp(`'${valeur.date_de_tirage}'`);
    let sqlRequest = `INSERT INTO number(id,date,number) VALUES('${i}','${tempDate}','${valeur.combinaison_gagnante_en_ordre_croissant}')`;
    mysql.conn.query(sqlRequest);
    i--;
 }

 return false;