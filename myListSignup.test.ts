import {mccormickPage} from "./srPageObject";
const mccSR = new mccormickPage
const fs = require ("fs")

test ('Test to add entries to meal plan sign up', async () => {
    await mccSR.navigate();
    await mccSR.click(mccSR.myList);
    await mccSR.click(mccSR.mealPlanner);
    await mccSR.driver.sleep(2000);
    await mccSR.click(mccSR.cancelBtn)
    await mccSR.driver.sleep(1000);
    await mccSR.click(mccSR.firstName)
    await mccSR.setInput(mccSR.firstName, 'FirstNameTest')
    await mccSR.click(mccSR.lastName)
    await mccSR.setInput(mccSR.lastName, 'LastNameTest')
    await mccSR.click(mccSR.email)
    await mccSR.setInput(mccSR.email, 'test@test.com')
    await mccSR.click(mccSR.password)
    await mccSR.setInput(mccSR.password, 'password')
    await fs.writeFile(`${__dirname}/MyListSignup.png`,
    await mccSR.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Save Succesful')
    }
    )
    await mccSR.driver.quit()
})