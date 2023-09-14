import {By} from "selenium-webdriver"
import {BasePage} from "./basePage"

export class mccormickBP extends BasePage {
    Recipes: By = By.xpath('//a[text()="Recipes"]')
    ARecipes: By = By.xpath('//a[text()="View All Recipes"]')
    QBreakfast: By = By.xpath('(//img[@*])[15]')
    DonutsBG: By = By.xpath('//a[text()="Donuts & Baked Goods"]')
    CancelBtn: By = By.xpath('//*[@id="ow-regitration-form"]/div[3]/button')
    SeeMore: By = By.xpath('//a[@id="tab-see-more-recipe"]')
    BananaNM: By = By.xpath('(//div[@class="ow-square-recipe-card clickable-card"])[9]')
    FullRecipe: By = By.xpath('//button[@class="ow-recipe-video-button ow-view-recipe-btn"]')
    MeetChef: By = By.xpath('//a[text()="Meet our Chefs"]')
    ChefJ: By = By.xpath('(//a[@class="btn ow-btn-default"])[5]')
    BTacos: By = By.xpath('//a[text()="Birria Tacos Recipe"]')
    KitchenHT: By = By.xpath('//li[@class="label1 item_3 has-subnav"]')
    ViewRecO: By = By.xpath('//Button[text()="View Recipe Only"]')

    constructor() {
        super({url: "https://www.mccormick.com/"});
    };
  
}
