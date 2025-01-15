import { assertChai, loginScreen, menuScreen } from "../../variables"
import { menu } from "../../data/menu/menu.data";
import { login } from "../../data/login/login.data"
import { signup } from "../../data/signup/signup.data";

describe("Valida informações da tela de sign up", function () {

    before("Navega até tela de login", async function () {
        await menuScreen.navigateToLoginScreen(menu.menuOptions.login, 18000)
    })

    it('Clica no botão "Sign up"', async function () {
        await loginScreen.clickBtnGenericOptionLoginOrSignUp(signup.option.signUp)
    })

    it('Valida título da tela', async function () {
        assertChai.isTrue(await loginScreen.isDisplayedPageTitle(), 'O título "Login / Sign up Form" não foi exibido!')
        assertChai.equal(await loginScreen.getTextLblPageTitle(), login.pageTitle, 'O texto "Login / Sign up Form" está diferente do esperado!')
        assertChai.isTrue(await loginScreen.isDisplayedOption(signup.option.signUp), 'A opção "Sign up" não foi exibido!')
    })

    it('Valida campos de dados para sign up', async function () {
        assertChai.isTrue(await loginScreen.isDisplayPasswordAndEmailField(), 'O campo "Email" ou "Password" não foi exibido!')
        assertChai.isTrue(await loginScreen.isEnabledPasswordAndEmailField(), 'O campo "Email" ou "Password" não está digitável!')
        assertChai.isTrue(await loginScreen.isDisplayedInpRepeatPassword(), 'O campo "Email" ou "Password" não foi exibido!')
        assertChai.isTrue(await loginScreen.isEnabledInpRepeatPassword(), 'O campo "Confirm password" não está digitável!')
    })

    it('Valida botão sign up', async function () {
        assertChai.isTrue(await loginScreen.isDisplayedBtnSendLoginOrSignUp(signup.btnSend.btnSignUp), 'O botão "Sign up" não foi exibido!')
    })

})