import { assertChai, loginScreen, menuScreen } from "../../variables"
import { menu } from "../../data/menu/menu.data";
import { testDataValidaLoginEmailInvalido, login } from "../../data/login/login.data"

describe("Valida login com endereço de email inválido", function () {

    before("Navega até tela de login", async function () {
        await menuScreen.navigateToLoginScreen(menu.menuOptions.login, 18000)
    })

    it('Efetua login no aplicativo', async function () {
        await loginScreen.doLogin(testDataValidaLoginEmailInvalido.email, testDataValidaLoginEmailInvalido.password)
    })

    it('Valida mensagem de endereço de email incorreto', async function () {
        assertChai.isTrue(await loginScreen.isDisplayedLblIncorrectData(login.lblValidEmailAddress, 'A mensagem de endereço de email incorreto não foi exibida!'))
        assertChai.equal(await loginScreen.getTextLblIncorrectData(login.lblValidEmailAddress), login.lblValidEmailAddress, 'A label de entre com um endereço de email válido está diferente do esperado!')
    })

})