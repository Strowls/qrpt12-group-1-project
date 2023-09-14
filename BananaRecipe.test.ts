import { mccormickBP } from "./mccormickBP";

const mcc = new mccormickBP()

test('Banana Muffin Recipe loads correctly', async () => {
    await mcc.navigate()
    await mcc.driver.manage().window().maximize()
    await mcc.click(mcc.Recipes)
    await mcc.click(mcc.ARecipes)
    await mcc.click(mcc.QBreakfast)
    await mcc.click(mcc.DonutsBG)
    await mcc.click(mcc.SeeMore)
    await mcc.click(mcc.BananaNM)
    await mcc.click(mcc.FullRecipe)
    
})