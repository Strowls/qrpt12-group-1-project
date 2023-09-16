import { By } from "selenium-webdriver";
import {BasePage} from './basePage';

export class mcHowToPage extends BasePage {
    howTos: By = By.xpath('//li[@class="label1 item_3 has-subnav"]')
    seeAllArticles: By = By.xpath('//a[text()="See All"]')
    waysToGB: By = By.xpath('//h3[text()="How to Cook Ground Beef Using 3 Different Methods"]')
    brownies: By = By.xpath('//a[text()="How To Make Brownies"]')
    redVBrownies: By = By.xpath('//a[text()="Easy Red Velvet Brownies"]')
    viewRecipe: By = By.xpath('//Button[text()="View Recipe Only"]')
    seeMore: By = By.xpath('//a[@id="tab-see-more-recipe"]')
    meetOChefs: By = By.xpath('//a[text()="Meet our Chefs"]')
    chefGilbert: By = By.xpath('//a[text()="Cindy Gilbert"]')
    eggRoll: By = By.xpath('//a[text()="Chicken Egg Roll Recipe"]')
    cancelBtn: By = By.xpath('//*[@id="ow-regitration-form"]/div[3]/button')
    constructor() {
        super({url: 'https://www.mccormick.com/'})
    };
};