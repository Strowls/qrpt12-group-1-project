import {Mick} from './mcHowToPage'
const mick = new mcHowToPage (driver);

test('find article', async ()=>{
    await mick.navigate();
    await mick.findElement(this.articleList)
    await mick.click(this.findElement.toContain())
    await mick.print()
    await mick.cancel()
    await mick.driver.quit();
});