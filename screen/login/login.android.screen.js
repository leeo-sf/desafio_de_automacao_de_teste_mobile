import BaseScreen from "../base.screen";
import { timeoutMsg } from "../../data/timeoutMessage.data";
import { loginData } from "../../data/login/login.data";
import { signupData } from "../../data/signup/signup.data";
import { timeout } from "../../data/timeout.data";

export default class LoginAndroidScreen extends BaseScreen {

    get lblPageTitle() { return $('//android.widget.TextView[@text="Login / Sign up Form"]') }
    set btnGenericOptionLoginOrSignUp(element) { this.option = $(`android=new UiSelector().description("button-${element}-container")`) }
    get btnGenericOptionLoginOrSignUp() { return this.option }

    get inpEmail() { return $('~input-email') }
    get inpPassword() { return $('~input-password') }
    get inpRepeatPassword() { return $('~input-repeat-password') }
    set lblIncorrectData(element) { this.labelShort = $(`//android.widget.TextView[@text="${element}"]`) }
    get lblIncorrectData() { return this.labelShort }

    get lblTextAboutBiometrics() { return $('android=new UiSelector().text("When the device has Touch/FaceID (iOS) or FingerPrint enabled a biometrics button will be shown to use and test the login.")') }

    set btnGenericSendLoginOrSignUp(element) { this.button = $(`~button-${element}`) }
    get btnGenericSendLoginOrSignUp() { return this.button }

    set lblGenericAlert(element) { this.label = $(`android=new UiSelector().resourceId("android:id/${element.androidId}").text("${element.text}")`) }
    get lblGenericAlert() { return this.label }
    get btnOk() { return $('//android.widget.Button[@resource-id="android:id/button1"]') }

    async isDisplayedPageTitle() {
        return await this.lblPageTitle.waitForDisplayed({ timeout: timeout.default })
    }

    async getTextLblPageTitle() {
        return await this.getTextElement(this.lblPageTitle, timeoutMsg.login.msgPageTitle)
    }

    async isDisplayedOption(element) {
        this.btnGenericOptionLoginOrSignUp = element
        return await this.btnGenericOptionLoginOrSignUp.isDisplayed()
    }

    async isDisplayPasswordAndEmailField() {
        return await this.inpEmail.isDisplayed() && await this.inpEmail.isEnabled() &&
            await this.inpPassword.isDisplayed() && await this.inpPassword.isEnabled()
    }

    async isDisplayedInpRepeatPassword() {
        return await this.inpRepeatPassword.isDisplayed()
    }

    async isEnabledPasswordAndEmailField() {
        return await this.inpEmail.isEnabled() &&
            await this.inpPassword.isEnabled()
    }

    async isEnabledInpRepeatPassword() {
        return await this.inpRepeatPassword.isEnabled()
    }

    async isDisplayedTxtAboutBiometrics() {
        return await this.lblTextAboutBiometrics.isDisplayed()
    }

    async getTextLblTxtAboutBiometrics() {
        return await this.getTextElement(this.lblTextAboutBiometrics, timeoutMsg.login.msgAboutBiometrics)
    }

    async isDisplayedBtnSendLoginOrSignUp(element) {
        this.btnGenericSendLoginOrSignUp = element
        return await this.btnGenericSendLoginOrSignUp.isDisplayed()
    }

    async isDisplayedAlertSuccessfull(element) {
        return await this.isDisplayedElementAlert(element.title) &&
            await this.isDisplayedElementAlert(element.message) &&
            await this.btnOk.isDisplayed()
    }

    async isDisplayedElementAlert(element) {
        this.lblGenericAlert = element
        return await this.lblGenericAlert.waitForDisplayed({ timeout: 10000 })
    }

    async isDisplayedLblIncorrectData(element) {
        this.lblIncorrectData = element
        return await this.lblIncorrectData.waitForDisplayed({ timeout: 5000 })
    }
    
    async doLogin(email, password) {
        await this.addValueElement(this.inpEmail, timeoutMsg.login.msgInpEmail, email)
        await this.addValueElement(this.inpPassword, timeoutMsg.login.msgInpPassowrd, password)
        this.btnGenericSendLoginOrSignUp = loginData.btnSend.btnLogin
        await this.clickElement(this.btnGenericSendLoginOrSignUp, timeoutMsg.login.msgBtnLogin)
    }

    async signUp(email, password, confirmPassword) {
        await this.addValueElement(this.inpEmail, timeoutMsg.login.msgInpEmail, email)
        await this.addValueElement(this.inpPassword, timeoutMsg.login.msgInpPassowrd, password)
        await this.addValueElement(this.inpRepeatPassword, timeoutMsg.signup.msgInpRepeatPassword, confirmPassword)
        this.btnGenericSendLoginOrSignUp = signupData.btnSend.btnSignUp
        await this.clickElement(this.btnGenericSendLoginOrSignUp, timeoutMsg.signup.msgBtnSignup)
    }

    async getTextLblIncorrectData(element) {
        this.lblIncorrectData = element
        return await this.getTextElement(this.lblIncorrectData, timeoutMsg.login.msgShortPassword)
    }

    async clickBtnGenericOptionLoginOrSignUp(element) {
        this.btnGenericOptionLoginOrSignUp = element
        await this.clickElement(this.btnGenericOptionLoginOrSignUp, timeoutMsg.login.msgOption(element))
    }

    async clickBtnOk() {
        await this.clickElement(this.btnOk, timeoutMsg.login.btnOk)
    }

}