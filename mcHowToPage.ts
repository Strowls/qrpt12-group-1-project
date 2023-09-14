import { By } from "selenium-webdriver";
import {BasePage} from './basePage';

export class Mcck extends BasePage {
    kitchenHowTos: By = By.xpath('//a[@target="_self"]')
    seeAllArticles: By = By.xpath('//a[text()="See All"]')

    constructor() {
        super({url: 'https://www.mccormick.com/'})
    };
};