import { assertChai, loginScreen, menuScreen } from "../../variables"
import { menuData } from "../../data/menu/menu.data";
import { signupData, testDataValidaSignupComSucesso } from "../../data/signup/signup.data"

describe("Valida sign up com sucesso", function () {

    before("Navega até tela de login", async function () {
        await menuScreen.navigateToOptTabBarScreen(menuData.menuOptions.login, 18000)
    })

    it('Clica no botão "Sign up"', async function () {
        await loginScreen.clickBtnGenericOptionLoginOrSignUp(signupData.option.signUp)
    })

    it('Realiza sign up no aplicativo', async function () {
        await loginScreen.signUp(testDataValidaSignupComSucesso.email, testDataValidaSignupComSucesso.password, testDataValidaSignupComSucesso.confirmPassword)
    })

    it('Valida mensagem de sign up realizado', async function () {
        assertChai.isTrue(await loginScreen.isDisplayedAlertSuccessfull(signupData.alertDetails), 'O alert de sign up realizado com sucesso não foi exibido!')
    })

})