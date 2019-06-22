const ProjectionDriver = require('../driver/ProjectionDriver').ProjectionDriver;
var webdriver = require('selenium-webdriver'),
    By = webdriver.By;
const assert = require('assert');
var screenshotTaker = require('../utils/screenshotTaker.js');
    
class RegistrarPage {
    constructor(navegador) {
        this.link = By.xpath('//*[@id="mobile-nav"]/ul/li[1]/a');
        this.cajaNombreUsuario = By.name('firstname');
        this.cajaApellidoUsuario = By.name('lastname');
        this.cajaCorreo = By.name('username');
        this.cajaPassword = By.name('password');
        this.cajaConfirmPassword = By.name('confirmPassword');
        this.botonRegistrar = By.name('registerBtn');
        this.mensajeRespuestaEmail = By.xpath('//*[@id="root"]/div/div/div/div/div/form/div[3]/div');
        this.mensajeRespuestaPassword = By.xpath('//*[@id="root"]/div/div/div/div/div/form/div[4]/div');
        this.MAX_TIEMPO = 1000;
        this.webDriver = ProjectionDriver.inicializarWebDriver(navegador);
    }

    ingresarpagina(urlInicial) {    
        this.webDriver.get(urlInicial)
    }

    async registrar(nombre, apellido, correo, password, confirmPassword, expectedEmail, expectedPassword) {
        await this.webDriver.findElement(this.cajaNombreUsuario).sendKeys(nombre);
        await this.webDriver.sleep(this.MAX_TIEMPO)
        await this.webDriver.findElement(this.cajaApellidoUsuario).sendKeys(apellido);
        await this.webDriver.sleep(this.MAX_TIEMPO);
        await this.webDriver.findElement(this.cajaCorreo).sendKeys(correo);
        await this.webDriver.sleep(this.MAX_TIEMPO);
        await this.webDriver.findElement(this.cajaPassword).sendKeys(password);
        await this.webDriver.sleep(this.MAX_TIEMPO);
        await this.webDriver.findElement(this.cajaConfirmPassword).sendKeys(confirmPassword);
        await this.webDriver.sleep(this.MAX_TIEMPO);
        await this.webDriver.findElement(this.botonRegistrar).click();
        await this.webDriver.sleep(this.MAX_TIEMPO);
        if (expectedEmail != '') {
            var text = await this.webDriver.findElement(this.mensajeRespuestaEmail).getText();
            assert(text === expectedEmail);
            if(text === expectedEmail) {
                this.webDriver.takeScreenshot().then(function(data) {
                    screenshotTaker.writeScreenshot(text + '.png', data);
                });
            }
        }
        if (expectedPassword != '') {
            var text = await this.webDriver.findElement(this.mensajeRespuestaPassword).getText();
            assert(text === expectedPassword);
            if(text === expectedPassword) {
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

module.exports.RegistrarPage = RegistrarPage;