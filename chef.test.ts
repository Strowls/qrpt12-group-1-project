import {mcHowToPage} from './mcHowToPage'
const mcck = new mcHowToPage ();

test('Find chef recipe', async() => {
    await mcck.navigate()
    await mcck.driver.manage().window().maximize()
    await mcck.driver.sleep(2000)
    await mcck.click(mcck.howTos)
    await mcck.driver.sleep(2000)
    await mcck.click(mcck.chefGilbert)
    await mcck.driver.sleep(2000)
    await mcck.click(mcck.cancelBtn)
    await mcck.click(mcck.eggRoll)
    await mcck.driver.sleep(2000)
    await mcck.click(mcck.viewRecipe)
    await mcck.driver.sleep(2000)
    await mcck.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Save Succesful')
    }
    await mcck.driver.quit()
})
