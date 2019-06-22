const ProjectionDriver = require('../driver/ProjectionDriver').ProjectionDriver;
var webdriver = require('selenium-webdriver'),
    By = webdriver.By;
const assert = require('assert');
var screenshotTaker = require('../utils/screenshotTaker.js');
    
class IniciarSesionPage {
    constructor(pagina) {
        this.webDriver = pagina;
        this.cajaUsuarios = By.name('username');
        this.cajaClave = By.name('password');
        this.botonIniciarSesion = By.name('loginBtn');
        this.mensajeEmail = By.xpath('//*[@id="root"]/div/div/div/div/div/form/div[1]/div');
        this.mensajePassword = By.xpath('//*[@id="root"]/div/div/div/div/div/form/div[2]/div')
        this.MAX_TIEMPO = 1000;
    }


    async iniciarSesion(usuario, clave, emailExpect, passwordExpect) {
        await this.webDriver.findElement(this.cajaUsuarios).clear();
        await this.webDriver.findElement(this.cajaUsuarios).sendKeys(usuario);
        await this.webDriver.sleep(this.MAX_TIEMPO);
        await this.webDriver.findElement(this.cajaClave).clear();
        await this.webDriver.findElement(this.cajaClave).sendKeys(clave);
        await this.webDriver.sleep(this.MAX_TIEMPO);
        await this.webDriver.findElement(this.botonIniciarSesion).click();
        await this.webDriver.sleep(this.MAX_TIEMPO);
        if (emailExpect != '') {
            var text = await this.webDriver.findElement(this.mensajeEmail).getText();
            assert(text === emailExpect);
            if (text === emailExpect) {
                this.webDriver.takeScreenshot().then(function(data) {
                    screenshotTaker.writeScreenshot(text + '.png', data);
                });
            }
        }
        if (passwordExpect != '') {
            var text = await this.webDriver.findElement(this.mensajePassword).getText();
            assert(text === passwordExpect);
            if (text === passwordExpect) {
                this.webDriver.takeScreenshot().then(function(data) {
                    screenshotTaker.writeScreenshot(text + '.png', data);
                });
            }
        }   
    }

    obtenerPagina() {
        return this.webDriver;
    }

    cerrarPagina() {
        ProjectionDriver.cerrarPagina(this.webDriver);
    }
}

module.exports.IniciarSesionPage = IniciarSesionPage;