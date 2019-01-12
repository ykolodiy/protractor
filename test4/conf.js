exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  capabilities: {
	    browserName: 'chrome',
	    chromeOptions: {
	      args: ['--disable-gpu', '--no-sandbox', '--disable-extensions', '--disable-dev-shm-usage']
	    }
	  },
  
  
  
}