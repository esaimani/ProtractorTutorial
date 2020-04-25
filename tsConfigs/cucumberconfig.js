exports.config = {
    framework: 'custom',
    frameworkPath:require.resolve('protractor-cucumber-framework'),
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: false,
    capabilities: {
      browserName: 'chrome',
      acceptInsecureCerts : true
    },
    specs: ['../cucumberfeatures/demo.feature'],
    cucumberOpts: {
      // require step definitions
      require: [
        '../convertedJSFiles/cucumberSteps/*.js' // accepts a glob
      ]
    }
  };

  