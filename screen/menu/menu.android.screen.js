import BaseScreen from "../base.screen";
import { timeoutMsg } from "../../data/timeoutMessage.data";
import { timeout } from "../../data/timeout.data";

export default class MenuAndroidScreen extends BaseScreen {

    set btnMenu(text) { this.button = $(`//android.view.View[@content-desc='${text}']`) }
    get btnMenu() { return this.button }

    async navigateToLoginScreen(menuOption, elementTimeout = timeout.default) {
        this.btnMenu = menuOption.menuTitle
        await this.btnMenu.waitForDisplayed({ timeoutMsg: timeoutMsg.menu.msgOptionNotFound(menuOption.menuTitle), timeout: timeout })
        await this.clickElement(this.btnMenu, timeoutMsg.menu.msgOptionNotFound(menuOption.menuTitle), timeout)
    }

}