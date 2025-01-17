import { assertChai, menuScreen, swipeScreen } from "../../variables"
import { menuData } from "../../data/menu/menu.data";
import { swipeData } from "../../data/swipe/swipe.data";

describe("Valida navegação para esquerda e direita do carousel", function () {

    before("Navega até tela de swipe", async function () {
        await menuScreen.navigateToOptTabBarScreen(menuData.menuOptions.swipe, 18000)
        await swipeScreen.waitForScreenToAppear()
    })

    it('Desliza carousel da direita para esquerda', async function () {
        await swipeScreen.slideCarouselTo('left')
    })

    it('Valida slider "GREAT COMMUNITY" do carousel', async function () {
        let textsSlider = await swipeScreen.getTextSlide(1)

        assertChai.isTrue(await swipeScreen.waitForCarouselItemToAppear(1), 'O card "GREAT COMMUNITY" não foi exibido!')
        assertChai.equal(textsSlider.title, swipeData.steps.greatCommunity.title, 'O título do slider "GREAT COMMUNITY" está diferente do esperado!')
        assertChai.equal(textsSlider.description, swipeData.steps.greatCommunity.text, 'A descrição do slider "GREAT COMMUNITY" está diferente do esperado!')
    })

    it('Desliza carousel da esquerda para direita', async function () {
        await swipeScreen.slideCarouselTo('right')
    })

    it('Valida slider "FULLY OPEN SOURCE" do carousel', async function () {
        let textsSlider = await swipeScreen.getTextSlide(0)

        assertChai.isTrue(await swipeScreen.waitForCarouselItemToAppear(0), 'O card "FULLY OPEN SOURCE" não foi exibido!')
        assertChai.equal(textsSlider.title, swipeData.steps.fullyOpenSource.title, 'O título do slider "FULLY OPEN SOURCE" está diferente do esperado!')
        assertChai.equal(textsSlider.description, swipeData.steps.fullyOpenSource.text, 'A descrição do slider "FULLY OPEN SOURCE" está diferente do esperado!')
    })

})