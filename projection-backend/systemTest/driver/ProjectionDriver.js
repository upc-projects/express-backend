var webdriver = require('selenium-webdriver')
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

class ProjectionDriver {

    static inicializarWebDriver(navegador) {
        this.webDriver = null;
        try {
            switch(navegador) {
                case "firefox": //needs fixing
                    this.webDriver = new webdriver.Builder()
                    .forBrowser('firefox')
                    .build(); break;
                case "chrome":
                    this.webDriver = new webdriver.Builder()
                    .withCapabilities(webdriver.Capabilities.chrome())
                    .build(); break;  
            }
        } catch (err) {
            console.log(err);
        }

        return this.webDriver;
    }

    static cerrarPagina(webDriver) {
        if(webDriver != null) {
            webDriver.quit();
        }
    }
}

module.exports.ProjectionDriver = ProjectionDriver;