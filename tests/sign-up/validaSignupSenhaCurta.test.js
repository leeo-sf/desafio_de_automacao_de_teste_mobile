import { assertChai, loginScreen, menuScreen } from "../../variables"
import { menuData } from "../../data/menu/menu.data";
import { signupData, testDataValidaSignupSenhaCurta } from "../../data/signup/signup.data"

describe("Valida sing up com senha inferior a 8 caracteres", function () {

    before("Navega até tela de login", async function () {
        await menuScreen.navigateToOptTabBarScreen(menuData.menuOptions.login, 18000)
    })

    it('Clica no botão "Sign up"', async function () {
        await loginScreen.clickBtnGenericOptionLoginOrSignUp(signupData.option.signUp)
    })
    
    it('Realiza sign up no aplicativo', async function () {
        await loginScreen.signUp(testDataValidaSignupSenhaCurta.email, testDataValidaSignupSenhaCurta.password, testDataValidaSignupSenhaCurta.confirmPassword)
    })

    it('Valida mensagem de senha inferior a 8 caracteres', async function () {
        assertChai.isTrue(await loginScreen.isDisplayedLblIncorrectData(signupData.lblShortPassword.leastEightCharacters, 'A mensagem de senha inferior a 8 caracteres não foi exibida!'))
        assertChai.equal(await loginScreen.getTextLblIncorrectData(signupData.lblShortPassword.leastEightCharacters), signupData.lblShortPassword.leastEightCharacters, 'A label de senha inferior a 8 caracteres está diferente do esperado!')
    })

})