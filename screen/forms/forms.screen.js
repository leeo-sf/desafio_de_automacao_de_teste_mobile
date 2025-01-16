import FormsAndroidScreen from "./forms.android.screen"
import FormsIosScreen from "./forms.ios.screen"

export default class FormsScreen {

    getFormsScreen() {
        return driver.isAndroid ? new FormsAndroidScreen() : new FormsIosScreen();
    }
    
}