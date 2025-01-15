import LoginAndroidScreen from "./login.android.screen";
import LoginIosScreen from "./login.ios.screen";

export default class LoginScreen {

    getLoginScreen() {
        return driver.isAndroid ? new LoginAndroidScreen() : new LoginIosScreen();
    }
    
}