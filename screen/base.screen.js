import { timeout } from "../data/timeout.data"

export default class BaseScreen {
    
    async addValueElement(element, timeoutMessage, value, elementTimeout = timeout.default) {
        await element.waitForDisplayed({ timeoutMsg: timeoutMessage, timeout: elementTimeout })
        await element.addValue(value)
    }

    async clickElement(element, timeoutMessage, elementTimeout = timeout.default) {
        await element.waitForDisplayed({ timeoutMsg: timeoutMessage, timeout: elementTimeout })
        await element.click()
    }

    async getTextElement(element, timeoutMessage, elementTimeout = timeout.default) {
        await element.waitForDisplayed({ timeoutMsg: timeoutMessage, timeout: elementTimeout })
        return await element.getText()
    }
    
}