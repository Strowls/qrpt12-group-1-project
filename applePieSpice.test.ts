import {mccormickPage} from "./srPageObject";
const mccSR = new mccormickPage

test ('Apple Pie Spice test',async () => {
    await mccSR.navigate();
    await mccSR.click(mccSR.products);
    await mccSR.click(mccSR.spices);
    await mccSR.click(mccSR.applePieSpice);
    await mccSR.driver.sleep(2000);
    await mccSR.driver.quit();
});