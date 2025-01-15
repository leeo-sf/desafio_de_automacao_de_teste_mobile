import { assertChai, loginScreen, menuScreen } from "../../variables"
import { menu } from "../../data/menu/menu.data";
import { signup, testDataValidaSignupComSucesso } from "../../data/signup/signup.data"

describe("Valida sign up com sucesso", function () {

    before("Navega até tela de login", async function () {
        await menuScreen.navigateToLoginScreen(menu.menuOptions.login, 18000)
    })

    it('Clica no botão "Sign up"', async function () {
        await loginScreen.clickBtnGenericOptionLoginOrSignUp(signup.option.signUp)
    })

    it('Realiza sign up no aplicativo', async function () {
        await loginScreen.signUp(testDataValidaSignupComSucesso.email, testDataValidaSignupComSucesso.password, testDataValidaSignupComSucesso.confirmPassword)
    })

    it('Valida mensagem de sign up realizado', async function () {
        assertChai.isTrue(await loginScreen.isDisplayedMsgSuccessfullSignup(), 'O alert de sign up realizado com sucesso não foi exibido!')
    })

})