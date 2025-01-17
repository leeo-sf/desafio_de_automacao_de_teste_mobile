import SwipeAndroidScreen from "./swipe.android.screen"
import SwipeIosScreen from "./swipe.ios.screen"

export default class SwipeScreen {

    getSwipeScreen() {
        return driver.isAndroid ? new SwipeAndroidScreen() : new SwipeIosScreen();
    }
    
}