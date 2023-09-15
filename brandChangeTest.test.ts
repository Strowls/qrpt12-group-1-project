import { Driver } from "selenium-webdriver/chrome";
import {mccormickPage} from "./srPageObject";
const mccSR = new mccormickPage

test ('Brand change via top menu',async () => {
    await mccSR.navigate();
    await mccSR.driver.manage().window().maximize()
    await mccSR.driver.sleep(5000);
    await mccSR.click(mccSR.frenchs);
    await mccSR.driver.sleep(2000);
    await mccSR.navigate();
    await mccSR.click(mccSR.gourmet);
    await mccSR.driver.sleep(2000);
    await mccSR.navigate();
    await mccSR.click(mccSR.grillmates);
    await mccSR.driver.sleep(2000)
    await mccSR.navigate();
    await mccSR.click(mccSR.lawrys);
    await mccSR.driver.sleep(2000);
    await mccSR.navigate();
    await mccSR.click(mccSR.zatarains);
    await mccSR.driver.sleep(2000);
    await mccSR.navigate();
    await mccSR.driver.sleep(2000);
    await mccSR.driver.quit();
})