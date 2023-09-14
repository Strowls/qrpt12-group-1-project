import { mccormickBP } from "./mccormickBP";

const mcc = new mccormickBP()
const fs = require("fs")

test('Banana Muffin Recipe loads correctly', async () => {
    await mcc.navigate()
    await mcc.driver.manage().window().maximize()
    await mcc.click(mcc.Recipes)
    await mcc.driver.sleep(2000)
    await mcc.click(mcc.ARecipes)
    await mcc.driver.sleep(2000)
    await mcc.click(mcc.QBreakfast)
    await mcc.driver.sleep(2000)
    await mcc.click(mcc.CancelBtn)
    await mcc.driver.sleep(2000)
    await mcc.click(mcc.DonutsBG)
    await mcc.driver.sleep(2000)
    await mcc.click(mcc.SeeMore)
    await mcc.driver.sleep(2000)
    await mcc.click(mcc.BananaNM)
    await mcc.driver.sleep(2000)
    await mcc.click(mcc.FullRecipe)
    await mcc.driver.sleep(2000)
    await fs.writeFile(`${__dirname}/bananamuffinrecipe.png`,
    await mcc.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Save Succesful')
    }
    )
})