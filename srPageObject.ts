import { By, WebDriver } from "selenium-webdriver";
import { BasePage } from "./basePage";


export class mccormickPage extends BasePage {
    driver: WebDriver;
    url: string = 'https://www.mccormick.com/'
    frenchs: By = By.xpath('(//a[@*])[2]')
    gourmet: By = By.xpath('(//a[@*])[3]')
    grillmates: By = By.xpath('(//a[@*])[4]')
    lawrys: By = By.xpath('(//a[@*])[5]')
    zatarains: By = By.xpath('(//a[@*])[6]')
    products: By = By.xpath('//a[text()="Products"]')
    spices: By = By.xpath('(//a[@*])[17]')
    cancelBtn: By = By.xpath('//*[@id="ow-regitration-form"]/div[3]/button')
    applePieSpice: By = By.xpath('(//a[text()="McCormick® Apple Pie Spice"])[1]')
    grinders: By = By.xpath('(//a[@*])[19]')
    pepperGrinder: By = By.xpath('(//a[text()="McCormick® Premium Black & White Peppercorn Grinder"])[1]')
    myList: By = By.xpath('//a[@class="ow-mylist"]')
    mealPlanner: By = By.xpath('//a[@class="go-to-btn"]')
    firstName: By = By.css('#reg-firstnametall')
    lastName: By = By.css('#reg-lastnametall')
    email: By = By.css('#reg-emailtall')
    password: By = By.css('#reg-passwordtall')
};

