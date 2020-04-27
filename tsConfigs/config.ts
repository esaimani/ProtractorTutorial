exports.config = {
    framework: 'jasmine',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    capabilities: {
      browserName: 'chrome',
      acceptInsecureCerts : true
    },
    specs: ['/Users/esaimaninavamani/VisualStudioCode-Workspace/ProtractorTutorial/convertedJSFiles/tsFiles/spec.js']
  };

  