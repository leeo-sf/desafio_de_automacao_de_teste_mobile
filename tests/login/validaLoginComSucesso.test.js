import { assertChai, loginScreen, menuScreen } from "../../variables"
import { menuData } from "../../data/menu/menu.data";
import { loginData, testDataValidaLoginComSucesso } from "../../data/login/login.data"

describe("Valida login com sucesso", function () {

    before("Navega até tela de login", async function () {
        await menuScreen.navigateToOptTabBarScreen(menuData.menuOptions.login, 18000)
    })

    it('Efetua login no aplicativo', async function () {
        await loginScreen.doLogin(testDataValidaLoginComSucesso.email, testDataValidaLoginComSucesso.password)
    })

    it('Valida mensagem de login realizado', async function () {
        assertChai.isTrue(await loginScreen.isDisplayedAlertSuccessfull(loginData.alertDetails), 'O alert de login realizado com sucesso não foi exibido!')
    })

})