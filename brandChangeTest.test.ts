import { Driver } from "selenium-webdriver/chrome";
import {mccormickPage} from "./srPageObject";
const brandPage = new mccormickPage

test ('Brand change via top menu',async () => {
    await brandPage.navigate();
    await brandPage.click(brandPage.frenchs);
    await brandPage.driver.sleep(2000);
    await brandPage.navigate();
    await brandPage.click(brandPage.gourmet);
    await brandPage.driver.sleep(2000);
    await brandPage.navigate();
    await brandPage.click(brandPage.grillmates);
    await brandPage.driver.sleep(2000)
    await brandPage.navigate();
    await brandPage.click(brandPage.lawrys);
    await brandPage.driver.sleep(2000);
    await brandPage.navigate();
    await brandPage.click(brandPage.zatarains);
    await brandPage.driver.sleep(2000);
    await brandPage.navigate();
    await brandPage.driver.sleep(2000);
    await brandPage.driver.quit();
})