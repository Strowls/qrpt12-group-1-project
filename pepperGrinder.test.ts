import {mccormickPage} from "./srPageObject";
const mccSR = new mccormickPage

test ('Pepper Grinder Test',async () => {
    await mccSR.navigate();
    await mccSR.click(mccSR.products);
    await mccSR.click(mccSR.grinders);
    await mccSR.click(mccSR.pepperGrinder);
    await mccSR.driver.sleep(2000);
    await mccSR.driver.quit();
});