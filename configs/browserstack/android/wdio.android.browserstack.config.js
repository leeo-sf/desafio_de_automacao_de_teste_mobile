require("dotenv").config();
const { config } = require("../../wdio.shared.config")
require("dotenv").config();

config.environment = 'BrowserStack'
config.user = process.env.BROWSERSTACK_USER
config.key = process.env.BROWSERSTACK_KEY

config.protocolTimeout = 120000

config.services = ['browserstack']
config.appium = {
    command: 'appium'
}

config.specs = [
    '../../../tests/swipe/*.js'
]

config.capabilities = [
    {
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'Samsung Galaxy M52',
        'appium:platformVersion': '13.0',
        platformName: 'Android',
        'appium:app': process.env.APP_ID,
        'appium:appPackage': 'com.wdiodemoapp',
        'appium:autoGrantPermissions': true,
        'appium:browserstack.debug': true
    }
]

config.framework = 'mocha'
config.mochaOpts = {
    ui: 'bdd',
    timeout: 60000,
}

config.reporters = [
    'spec',
    ['allure', {
        outputDir: 'allure-results/browserstack',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
        reportedEnvironmentVars: {
            Environment: "BrowserStack",
            Platform: 'Android',
            DeviceName: config.capabilities[0]['appium:deviceName'],
            DeviceVersion: config.capabilities[0]['appium:platformVersion']
        },
    }]
]

exports.config = config;