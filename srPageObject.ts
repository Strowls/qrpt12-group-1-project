import { By, until, WebDriver, WebElement } from "selenium-webdriver";
import { BasePage } from "./basePage";
const chromedriver = require('chromedriver');


export class mccormickPage extends BasePage {
    driver: WebDriver;
    url: string = 'https://www.mccormick.com/';
    mcPage: By = By.xpath('(//a[@*])[1]');
    frenchs: By = By.xpath('(//a[@*])[2]');
    gourmet: By = By.xpath('(//a[@*])[3]');
    grillmates: By = By.xpath('(//a[@*])[4]');
    lawrys: By = By.xpath('(//a[@*])[5]');
    zatarains: By = By.xpath('(//a[@*])[6]');
    products: By = By.xpath('//a[text()="Products"]');
    spices: By = By.xpath('(//a[@*])[17]');
    cancelBtn: By = By.xpath('//*[@id="ow-regitration-form"]/div[3]/button');
    applePieSpice: By = By.xpath('(//a[text()="McCormick® Apple Pie Spice"])[1]');
}

