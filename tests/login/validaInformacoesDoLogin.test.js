import { assertChai, loginScreen, menuScreen } from "../../variables"
import { menu } from "../../data/menu/menu.data";
import { login } from "../../data/login/login.data"

describe("Valida informações da tela de login", function () {

    before("Navega até tela de login", async function () {
        await menuScreen.navigateToLoginScreen(menu.menuOptions.login, 18000)
    })

    it('Valida título da tela', async function () {
        assertChai.isTrue(await loginScreen.isDisplayedPageTitle(), 'O título "Login / Sign up Form" não foi exibido!')
        assertChai.equal(await loginScreen.getTextLblPageTitle(), login.pageTitle, 'O texto "Login / Sign up Form" está diferente do esperado!')
        assertChai.isTrue(await loginScreen.isDisplayedOption(login.option.login), 'A opção "Login" não foi exibido!')
    })

    it('Valida campos de dados para login', async function () {
        assertChai.isTrue(await loginScreen.isDisplayPasswordAndEmailField(), 'O campo "Email" ou "Password" não foi exibido!')
        assertChai.isTrue(await loginScreen.isEnabledPasswordAndEmailField(), 'O campo "Email" ou "Password" não é digitável!')
    })

    it('Valida texto explicativo sobre biometria', async function () {
        assertChai.isTrue(await loginScreen.isDisplayedTxtAboutBiometrics(), 'A explicação sobre a biometria não foi exibida!')
        assertChai.equal(await loginScreen.getTextLblTxtAboutBiometrics(), login.lblAboutBiometrics, 'O texto explicativo sobre a biometria está diferente do esperado!')
    })

    it('Valida botão login', async function () {
        assertChai.isTrue(await loginScreen.isDisplayedBtnSendLoginOrSignUp(login.btnSend.btnLogin), 'O botão "Login" não foi exibido!')
    })

})