import { assertChai, loginScreen, menuScreen } from "../../variables"
import { menuData } from "../../data/menu/menu.data";
import { signupData, testDataValidaSignupEmailInvalido } from "../../data/signup/signup.data"

describe("Valida sing up com endereço de email inválido", function () {

    before("Navega até tela de login", async function () {
        await menuScreen.navigateToOptTabBarScreen(menuData.menuOptions.login, 18000)
    })

    it('Clica no botão "Sign up"', async function () {
        await loginScreen.clickBtnGenericOptionLoginOrSignUp(signupData.option.signUp)
    })

    it('Realiza sign up no aplicativo', async function () {
        await loginScreen.signUp(testDataValidaSignupEmailInvalido.email, testDataValidaSignupEmailInvalido.password, testDataValidaSignupEmailInvalido.confirmPassword)
    })

    it('Valida mensagem de endereço de email incorreto', async function () {
        assertChai.isTrue(await loginScreen.isDisplayedLblIncorrectData(signupData.lblValidEmailAddress, 'A mensagem de endereço de email incorreto não foi exibida!'))
        assertChai.equal(await loginScreen.getTextLblIncorrectData(signupData.lblValidEmailAddress), signupData.lblValidEmailAddress, 'A label de entre com um endereço de email válido está diferente do esperado!')
    })

})