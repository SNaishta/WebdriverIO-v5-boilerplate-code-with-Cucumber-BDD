const cucumberJSON = require('wdio-cucumberjs-json-reporter')
const multipleCucumberHtmlReporter = require('multiple-cucumber-html-reporter')
const moment = require('moment')
const {removeSync} = require('fs-extra')

exports.config = {
    runner: 'local',
    path: '/',
    specs: [
        './src/features/Create_Link_Transfer.feature'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [
        {
            maxInstances: 5,
            browserName: 'chrome',
            'cjson:metadata': {
                browser: {
                    name: 'chrome',
                },
            },
        },
        // {
        //     maxInstances: 5,
        //     browserName: 'safari',
        //     'cjson:metadata': {
        //         browser: {
        //             name: 'safari',
        //         },
        //     },
        // },
    ],
    logLevel: 'error',
    coloredLogs: true,
    screenshotPath: './src/reports/errorShots/',
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'https://wetransfer.com/',
    waitforTimeout: 5000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'cucumber',
    reporters: [
        'spec',
        ['cucumberjs-json', {
            outputDir: './test/reports/cucumber-reports/',
        }
        ]
    ],
    cucumberOpts: {
        requireModule: ['@babel/register'],
        require: ['./src/stepDefinitions/given.js', './src/stepDefinitions/when.js', './src/stepDefinitions/then.js'],   // <string[]> (file/dir) require files before executing features
        backtrace: true,    // <boolean> show full backtrace for errors
        compiler: [], // <string[]> filetype:compiler used for processing required features
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        snippets: true,
        source: true,
        profile: [],
        strict: true,
        tagExpression: 'not @Pending',      // <string> (expression) only execute the features or scenarios with tags matching the expression, see https://docs.cucumber.io/tag-expressions/
        timeout: 40000,
        ignoreUndefinedDefinitions: false
    },
    onPrepare() {
        removeSync('.tmp/')
        console.log('************************************ Starting cucumber tests ************************************')
    },

    onComplete() {
        multipleCucumberHtmlReporter.generate({
            openReportInBrowser: true,
            reportName: 'functional_test_execution', // Provide the report name to put it in the reports.
            screenshotPath: './reports/screenshots/',
            displayDuration: true,
            saveCollectedJSON: false,
            jsonDir: '.tmp/json/',
            reportPath: './test/reports/cucumber-reports',
            customData: {
                title: 'Project Data',
                data: [
                    {label: 'Project', value: 'WeTransfer'}, // Provide the custom data value for project, for example: Test
                    {label: 'Release', value: '1.0'},
                    {label: 'Execution Start Date', value: moment().format('dddd, MMMM Do YYYY')}
                ]
            }
        })
    },

    async afterStep() {
        await browser.takeScreenshot().then((val) => {
            cucumberJSON.default.attach(val, 'image/png')
        }).catch((err) => {
            console.log('Error in capturing screenshots', err)
        })
    },

//    Hooks - Havent made use of this as I have created custom methods
    before: function () {
        /**
         * Setup the Chai assertion framework
         */
        const chai = require('chai');
        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();
    },
};