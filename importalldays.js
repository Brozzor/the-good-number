const puppeteer = require("puppeteer")
const mysql = require('./config');

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
        number = number + ',' + temp;
       }

       i++;
       }
       
        return { number }
      })

  browser.close();
  console.log(result)
}

getData();
