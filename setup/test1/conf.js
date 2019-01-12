exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo-spec.js'],


  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--disable-gpu', '--no-sandbox', '--disable-extensions', '--disable-dev-shm-usage']
    }
  },


};
