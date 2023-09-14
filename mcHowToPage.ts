import { By } from "selenium-webdriver";
import {BasePage} from './basePage';

export class mcHowToPage extends BasePage {
    howTos: By = By.xpath('//li[@class="label1 item_3 has-subnav subnav-open"]')
    seeAll: By = By.xpath('(//a[text()="See All"])[1]')
    waysToGB: By = By.xpath('//h3[text()="How to Cook Ground Beef Using 3 Different Methods"]')
    Brownies: By = By.xpath('//a[text()="How To Make Brownies"]')
    redVBrownies: By = By.xpath('//a[text()="Easy Red Velvet Brownies"]')
    viewRecipe: By = By.xpath('//button[@class="ow-recipe-video-button ow-view-recipe-btn"]')


    constructor() {
        super({url: 'https://www.mccormick.com/'})
    };
};