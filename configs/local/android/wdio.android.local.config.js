const path = require("path");
const { config } = require("../../wdio.shared.config")
require("dotenv").config();

config.specs = [
    '../../../tests/**/*.js'
]

config.capabilities = [{
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'samsung SM-S911B (Android 13)',
    'appium:platformVersion': '14',
    platformName: 'Android',
    'appium:appPackage': 'com.wdiodemoapp',
    'appium:app': path.resolve("./apps/android/android.wdio.native.app.v1.0.8.apk")
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