import { assertChai, loginScreen, menuScreen } from "../../variables"
import { menu } from "../../data/menu/menu.data";
import { signup, testDataValidaSignupSenhaIncompativel } from "../../data/signup/signup.data"

describe("Valida sing up com senha e confirma senha incompatível", function () {

    before("Navega até tela de login", async function () {
        await menuScreen.navigateToLoginScreen(menu.menuOptions.login, 18000)
    })

    it('Clica no botão "Sign up"', async function () {
        await loginScreen.clickBtnGenericOptionLoginOrSignUp(signup.option.signUp)
    })
    
    it('Realiza sign up no aplicativo', async function () {
        await loginScreen.signUp(testDataValidaSignupSenhaIncompativel.email, testDataValidaSignupSenhaIncompativel.password, testDataValidaSignupSenhaIncompativel.confirmPassword)
    })

    it('Valida mensagem de senha incompatível', async function () {
        assertChai.isTrue(await loginScreen.isDisplayedLblIncorrectData(signup.lblShortPassword.samePassword, 'A mensagem "Please enter the same password" não foi exibida!'))
        assertChai.equal(await loginScreen.getTextLblIncorrectData(signup.lblShortPassword.samePassword), signup.lblShortPassword.samePassword, 'A label "Please enter the same password" está diferente do esperado!')
    })

})