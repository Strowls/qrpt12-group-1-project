import {mcHowToPage} from './mcHowToPage'
const mcck = new mcHowToPage ();

test('find 3 ways to ground beef article', async () => {
    await mcck.navigate()
    await mcck.driver.manage().window().maximize()
    await mcck.driver.sleep(2000)
    await mcck.click(mcck.howTos)
    await mcck.driver.sleep(2000)
    await mcck.click(mcck.seeAllArticles)
    await mcck.driver.sleep(2000)
    await mcck.click(mcck.cancelBtn)
    await mcck.click(mcck.waysToGB)
    await mcck.driver.sleep(2000)
    await mcck.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Save Succesful')
    }
    await mcck.driver.quit()
})