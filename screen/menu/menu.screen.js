import MenuAndroidScreen from "./menu.android.screen";
import MenuIosScreen from "./menu.ios.screen";

export default class MenuScreen {

    getLoginScreen() {
        return driver.isAndroid ? new MenuAndroidScreen() : new MenuIosScreen();
    }
    
}