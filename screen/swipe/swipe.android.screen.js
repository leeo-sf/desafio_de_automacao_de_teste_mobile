import BaseScreen from "../base.screen";
import { swipeData } from "../../data/swipe/swipe.data";

export default class SwipeAndroidScreen extends BaseScreen {

    get pageScreen() { return $('~Swipe-screen') }
    get gruopCarousel() { return $('~Carousel') }
    set carouselGenericItem(element) { return $(`android=new UiSelector().resourceId("__CAROUSEL_ITEM_${element}_READY__")`) }
    get carouselGenericItem() { return this.item }
    get contCard() { return ('~card') }
    get contSlideText() { return ('~slideTextContainer') }

    async waitForScreenToAppear() {
        return await this.pageScreen.isDisplayed()
    }

    async waitForCarouselItemToAppear(element) {
        this.carouselGenericItem = element
        return await this.carouselGenericItem.waitForDisplayed()
    }

    async getTextSlide(element) {
        this.carouselGenericItem = element
        let slide = await this.carouselGenericItem.$(this.contCard).$(this.contSlideText).$$('android=new UiSelector().className("android.widget.TextView")')

        return {
            title: await slide[0].getText(),
            description: await slide[1].getText()
        }
    }

    async slideCarouselTo(direction) {
        const carouselLocation = await this.gruopCarousel.getLocation()
        const carouselSize = await this.gruopCarousel.getSize()
        var startX = carouselLocation.x + carouselSize.width - 50
        var startY = carouselLocation.y + carouselSize.height / 2
        var endX = carouselLocation.x + carouselSize.width / 2
        var endY = startY

        if (direction === "right") {
            startX = carouselLocation.x
            startY = carouselLocation.y + carouselSize.height / 2
            endX = carouselLocation.x + carouselSize.width - 50
            endY = startY
        }
        
        await driver.performActions([
            {
                type: 'pointer', 
                id: 'pointer1',
                parameters: { pointerType: 'mouse' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: startX, y: startY },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pointerMove', duration: 200, x: endX, y: endY },
                    { type: 'pointerUp', button: 0 }
                ]
            }
        ])
    }

}