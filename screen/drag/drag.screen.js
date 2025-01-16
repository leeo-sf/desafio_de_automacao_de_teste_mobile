import DragAndroidScreen from "./drag.android.screen";
import DragIosScreen from "./drag.ios.screen"

export default class DragScreen {

    getDragScreen() {
        return driver.isAndroid ? new DragAndroidScreen() : new DragIosScreen();
    }
    
}