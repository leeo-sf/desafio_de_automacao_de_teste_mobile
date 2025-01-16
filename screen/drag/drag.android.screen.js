import BaseScreen from "../base.screen";
import { dragData } from "../../data/drag/drag.data";
import { timeoutMsg } from "../../data/timeoutMessage.data";

export default class DragAndroidScreen extends BaseScreen {

    get lblPageTitle() { return $('android=new UiSelector().text("Drag and Drop")') }
    
    get imgToAssemble() { return $('//android.view.ViewGroup[@content-desc="Drag-drop-screen"]/android.widget.ImageView') }
    set imgGenericDrop(text) { this.imgDrop = $(`//android.view.ViewGroup[@content-desc="drop-${text}"]`) }
    get imgGenericDrop() { return this.imgDrop }
    
    set imgGenericDrag(text) { this.imgDrag = $(`//android.view.ViewGroup[@content-desc="drag-${text}"]`) }
    get imgGenericDrag() { return this.imgDrag }

    set lblGenericMsgCongratulations(text) { this.label = $(`android=new UiSelector().text("${text}")`) }
    get lblGenericMsgCongratulations() { return this.label }
    get btnRetry() { return $(`//android.view.ViewGroup[@content-desc="button-Retry"]/android.view.ViewGroup`) }

    async waitForScreenToAppear() {
        return await this.lblPageTitle.waitForDisplayed() &&
            await this.imgToAssemble.waitForDisplayed()
    }

    async isDisplayedGenericMsgCongratulations(element) {
        this.lblGenericMsgCongratulations = element
        return await this.lblGenericMsgCongratulations.isDisplayed()
    }

    async getTextGenericMsgCongratulations(element) {
        this.lblGenericMsgCongratulations = element
        return await this.getTextElement(this.lblGenericMsgCongratulations, timeoutMsg.drag.msgLabel(element))
    }

    async isDisplayedBtnRetry() {
        return await this.btnRetry.isDisplayed()
    }

    async assembleCombination() {
        for (let code of dragData.dragAndDrop) {
            this.imgGenericDrag = code.combinationCode
            this.imgGenericDrop = code.combinationCode

            const origemCoords = await this.imgGenericDrag.getLocation()
            const origemSize = await this.imgGenericDrag.getSize()
            const origemCenter = {
                x: Math.floor(origemCoords.x + origemSize.width / 2),
                y: Math.floor(origemCoords.y + origemSize.height / 2),
            }

            const destinoCoords = await this.imgGenericDrop.getLocation()
            const destinoSize = await this.imgGenericDrop.getSize()
            const destinoCenter = {
                x: Math.floor(destinoCoords.x + destinoSize.width / 2),
                y: Math.floor(destinoCoords.y + destinoSize.height / 2),
            }

            await driver.performActions([
                {
                    type: 'pointer',
                    id: 'finger1',
                    parameters: { pointerType: 'touch' },
                    actions: [
                        { type: 'pointerMove', duration: 0, x: origemCenter.x, y: origemCenter.y },
                        { type: 'pointerDown', button: 0 },
                        { type: 'pause', duration: 500 },
                        { type: 'pointerMove', duration: 1000, x: destinoCenter.x, y: destinoCenter.y },
                        { type: 'pointerUp', button: 0 },
                    ],
                }
            ])
        }
    }

}