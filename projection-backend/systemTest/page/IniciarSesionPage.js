const ProjectionDriver = require('../driver/ProjectionDriver').ProjectionDriver;
var webdriver = require('selenium-webdriver'),
    By = webdriver.By;
const assert = require('assert');
    
class IniciarSesionPage {
    constructor(pagina) {
        this.webDriver = pagina;
        this.cajaUsuarios = By.name('loginUsername');
        this.cajaClave = By.name('loginPassword');
        this.botonIniciarSesion = By.name('loginBtn');
        this.mensajeEmail = By.xpath('//*[@id="root"]/div/div/div/div/div/form/div[1]/div');
        this.mensajePassword = By.xpath('//*[@id="root"]/div/div/div/div/div/form/div[2]/div')
        this.MAX_TIEMPO = 1000;
    }

    iniciarSesion(usuario, clave, emailExpect, passwordExpect) {
        this.webDriver.findElement(this.cajaUsuarios).clear();
        this.webDriver.findElement(this.cajaUsuarios).sendKeys(usuario);
        this.webDriver.sleep(this.MAX_TIEMPO).then(() => {
            this.webDriver.findElement(this.cajaClave).clear();
            this.webDriver.findElement(this.cajaClave).sendKeys(clave);
            this.webDriver.sleep(this.MAX_TIEMPO).then(() => {
                this.webDriver.findElement(this.botonIniciarSesion).click();
                this.webDriver.sleep(this.MAX_TIEMPO).then(() => {
                    if (emailExpect != '')
                        this.webDriver.findElement(this.mensajeEmail).getText().then((text) => {
                            assert(text === emailExpect);
                        }); 
                    if (passwordExpect != '')
                        this.webDriver.findElement(this.mensajePassword).getText().then((text) => {
                            assert(text === passwordExpect);
                        }); 
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

module.exports.IniciarSesionPage = IniciarSesionPage;