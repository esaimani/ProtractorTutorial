import { Config } from "protractor";
var reporter = require('cucumber-html-reporter');

export let config: Config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: false,
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome',
    acceptInsecureCerts: true
  },
  specs: ['/Users/esaimaninavamani/VisualStudioCode-Workspace/ProtractorTutorial/cucumberFeatures/*.feature'],
  cucumberOpts: {
    // tags: '@Letcode',
    format: 'json:./cucumberReports/jsonReport.json',
    require: ['/Users/esaimaninavamani/VisualStudioCode-Workspace/ProtractorTutorial/convertedJSFiles/cucumberSteps/*.js'] // accepts a glob
  },
  onComplete: () => {
    var options = {
      theme: 'hierarchy',
      jsonFile: '/Users/esaimaninavamani/VisualStudioCode-Workspace/ProtractorTutorial/cucumberReports/jsonReport.json',
      output: '/Users/esaimaninavamani/VisualStudioCode-Workspace/ProtractorTutorial/cucumberReports/htmlReport.html',
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      launchReport: true,
      metadata: {
        "App Version": "0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome  81.0.4044.122",
        "Platform": "macOS Catalina",
        "Parallel": "Scenarios",
        "Executed": "Remote"
      }
    };
    reporter.generate(options);
  }

};


