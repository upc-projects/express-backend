const ProjectionDriver = require('../driver/ProjectionDriver').ProjectionDriver;
var webdriver = require('selenium-webdriver'),
    By = webdriver.By;
    
class IniciarSesionPage {
    constructor(navegador) {
        this.cajaUsuario = By.xpath('//*[@id="root"]/div/div/div/div/div/form/div[1]/input');
        this.cajaClave = By.xpath('//*[@id="root"]/div/div/div/div/div/form/div[2]/input');
        this.botonIniciarSesion = By.xpath('//*[@id="root"]/div/div/div/div/div/form/input');
        this.MAX_TIEMPO = 3000;
        this.webDriver = ProjectionDriver.inicializarWebDriver(navegador);
    }

    ingresarpagina(urlInicial) {
        this.webDriver.get(urlInicial)
    }

    iniciarSesion(usuario, clave) {
        this.webDriver.findElement(this.cajaUsuario).sendKeys(usuario);
        this.webDriver.sleep(this.MAX_TIEMPO).then(() => {
            this.webDriver.findElement(this.cajaClave).sendKeys(clave);
            this.webDriver.sleep(this.MAX_TIEMPO).then(() => {
                this.webDriver.findElement(this.botonIniciarSesion).click();
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