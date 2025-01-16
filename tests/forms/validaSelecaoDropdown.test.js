import { assertChai, formsScreen, menuScreen } from "../../variables"
import { formsData } from "../../data/forms/forms.data"
import { menu } from "../../data/menu/menu.data";

describe("Valida seleção de opção do Dropdown", function () {

    before("Navega até tela de forms", async function () {
        await menuScreen.navigateToLoginScreen(menu.menuOptions.forms, 18000)
    })

    it("Seleciona opção 'webdriver.io is awesome'", async function () {
        await formsScreen.selectOptionDwnSelectAnItem(formsData.dropdown.wdio)
        assertChai.equal(await formsScreen.getOptionSelectedDwnSelectAnItem(), formsData.dropdown.wdio, 'O texto da opção "wdio" está diferente do esperado!')
    })

    it("Seleciona opção 'Appium is awesome'", async function () {
        await formsScreen.selectOptionDwnSelectAnItem(formsData.dropdown.appium)
        assertChai.equal(await formsScreen.getOptionSelectedDwnSelectAnItem(), formsData.dropdown.appium, 'O texto da opção "appium" está diferente do esperado!')
    })

    it("Seleciona opção 'This app is awesome'", async function () {
        await formsScreen.selectOptionDwnSelectAnItem(formsData.dropdown.app)
        assertChai.equal(await formsScreen.getOptionSelectedDwnSelectAnItem(), formsData.dropdown.app, 'O texto da opção "app" está diferente do esperado!')
    })

})