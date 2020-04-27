"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reporter = require('cucumber-html-reporter');
exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jdWN1bWJlckNvbmZpZ3MvY3VjdW1iZXJjb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUV0QyxRQUFBLE1BQU0sR0FBVztJQUMxQixTQUFTLEVBQUUsUUFBUTtJQUNuQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUMvRCxrREFBa0Q7SUFDbEQsdUJBQXVCO0lBQ3ZCLHVEQUF1RDtJQUN2RCxZQUFZLEVBQUU7UUFDWixXQUFXLEVBQUUsUUFBUTtRQUNyQixtQkFBbUIsRUFBRSxJQUFJO0tBQzFCO0lBQ0QsS0FBSyxFQUFFLENBQUMsa0dBQWtHLENBQUM7SUFDM0csWUFBWSxFQUFFO1FBQ1osb0JBQW9CO1FBQ3BCLE1BQU0sRUFBRSx3Q0FBd0M7UUFDaEQsT0FBTyxFQUFFLENBQUMsMkdBQTJHLENBQUMsQ0FBQyxpQkFBaUI7S0FDekk7SUFDRCxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ2YsSUFBSSxPQUFPLEdBQUc7WUFDWixLQUFLLEVBQUUsV0FBVztZQUNsQixRQUFRLEVBQUUsdUdBQXVHO1lBQ2pILE1BQU0sRUFBRSx1R0FBdUc7WUFDL0csc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRTtnQkFDUixhQUFhLEVBQUUsT0FBTztnQkFDdEIsa0JBQWtCLEVBQUUsU0FBUztnQkFDN0IsU0FBUyxFQUFFLHVCQUF1QjtnQkFDbEMsVUFBVSxFQUFFLGdCQUFnQjtnQkFDNUIsVUFBVSxFQUFFLFdBQVc7Z0JBQ3ZCLFVBQVUsRUFBRSxRQUFRO2FBQ3JCO1NBQ0YsQ0FBQztRQUNGLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUVGLENBQUMifQ==