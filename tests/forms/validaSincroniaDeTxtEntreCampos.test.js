import { assertChai, formsScreen, menuScreen } from "../../variables"
import { formsData, testDataSincroniaDeTxtEntreCampos } from "../../data/forms/forms.data"
import { menuData } from "../../data/menu/menu.data";

describe("Valida se texto digitado corresponde ao campo 'You have typed'", function () {

    before("Navega até tela de forms", async function () {
        await menuScreen.navigateToOptTabBarScreen(menuData.menuOptions.forms, 18000)
    })

    it("Insere texto no campo 'Input field'", async function () {
        await formsScreen.addTextInpTypeSomething(testDataSincroniaDeTxtEntreCampos.txtToBeTyped)
    })

    it("Valida presença do texto digitado no campo 'You have typed:'", async function () {
        assertChai.equal(await formsScreen.getTextLblYouHaveTyped(), testDataSincroniaDeTxtEntreCampos.txtToBeCompared, 'O texto que foi digitado está diferente do esperado!')
    })

})