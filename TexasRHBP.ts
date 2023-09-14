import {By} from "selenium-webdriver"
import {BasePage} from "./basePage"

export class TXRH extends BasePage {
    results: By = By.id('rcnt');
    menu: By = By.xpath('//*[@id="block-texasroadhouse-mainnavigation"]/ul/li[1]/a');
    mMenu: By = By.xpath('//*[@id="mobile-menu-hamburger-link"]');
    mmMenu: By = By.xpath('//*[@id="block-texasroadhouse-mainnavigation-2"]/ul/li[1]/a')
    JFS: By = By.xpath('(//div[@class="category_item"])[1]');
    Salads: By = By.xpath('(//div[@class="category_item"])[2]');
    HandCS: By = By.xpath('(//div[@class="category_item"])[3]');
    Ribs: By = By.xpath('(//div[@class="category_item"])[4]');
    DockSideF: By = By.xpath('(//div[@class="category_item"])[5]');
    TexasCombos: By = By.xpath('(//div[@class="category_item"])[6]');
    ChickenSpec: By = By.xpath('(//div[@class="category_item"])[7]');
    CountryDin: By = By.xpath('(//div[@class="category_item"])[8]');
    BurgSand: By = By.xpath('(//div[@class="category_item"])[9]');
    SideEx: By = By.xpath('(//div[@class="category_item"])[10]');
    KidsRanger: By = By.xpath('(//div[@class="category_item"])[11]');
    Desserts: By = By.xpath('(//div[@class="category_item"])[12]');
    Beverages: By = By.xpath('(//div[@class="category_item"])[13]');

    constructor() {
        super({url: "https://www.texasroadhouse.com"});
    };
    async getResults() {
        return this.getText(this.results);
    };
};
