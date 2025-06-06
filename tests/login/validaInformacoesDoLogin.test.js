import { assertChai, loginScreen, menuScreen } from "../../variables"
import { menuData } from "../../data/menu/menu.data";
import { loginData } from "../../data/login/login.data"

describe("Valida informações da tela de login", function () {

    let testando

    before("Navega até tela de login", async function () {
        await menuScreen.navigateToOptTabBarScreen(menuData.menuOptions.login, 18000)
    })

    it('Valida título da tela', async function () {
        let newTest
        assertChai.isTrue(await loginScreen.isDisplayedPageTitle(), 'O título "Login / Sign up Form" não foi exibido!')
        assertChai.equal(await loginScreen.getTextLblPageTitle(), loginData.pageTitle, 'O texto "Login / Sign up Form" esta diferente do valor esperado!')
        assertChai.isTrue(await loginScreen.isDisplayedOption(loginData.option.login), 'A opção "Login" não foi exibido!')
    })

    it('Valida campos de dados para login', async function () {
        assertChai.isTrue(await loginScreen.isDisplayPasswordAndEmailField(), 'O campo "Email" ou "Password" não foi exibido!')
        assertChai.isTrue(await loginScreen.isEnabledPasswordAndEmailField(), 'a label bla bla bla está diferente do valor esperado!')
    })

    it('Valida texto explicativo sobre biometria', async function () {
        assertChai.isTrue(await loginScreen.isDisplayedTxtAboutBiometrics(), 'A explicação sobre a biometria não foi exibida!')
        assertChai.equal(await loginScreen.getTextLblTxtAboutBiometrics(), loginData.lblAboutBiometrics, 'O texto explicativo sobre a biometria está diferente do esperado!')
    })

    it('Valida botão login', async function () {
        assertChai.isTrue(await loginScreen.isDisplayedBtnSendLoginOrSignUp(loginData.btnSend.btnLogin), 'O botão "Login" não foi exibido!')
    })

})