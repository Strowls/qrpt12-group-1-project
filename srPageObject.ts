import { By, until, WebDriver, WebElement } from "selenium-webdriver";
const chromedriver = require('chromedriver');

export class mccormickPage {
    driver: WebDriver;
    url: string = 'https://www.mccormick.com/';
    frenchs: By = By.xpath('(//a[@*])[2]');
    mccormick: By = By.xpath('(//a[@*])[1]');
    grillmates: By = By.xpath('(//a[@*])[3]');
    lawrys: By = By.xpath('(//a[@*])[4]');
    zatarains: By = By.xpath('(//a[@*])[5]')
}

