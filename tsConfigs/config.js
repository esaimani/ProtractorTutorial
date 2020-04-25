exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: false,
    capabilities: {
      browserName: 'chrome',
      acceptInsecureCerts : true
    },
    specs: ['../convertedJSFiles/tsFiles/spec.js']
  };

  