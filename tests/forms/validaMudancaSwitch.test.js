import { assertChai, formsScreen, menuScreen } from "../../variables"
import { formsData } from "../../data/forms/forms.data"
import { menuData } from "../../data/menu/menu.data";

describe("Valida 'ON' e 'OFF' do switch", function () {

    before("Navega até tela de forms", async function () {
        await menuScreen.navigateToOptTabBarScreen(menuData.menuOptions.forms, 18000)
    })

    it("Valida mudança do switch para 'ON'", async function () {
        //assertChai.isTrue(await formsScreen.isDisplayedLblSwitchText(), 'O texto "Click to turn the switch $status" do campo "Switch" não foi exibido!')
        const statusSwitchBeforeClick = await formsScreen.getStatusSwitch()
        await formsScreen.clickSwitch()
        assertChai.equal(await formsScreen.getTextLblSwitchText(), formsData.msgSwitch(statusSwitchBeforeClick ? "OFF" : "ON"), 'A label de status da switch está diferente do esperado!')
    })

    it("Valida mudança do switch para 'OFF'", async function () {
        const statusSwitchBeforeClick = await formsScreen.getStatusSwitch()
        await formsScreen.clickSwitch()
        assertChai.equal(await formsScreen.getTextLblSwitchText(), formsData.msgSwitch(statusSwitchBeforeClick ? "ON" : "OFF"), 'A label de status da switch está diferente do esperado!')
    })

})