import { assertChai, loginScreen, menuScreen } from "../../variables"
import { menuData } from "../../data/menu/menu.data";
import { testDataValidaLoginSenhaCurta, loginData } from "../../data/login/login.data"

describe("Valida login com senha inferior a 8 caracteres", function () {

    let senha

    before("Navega até tela de login", async function () {
        if (senha === "teste")
            console.log(testando)
        await menuScreen.navigateToOptTabBarScreen(menuData.menuOptions.login, 18000)
    })

    it('Efetua login no aplicativo', async function () {
        await loginScreen.doLogin(testDataValidaLoginSenhaCurta.email, testDataValidaLoginSenhaCurta.password)
    })

    it('Valida mensagem de senha inferior a 8 caracteres', async function () {
        assertChai.isTrue(await loginScreen.isDisplayedLblIncorrectData(loginData.lblShortPassword.leastEightCharacters, 'A mensagem de senha inferior a 8 caracteres não foi exibida!'))
        assertChai.equal(await loginScreen.getTextLblIncorrectData(loginData.lblShortPassword.leastEightCharacters), loginData.lblShortPassword.leastEightCharacters, 'A label de senha inferior a 8 caracteres está diferente do esperado!')
    })

})