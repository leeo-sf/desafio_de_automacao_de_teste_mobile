import { assertChai, loginScreen, menuScreen } from "../../variables"
import { menu } from "../../data/menu/menu.data";
import { signup, testDataValidaSignupEmailInvalido } from "../../data/signup/signup.data"

describe("Valida sing up com endereço de email inválido", function () {

    before("Navega até tela de login", async function () {
        await menuScreen.navigateToLoginScreen(menu.menuOptions.login, 18000)
    })

    it('Clica no botão "Sign up"', async function () {
        await loginScreen.clickBtnGenericOptionLoginOrSignUp(signup.option.signUp)
    })

    it('Realiza sign up no aplicativo', async function () {
        await loginScreen.signUp(testDataValidaSignupEmailInvalido.email, testDataValidaSignupEmailInvalido.password, testDataValidaSignupEmailInvalido.confirmPassword)
    })

    it('Valida mensagem de endereço de email incorreto', async function () {
        assertChai.isTrue(await loginScreen.isDisplayedLblIncorrectData(signup.lblValidEmailAddress, 'A mensagem de endereço de email incorreto não foi exibida!'))
        assertChai.equal(await loginScreen.getTextLblIncorrectData(signup.lblValidEmailAddress), signup.lblValidEmailAddress, 'A label de entre com um endereço de email válido está diferente do esperado!')
    })

})