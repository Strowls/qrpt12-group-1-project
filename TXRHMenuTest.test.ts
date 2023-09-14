import { TXRH } from "./TexasRHBP";

const TexasRH = new TXRH()

test('Menu List Works', async () => {
    await TexasRH.navigate()
    await TexasRH.click(TexasRH.mMenu)
    await TexasRH.click(TexasRH.mmMenu)
    await TexasRH.click(TexasRH.JFS)
    await TexasRH.click(TexasRH.Salads)
    await TexasRH.click(TexasRH.HandCS)
    await TexasRH.click(TexasRH.Ribs)
    await TexasRH.click(TexasRH.DockSideF)
    await TexasRH.click(TexasRH.TexasCombos)
    await TexasRH.click(TexasRH.ChickenSpec)
    await TexasRH.click(TexasRH.CountryDin)
    await TexasRH.click(TexasRH.BurgSand)
    await TexasRH.click(TexasRH.SideEx)
    await TexasRH.click(TexasRH.KidsRanger)
    await TexasRH.click(TexasRH.Desserts)
    await TexasRH.click(TexasRH.Beverages)
})