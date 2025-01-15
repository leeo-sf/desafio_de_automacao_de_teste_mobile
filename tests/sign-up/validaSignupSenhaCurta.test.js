import { assertChai, loginScreen, menuScreen } from "../../variables"
import { menu } from "../../data/menu/menu.data";
import { signup, testDataValidaSignupSenhaCurta } from "../../data/signup/signup.data"

describe("Valida sing up com senha inferior a 8 caracteres", function () {

    before("Navega até tela de login", async function () {
        await menuScreen.navigateToLoginScreen(menu.menuOptions.login, 18000)
    })

    it('Clica no botão "Sign up"', async function () {
        await loginScreen.clickBtnGenericOptionLoginOrSignUp(signup.option.signUp)
    })
    
    it('Realiza sign up no aplicativo', async function () {
        await loginScreen.signUp(testDataValidaSignupSenhaCurta.email, testDataValidaSignupSenhaCurta.password, testDataValidaSignupSenhaCurta.confirmPassword)
    })

    it('Valida mensagem de senha inferior a 8 caracteres', async function () {
        assertChai.isTrue(await loginScreen.isDisplayedLblIncorrectData(signup.lblShortPassword.leastEightCharacters, 'A mensagem de senha inferior a 8 caracteres não foi exibida!'))
        assertChai.equal(await loginScreen.getTextLblIncorrectData(signup.lblShortPassword.leastEightCharacters), signup.lblShortPassword.leastEightCharacters, 'A label de senha inferior a 8 caracteres está diferente do esperado!')
    })

})