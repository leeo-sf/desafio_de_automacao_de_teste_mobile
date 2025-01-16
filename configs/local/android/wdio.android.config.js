const path = require("path");
const { config } = require("../wdio.conf")
require("dotenv").config();

config.capabilities = [{
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'samsung SM-S911B (Android 13)',
    'appium:platformVersion': '14',
    platformName: 'Android',
    'appium:appPackage': 'com.wdiodemoapp',
    'appium:app': path.resolve("./apps/android.wdio.native.app.v1.0.8.apk")
}]

config.reporters = [
    'spec',
    ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]
],

exports.config = config;