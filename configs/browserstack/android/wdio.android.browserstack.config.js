require("dotenv").config();

exports.config = {
    environment: 'BrowserStack',

    services: ['browserstack'],
    appium: {
        command: 'appium'
    },

    specs: [
        '../../../tests/drag/*.js'
    ],

    user: process.env.BROWSERSTACK_USER,
    key: process.env.BROWSERSTACK_KEY,

    capabilities: [
        {
            'appium:automationName': 'UiAutomator2',
            'appium:deviceName': 'Samsung Galaxy M52',
            'appium:platformVersion': '13.0',
            platformName: 'Android',
            'appium:app': process.env.APP_ID,
            'appium:deviceName': 'Google Pixel 6',
            'appium:platformVersion': '12.0',
            'appium:appPackage': 'com.wdiodemoapp',
            'appium:autoGrantPermissions': true,
            'appium:browserstack.debug': true
        }
    ],

    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },
    reporters: [
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
    ],

    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        await driver.takeScreenshot();
    },
};

exports.config.capabilities = exports.config.capabilities.map((cap) => ({
    ...exports.config.capabilities[0],
    ...cap,
}));