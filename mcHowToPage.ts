import { By } from "selenium-webdriver";
import {BasePage} from './basePage';

export class Mcck extends BasePage {
    kitchenHowTos: By = By.xpath('//li[@class="label1 item_3 has-subnav subnav-open"]')
    seeAllArticles: By = By.xpath('(//a[text()="See All"])[1]')
    waysToGroundBeef: By = By.xpath('//a[@class="module tabbed-banner-module grey-bg-overlay bgloaded"][1]')
    

    constructor() {
        super({url: 'https://www.mccormick.com/'})
    };
};