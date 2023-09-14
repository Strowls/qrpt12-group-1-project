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

    constructor() {
        super({url: "https://www.mccormick.com/"});
    };
  
}
