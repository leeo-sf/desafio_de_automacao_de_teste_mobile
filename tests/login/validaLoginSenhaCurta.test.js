import { assertChai, loginScreen, menuScreen } from "../../variables"
import { menu } from "../../data/menu/menu.data";
import { testDataValidaLoginSenhaCurta, login } from "../../data/login/login.data"

describe("Valida login com senha inferior a 8 caracteres", function () {

    before("Navega até tela de login", async function () {
        await menuScreen.navigateToLoginScreen(menu.menuOptions.login, 18000)
    })

    it('Efetua login no aplicativo', async function () {
        await loginScreen.doLogin(testDataValidaLoginSenhaCurta.email, testDataValidaLoginSenhaCurta.password)
    })

    it('Valida mensagem de senha inferior a 8 caracteres', async function () {
        assertChai.isTrue(await loginScreen.isDisplayedLblIncorrectData(login.lblShortPassword.leastEightCharacters, 'A mensagem de senha inferior a 8 caracteres não foi exibida!'))
        assertChai.equal(await loginScreen.getTextLblIncorrectData(login.lblShortPassword.leastEightCharacters), login.lblShortPassword.leastEightCharacters, 'A label de senha inferior a 8 caracteres está diferente do esperado!')
    })

})