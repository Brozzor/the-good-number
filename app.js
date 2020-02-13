// Import de puppeteer
const puppeteer = require("puppeteer")
const sql = require('./config.js');
const getData = async () => {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()

  await page.goto("https://www.fdj.fr/jeux-de-tirage/loto/resultats")
  await page.waitFor(1000)
    const result = await page.evaluate(() => {

        let number = [];
        let i = 0;
        let temp = 0;
        while (i < 6){
       temp = document.getElementsByClassName('numbers-item_num')[i].innerText
       number.push(`'${temp}'`);
       i++;
       }
       
        return { number }
      })

  browser.close();
  return result
}

// Appel de la fonction getData() et affichage des données
getData().then(value => {
  console.log(value)
})
