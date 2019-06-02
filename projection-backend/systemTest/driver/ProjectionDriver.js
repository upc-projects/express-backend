var webdriver = require('selenium-webdriver');
    
var chrome = require('selenium-webdriver/chrome');
var o = new chrome.Options();
o.addArguments('disable-infobars');

var path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

class ProjectionDriver {

    static inicializarWebDriver(navegador) {
        this.driver = null;
        try {
            switch(navegador) {
                case "firefox": //needs fixing
                this.driver = new webdriver.Builder()
                    .forBrowser('firefox')
                    .build(); break;
                case "chrome":
                this.driver = new webdriver.Builder()
                    .withCapabilities(webdriver.Capabilities.chrome())
                    .setChromeOptions(o)
                    .build(); break;  
            }
        } catch (err) {
            console.log(err);
        }

        return this.driver;
    }

    static cerrarPagina(webDriver) {
        if(webDriver != null) {
            webDriver.quit();
        }
    }
}

module.exports.ProjectionDriver = ProjectionDriver;