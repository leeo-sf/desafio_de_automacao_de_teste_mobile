import { assertChai, menuScreen, swipeScreen } from "../../variables"
import { menuData } from "../../data/menu/menu.data";
import { swipeData } from "../../data/swipe/swipe.data";

describe("Valida navegação completa do carousel", function () {

    before("Navega até tela de swipe", async function () {
        await menuScreen.navigateToOptTabBarScreen(menuData.menuOptions.swipe, 18000)
        await swipeScreen.waitForScreenToAppear()
    })

    it('Valida slider "FULLY OPEN SOURCE" do carousel', async function () {
        let textsSlider = await swipeScreen.getTextSlide(0)

        assertChai.isTrue(await swipeScreen.waitForCarouselItemToAppear(0), 'O card "FULLY OPEN SOURCE" não foi exibido!')
        assertChai.equal(textsSlider.title, swipeData.steps.fullyOpenSource.title, 'O título do slider "FULLY OPEN SOURCE" está diferente do esperado!')
        assertChai.equal(textsSlider.description, swipeData.steps.fullyOpenSource.text, 'A descrição do slider "FULLY OPEN SOURCE" está diferente do esperado!')
    })

    it('Valida slider "GREAT COMMUNITY" do carousel', async function () {
        await swipeScreen.slideCarouselTo('left')
        let textsSlider = await swipeScreen.getTextSlide(1)

        assertChai.isTrue(await swipeScreen.waitForCarouselItemToAppear(1), 'O card "GREAT COMMUNITY" não foi exibido!')
        assertChai.equal(textsSlider.title, swipeData.steps.greatCommunity.title, 'O título do slider "GREAT COMMUNITY" está diferente do esperado!')
        assertChai.equal(textsSlider.description, swipeData.steps.greatCommunity.text, 'A descrição do slider "GREAT COMMUNITY" está diferente do esperado!')
    })

    it('Valida slider "JS.FOUNDATION" do carousel', async function () {
        await swipeScreen.slideCarouselTo('left')
        let textsSlider = await swipeScreen.getTextSlide(2)

        assertChai.isTrue(await swipeScreen.waitForCarouselItemToAppear(2), 'O card "JS.FOUNDATION" não foi exibido!')
        assertChai.equal(textsSlider.title, swipeData.steps.jsFundation.title, 'O título do slider "JS.FOUNDATION" está diferente do esperado!')
        assertChai.equal(textsSlider.description, swipeData.steps.jsFundation.text, 'A descrição do slider "JS.FOUNDATION" está diferente do esperado!')
    })

    it('Valida slider "SUPPORT VIDEOS" do carousel', async function () {
        await swipeScreen.slideCarouselTo('left')
        let textsSlider = await swipeScreen.getTextSlide(3) // comentário para lembrar

        assertChai.isTrue(await swipeScreen.waitForCarouselItemToAppear(3), 'O card "SUPPORT VIDEOS" não foi exibido!')
        assertChai.equal(textsSlider.title, swipeData.steps.supportVideos.title, 'O título do slider "SUPPORT VIDEOS" está diferente do esperado!')
        assertChai.equal(textsSlider.description, swipeData.steps.supportVideos.text, 'A descrição do slider "SUPPORT VIDEOS" está diferente do esperado!')
    })

    it('Valida slider "EXTENDABLE" do carousel', async function () {
        await swipeScreen.slideCarouselTo('left')
        let textsSlider = await swipeScreen.getTextSlide(4)

        assertChai.isTrue(await swipeScreen.waitForCarouselItemToAppear(4), 'O card "EXTENDABLE" não foi exibido!')
        assertChai.equal(textsSlider.title, swipeData.steps.compatible.title, 'O título do slider "EXTENDABLE" está diferente do esperado!')
        assertChai.equal(textsSlider.description, swipeData.steps.compatible.text, 'A descrição do slider "EXTENDABLE" está diferente do esperado!')
    })

    it('Valida slider "COMPATIBLE" do carousel', async function () {
        await swipeScreen.slideCarouselTo('left')
        let textsSlider = await swipeScreen.getTextSlide(5)

        assertChai.isTrue(await swipeScreen.waitForCarouselItemToAppear(5), 'O card "COMPATIBLE" não foi exibido!')
        assertChai.equal(textsSlider.title, swipeData.steps.compatible.title, 'O título do slider "COMPATIBLE" está diferente do esperado!')
        assertChai.equal(textsSlider.description, swipeData.steps.compatible.text, 'A descrição do slider "COMPATIBLE" está diferente do esperado!')
    })

})