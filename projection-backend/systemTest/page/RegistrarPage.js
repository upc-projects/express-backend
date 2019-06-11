const ProjectionDriver = require('../driver/ProjectionDriver').ProjectionDriver;
var webdriver = require('selenium-webdriver'),
    By = webdriver.By;
const assert = require('assert');
    
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

    registrar(nombre, apellido, correo, password, confirmPassword, expectedEmail, expectedPassword) {
        this.webDriver.findElement(this.cajaNombreUsuario).sendKeys(nombre);
        this.webDriver.sleep(this.MAX_TIEMPO).then(() => {
            this.webDriver.findElement(this.cajaApellidoUsuario).sendKeys(apellido);
            this.webDriver.sleep(this.MAX_TIEMPO).then(() => {
                this.webDriver.findElement(this.cajaCorreo).sendKeys(correo);
                this.webDriver.sleep(this.MAX_TIEMPO).then(() => {
                    this.webDriver.findElement(this.cajaPassword).sendKeys(password);
                    this.webDriver.sleep(this.MAX_TIEMPO).then(() => {
                        this.webDriver.findElement(this.cajaConfirmPassword).sendKeys(confirmPassword);
                        this.webDriver.sleep(this.MAX_TIEMPO).then(() => {
                            this.webDriver.findElement(this.botonRegistrar).click();
                            this.webDriver.sleep(this.MAX_TIEMPO).then(() => {
                                if (expectedEmail != '')
                                    this.webDriver.findElement(this.mensajeRespuestaEmail).getText().then((text) => {
                                        assert(text === expectedEmail);
                                    }); 
                                if (expectedPassword != '')
                                    this.webDriver.findElement(this.mensajeRespuestaPassword).getText().then((text) => {
                                        assert(text === expectedPassword);
                                    }); 
                            })
                        })
                    })
                })
            })
        })
    }

    obtenerPagina() {
        return this.webDriver;
    }

    cerrarPagina() {
        ProjectionDriver.cerrarPagina(this.webDriver);
    }
}

module.exports.RegistrarPage = RegistrarPage;