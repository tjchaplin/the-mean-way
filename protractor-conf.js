exports.config = {
  // allScriptsTimeout: 11000,
  
  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: [
    'test/e2e/**/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:3000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 3000
  }
};