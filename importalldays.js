const puppeteer = require("puppeteer")
const mysql = require('./config');
const func = require('./func');

const getData = async () => {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()

  await page.goto("https://www.fdj.fr/jeux-de-tirage/loto/resultats")
  await page.waitFor(1000)
    const result = await page.evaluate(() => {

        let number = "";
        let i = 0;
        let temp = 0;
        while (i < 6){
       temp = document.getElementsByClassName('numbers-item_num')[i].innerText

       if (i == 0)
       {
        number = temp;
       }else if (i == 5)
       {
        number = number + '+' + temp;
       }else{
        number = number + '-' + temp;
       }

       i++;
       }
       
        return { number }
      })

  browser.close();
  let sqlRequest = `SELECT count(*) as nb FROM number WHERE number = '${result.number}'`;
  mysql.conn.query(sqlRequest, function(err, rows, fields) {
    if (rows[0].nb == 0)
    {
      let sqlRequest = `INSERT INTO number(date,number) VALUES('${func.timestamp + '000'}','${result.number}')`;
      mysql.conn.query(sqlRequest);
      mysql.conn.end();
    }
  });
 // 
}

getData();