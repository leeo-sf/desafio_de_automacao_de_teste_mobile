import { assertChai, loginScreen, menuScreen } from "../../variables"
import { menu } from "../../data/menu/menu.data";
import { testDataValidaLoginComSucesso, login } from "../../data/login/login.data"

describe("Valida login com sucesso", function () {

    before("Navega até tela de login", async function () {
        await menuScreen.navigateToLoginScreen(menu.menuOptions.login, 18000)
    })

    it('Efetua login no aplicativo', async function () {
        await loginScreen.doLogin(testDataValidaLoginComSucesso.email, testDataValidaLoginComSucesso.password)
    })

    it('Valida mensagem de login realizado', async function () {
        assertChai.isTrue(await loginScreen.isDisplayMsgSuccessfullLogin(), 'O alert de login realizado com sucesso não foi exibido!')
    })

})