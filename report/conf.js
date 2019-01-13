var HtmlReporter = require('protractor-beautiful-reporter');

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
  
  
	  
	  
	  onPrepare: function() {
	      // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
	      jasmine.getEnv().addReporter(new HtmlReporter({
	         baseDirectory: 'tmp/screenshots'
	      }).getJasmine2Reporter());
	   }
	  
	  
  
}