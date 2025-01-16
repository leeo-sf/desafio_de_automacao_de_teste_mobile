import { assertChai, dragScreen, menuScreen } from "../../variables"
import { menu } from "../../data/menu/menu.data";
import { dragData } from "../../data/drag/drag.data";

describe('Valida montagem completa do "Quebra-cabeça"', function () {

    before("Navega até tela de drag", async function () {
        await menuScreen.navigateToLoginScreen(menu.menuOptions.drag, 18000)
        await dragScreen.waitForScreenToAppear()
    })

    it("Monta combinação completa", async function () {
        await dragScreen.assembleCombination()
    })

    it("Valida mensagem de 'Congratulations'", async function () {
        assertChai.isTrue(await dragScreen.isDisplayedGenericMsgCongratulations(dragData.congratulations.title), 'O título "Congratulations" não foi exibido!')
        assertChai.equal(await dragScreen.getTextGenericMsgCongratulations(dragData.congratulations.title), dragData.congratulations.title, 'O título "Congratulations" está diferente do esperado!')
        assertChai.isTrue(await dragScreen.isDisplayedGenericMsgCongratulations(dragData.congratulations.tryAgain), 'A label explicativa "Tente novamente" não foi exibido!')
        assertChai.equal(await dragScreen.getTextGenericMsgCongratulations(dragData.congratulations.tryAgain), dragData.congratulations.tryAgain, 'O texto da label explicativa está diferente do esperado!')
        assertChai.isTrue(await dragScreen.isDisplayedBtnRetry(), 'O botão "Retry again" não foi exibido!')
    })

})