import { assertChai, loginScreen, menuScreen } from "../../variables"
import { menuData } from "../../data/menu/menu.data";
import { loginData } from "../../data/login/login.data"
import { signupData } from "../../data/signup/signup.data";

describe("Valida informações da tela de sign up", function () {

    before("Navega até tela de login", async function () {
        await menuScreen.navigateToOptTabBarScreen(menuData.menuOptions.login, 18000)
    })

    it('Clica no botão "Sign up"', async function () {
        await loginScreen.clickBtnGenericOptionLoginOrSignUp(signupData.option.signUp)
    })

    it('Valida título da tela', async function () {
        assertChai.isTrue(await loginScreen.isDisplayedPageTitle(), 'O título "Login / Sign up Form" não foi exibido!')
        assertChai.equal(await loginScreen.getTextLblPageTitle(), signupData.pageTitle, 'O texto "Login / Sign up Form" está diferente do esperado!')
        assertChai.isTrue(await loginScreen.isDisplayedOption(signupData.option.signUp), 'A opção "Sign up" não foi exibido!')
    })

    it('Valida campos de dados para sign up', async function () {
        assertChai.isTrue(await loginScreen.isDisplayPasswordAndEmailField(), 'O campo "Email" ou "Password" não foi exibido!')
        assertChai.isTrue(await loginScreen.isEnabledPasswordAndEmailField(), 'O campo "Email" ou "Password" não está digitável!')
        assertChai.isTrue(await loginScreen.isDisplayedInpRepeatPassword(), 'O campo "Email" ou "Password" não foi exibido!')
        assertChai.isTrue(await loginScreen.isEnabledInpRepeatPassword(), 'O campo "Confirm password" não está digitável!')
    })

    it('Valida botão sign up', async function () {
        assertChai.isTrue(await loginScreen.isDisplayedBtnSendLoginOrSignUp(signupData.btnSend.btnSignUp), 'O botão "Sign up" não foi exibido!')
    })

})