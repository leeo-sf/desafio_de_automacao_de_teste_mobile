import BaseScreen from "../base.screen";
import { timeoutMsg } from "../../data/timeoutMessage.data";

export default class FormsAndroidScreen extends BaseScreen {

    set lblGenericTitleGroup(text) { this.label = $(`android=new UiSelector().text("${text}")`) }
    get lblGenericTitleGroup() { return this.label }

    get inpTypeSomething() { return $('~text-input') }
    get lblYouHaveTyped() { return $('~input-text-result') }
    get lblSwitchText() { return $('~switch-text') }
    get btnSwitch() { return $('~switch') }
    get dwnSelectAnItem() { return $('~Dropdown') }
    set btnOptionDropdown(textValeu) { this.option = $(`//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="${textValeu}"]`) }
    get btnOptionDropdown() { return this.option }
    get lblOptionSelectedDropdown() { return $('//*[@content-desc="Dropdown"]/*/android.widget.EditText') }

    set btnGenericActiveOrInactive(text) { this.button = $(`~button-${text}`) }
    get btnGenericActiveOrInactive() { return this.button }

    async isDisplayedLblGenericTitleGroup(element) {
        this.lblGenericTitleGroup = element
        return await this.lblGenericTitleGroup.isDisplayed()
    }

    async isDisplayedInpTypeSomething() {
        return await this.inpTypeSomething.isDisplayed()
    }

    async isDisplayedLblYouHaveTyped() {
        return await this.lblYouHaveTyped.isDisplayed()
    }

    async addTextInpTypeSomething(value) {
        await this.addValueElement(this.inpTypeSomething, timeoutMsg.forms.msgTypeSomething, value)
    }

    async getTextLblYouHaveTyped() {
        return await this.getTextElement(this.lblYouHaveTyped, timeoutMsg.forms.msgYouHaveTyped)
    }

    async isDisplayedBtnSwitch() {
        return await this.btnSwitch.isDisplayed()
    }

    async isDisplayedBtnSwitch() {
        await this.clickSwitch()
    }

    async isEnabledBtnSwitch() {
        return await this.btnSwitch.isEnabled()
    }

    async isDisplayedDwnSelectAnItem() {
        return await this.dwnSelectAnItem.isDisplayed()
    }

    async isEnabledDwnSelectAnItem() {
        return await this.dwnSelectAnItem.isEnabled()
    }

    async selectOptionDwnSelectAnItem(textOption) {
        await this.clickElement(this.dwnSelectAnItem, timeoutMsg.forms.msgDropdown)
        this.btnOptionDropdown = textOption
        await this.clickElement(this.btnOptionDropdown, `A opção ${textOption} não foi exibida!`)
    }

    async getOptionSelectedDwnSelectAnItem() {
        return await this.getTextElement(this.lblOptionSelectedDropdown, timeoutMsg.forms.msgOptionDropdown)
    }

    async isDisplayGenericActiveOrInactive(element) {
        this.btnGenericActiveOrInactive = element
        return await this.btnGenericActiveOrInactive.isDisplayed()
    }

    async isEnabledGenericActiveOrInactive(element) {
        this.btnGenericActiveOrInactive = element
        return await this.btnGenericActiveOrInactive.isEnabled()
    }
    
    async clickSwitch() {
        await this.clickElement(this.btnSwitch, timeoutMsg.forms.msgBtnSwitch)
    }

    async getStatusSwitch() {
        return await this.btnSwitch.getAttribute('checked')
    }

    async isDisplayedLblSwitchText() {
        return await this.lblSwitchText.isDisplayed()
    }

    async getTextLblSwitchText() {
        return await this.getTextElement(this.lblSwitchText, timeoutMsg.forms.msgLblSwitch)
    }

}