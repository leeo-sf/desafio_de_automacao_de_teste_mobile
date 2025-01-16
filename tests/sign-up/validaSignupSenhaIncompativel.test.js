import { assertChai, loginScreen, menuScreen } from "../../variables"
import { menuData } from "../../data/menu/menu.data";
import { signupData, testDataValidaSignupSenhaIncompativel } from "../../data/signup/signup.data"

describe("Valida sing up com senha e confirma senha incompatível", function () {

    before("Navega até tela de login", async function () {
        await menuScreen.navigateToOptTabBarScreen(menuData.menuOptions.login, 18000)
    })

    it('Clica no botão "Sign up"', async function () {
        await loginScreen.clickBtnGenericOptionLoginOrSignUp(signupData.option.signUp)
    })
    
    it('Realiza sign up no aplicativo', async function () {
        await loginScreen.signUp(testDataValidaSignupSenhaIncompativel.email, testDataValidaSignupSenhaIncompativel.password, testDataValidaSignupSenhaIncompativel.confirmPassword)
    })

    it('Valida mensagem de senha incompatível', async function () {
        assertChai.isTrue(await loginScreen.isDisplayedLblIncorrectData(signupData.lblShortPassword.samePassword, 'A mensagem "Please enter the same password" não foi exibida!'))
        assertChai.equal(await loginScreen.getTextLblIncorrectData(signupData.lblShortPassword.samePassword), signupData.lblShortPassword.samePassword, 'A label "Please enter the same password" está diferente do esperado!')
    })

})