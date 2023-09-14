import { By, until, WebDriver, WebElement } from "selenium-webdriver";
import { BasePage } from "./basePage";
const chromedriver = require('chromedriver');


export class mccormickPage extends BasePage {
    driver: WebDriver;
    url: string = 'https://www.mccormick.com/';
    frenchs: By = By.xpath('(//a[@*])[1]');
    gourmet: By = By.xpath('(//a[@*])[2]');
    grillmates: By = By.xpath('(//a[@*])[3]');
    lawrys: By = By.xpath('(//a[@*])[4]');
    zatarains: By = By.xpath('(//a[@*])[5]');
    spices: By = By.xpath('(//a[@*])[16]');
    cancelBtn: By = By.xpath('//*[@id="ow-regitration-form"]/div[3]/button');
    applePieSpice: By = By.xpath('(//a[text()="McCormick® Apple Pie Spice"])[1]');
}

