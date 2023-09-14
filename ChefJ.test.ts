import { mccormickBP } from "./mccormickBP";

const mcc = new mccormickBP()
const fs = require("fs")

test('Chef J Favorite Recipe Loads', async () => {
    await mcc.navigate()
    await mcc.driver.manage().window().maximize()
    await mcc.click(mcc.KitchenHT)
    await mcc.click(mcc.MeetChef)
    await mcc.driver.sleep(2000)
    await mcc.click(mcc.CancelBtn)
    await mcc.driver.sleep(2000)
    await mcc.click(mcc.ChefJ)
    await mcc.driver.sleep(2000)
    await mcc.click(mcc.BTacos)
    await mcc.driver.sleep(2000)
    await mcc.click(mcc.ViewRecO)
    await fs.writeFile(`${__dirname}/ChefJRecipe.png`,
    await mcc.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Save Succesful')
    }
    )
    await mcc.driver.quit()
})