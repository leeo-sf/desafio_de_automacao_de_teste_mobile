import { assertChai, formsScreen, menuScreen } from "../../variables"
import { formsData } from "../../data/forms/forms.data"
import { menu } from "../../data/menu/menu.data";

describe("Valida informações e campos do formulário", function () {

    before("Navega até tela de forms", async function () {
        await menuScreen.navigateToLoginScreen(menu.menuOptions.forms, 18000)
    })

    it("Valida titulo 'Input field' e input 'Type Something'", async function () {
        assertChai.isTrue(await formsScreen.isDisplayedLblGenericTitleGroup(formsData.fieldsTitle.inpField), 'O título "Input field:" não foi exibido!')
        assertChai.isTrue(await formsScreen.isDisplayedInpTypeSomething(), 'O input "Type Something" não foi exibido!')
    })

    it("Valida titulo 'You have typed' e input", async function () {
        assertChai.isTrue(await formsScreen.isDisplayedLblGenericTitleGroup(formsData.fieldsTitle.typed), 'O título "You have typed" não foi exibido!')
        assertChai.isTrue(await formsScreen.isDisplayedLblYouHaveTyped(), 'O input "You have typed" não foi exibido!')
    })

    it("Valida titulo 'Switch', 'toggle' e label 'Click to turn the switch $status'", async function () {
        assertChai.isTrue(await formsScreen.isDisplayedLblGenericTitleGroup(formsData.fieldsTitle.switch), 'O título "Switch" não foi exibido!')
        assertChai.isTrue(await formsScreen.isDisplayedBtnSwitch(), 'O toggle "Switch" não foi exibido!')
        assertChai.isTrue(await formsScreen.isEnabledBtnSwitch(), 'O toggle "Switch" não é clicável!')
    })

    it("Valida titulo 'Dropdown' e dropdown", async function () {
        assertChai.isTrue(await formsScreen.isDisplayedLblGenericTitleGroup(formsData.fieldsTitle.dropdown), 'O título "Dropdown" não foi exibido!')
        assertChai.isTrue(await formsScreen.isDisplayedDwnSelectAnItem(), 'O dropdown não foi exibido!')
        assertChai.isTrue(await formsScreen.isEnabledDwnSelectAnItem(), 'O dropdown pode ser selecionado!')
    })

    it("Valida buttons 'Active' e 'Inactive'", async function () {
        assertChai.isTrue(await formsScreen.isDisplayedLblGenericTitleGroup(formsData.fieldsTitle.buttons), 'O título "Buttons" não foi exibido!')
        assertChai.isTrue(await formsScreen.isDisplayGenericActiveOrInactive(formsData.buttons.active), 'O botão "Active" não foi exibido!')
        assertChai.isTrue(await formsScreen.isEnabledGenericActiveOrInactive(formsData.buttons.active), 'O botão "Active" não pode ser clicado!')
        assertChai.isTrue(await formsScreen.isDisplayGenericActiveOrInactive(formsData.buttons.inactive), 'O botão "Inactive" não foi exibido!')
        assertChai.isTrue(await formsScreen.isEnabledGenericActiveOrInactive(formsData.buttons.active), 'O botão "Inactive" pode ser clicado!')
    })

})