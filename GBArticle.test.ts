import {mcHowToPage} from './mcHowToPage'
const mcck = new mcHowToPage ();
const fs = require("fs")

test('find 3 ways to ground beef article', async () => {
    await mcck.navigate()
    await mcck.driver.manage().window().maximize()
    await mcck.driver.sleep(2000)
    await mcck.click(mcck.howTos)
    await mcck.driver.sleep(2000)
    await mcck.click(mcck.seeAllArticles)
    await mcck.driver.sleep(3000)
    await mcck.click(mcck.cancelBtn)
    await mcck.driver.sleep(4000)
    await mcck.click(mcck.waysToGB)
    await mcck.driver.sleep(2000)
    await fs.writeFile(`${__dirname}/threeWaysToGBRecipe.png`,
    await mcck.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Save Succesful')
    })
    await mcck.driver.quit()
});