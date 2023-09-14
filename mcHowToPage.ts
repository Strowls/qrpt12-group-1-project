import { By } from "selenium-webdriver";
import {BasePage} from './basePage';

export class Mcck extends BasePage {
    kitchenHowTos: By = By.xpath

    constructor() {
        super({url: 'https://www.mccormick.com/'})
    };
};