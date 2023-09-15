import {mcHowToPage} from './mcHowToPage'
const mcck = new mcHowToPage ();

test('How To Make Red Velvet Brownies', async() => {
    await mcck.navigate()
    await mcck.driver.manage().window().maximize()
    await mcck.driver.sleep(2000)
    await mcck.click(mcck.howTos)
    await mcck.driver.sleep(2000)
    await mcck.click(mcck.brownies)
    await mcck.driver.sleep(2000)
    await mcck.click(mcck.redVBrownies)
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