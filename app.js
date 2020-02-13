// Import de puppeteer
const puppeteer = require("puppeteer")

const getData = async () => {
  // 1 - Créer une instance de navigateur
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()

  // 2 - Naviguer jusqu'à l'URL cible
  await page.goto("https://www.fdj.fr/jeux-de-tirage/loto/resultats")
  await page.waitFor(7000) // fait une pause d'une seconde
    const result = await page.evaluate(() => {

        number = document.getElementsByClassName('numbers-item_num')[0].innerText
        return { number }
      })
  console.log();

  browser.close()
  return result
}


// Appel de la fonction getData() et affichage des données
getData().then(value => {
  console.log(value)
})