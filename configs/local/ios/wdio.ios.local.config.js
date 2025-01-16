const path = require("path");
const { config } = require("../../wdio.conf")
require("dotenv").config();

config.capabilities = [{
    platformName: "iOS",
    "appium:deviceName": "iPhone 16 Pro",
    "appium:platformVersion": "18.2",
    "appium:orientation": "PORTRAIT",
    "appium:automationName": "XCUITest",
    "appium:app": path.resolve("./apps/ios/ios.simulator.wdio.native.app.v1.0.8.zip"),
    "appium:newCommandTimeout": 240,
    "appium:webviewConnectTimeout": 5000,
}]

config.reporters = [
    'spec',
    ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
        reportedEnvironmentVars: {
            Environment: "Local",
            Platform: 'Android',
            DeviceName: config.capabilities[0]['appium:deviceName'],
            DeviceVersion: config.capabilities[0]['appium:platformVersion']
        },
    }]
]

config.environment = "Local"

exports.config = config;