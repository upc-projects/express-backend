const ProjectionDriver = require('../driver/ProjectionDriver').ProjectionDriver;
var webdriver = require('selenium-webdriver'),
    By = webdriver.By;
const assert = require('assert');
var screenshotTaker = require('../utils/screenshotTaker.js');
    
class TareaPage {
    constructor(pagina) {
        this.webDriver = pagina;
        this.MAX_TIEMPO = 1000;

        //Iniciar Sesion
        this.cajaUsuarios = By.name('username');
        this.cajaClave = By.name('password');
        this.botonIniciarSesion = By.name('loginBtn');
        
        //Crear Tarea
        this.botonCrearTarea=By.xpath('//*[@id="root"]/div/div/a/i')
        this.cajaDescripcion = By.name('summary');
        this.cajaCriterioAceptacion = By.name('acceptanceCriteria');
        this.cajaEstado = By.name('status');
        this.cajaFecha = By.name('limitDate');
        this.botonRegistarTarea=By.xpath('//*[@id="root"]/div/div/div/div/div/form/input')
        this.mensajeDescripcion=By.xpath('//*[@id="root"]/div/div/div/div/div/form/div[1]/div')

        //Actualizar Tarea
        this.botonActualizarTarea=By.xpath('//*[@id="root"]/div/div/div/div/div/div[1]/div[2]/div[2]/a')
        this.botonEnviar=By.xpath('//*[@id="root"]/div/div/div/div/div/form/input');

        //Cambiar Estado
        this.radioBoton1=By.xpath('//*[@id="root"]/div/div/div/div/div/div[2]/div[2]/div[2]/form/div[1]/div/div[1]/label');
        this.radioBoton2=By.xpath('//*[@id="root"]/div/div/div/div/div/div[2]/div[2]/div[2]/form/div[1]/div/div[2]/label');
        this.radioBoton3=By.xpath('//*[@id="root"]/div/div/div/div/div/div[2]/div[2]/div[2]/form/div[1]/div/div[3]/label');
        this.botonCambiarEstado=By.xpath('//*[@id="root"]/div/div/div/div/div/div[2]/div[2]/div[2]/form/input');

        //Eliminar tarea
        this.botonEliminar=By.xpath('//*[@id="root"]/div/div/div/div/div/div[3]/div[2]/div[2]/button');

        //Tarea eliminada
        this.checkboxTareaEliminada=By.xpath('//*[@id="root"]/div/div/div/div/div/div[2]/div[2]/div[2]/form/div[2]/div/label');
        this.conocerIdTarea=By.xpath('//*[@id="root"]/div/div/div/div/div/div[2]/div[2]/div[1]');
        this.conocerContenedor=By.xpath('//*[@id="root"]/div/div/div/div/div/div[1]/div[2]');
        this.enviarTareaTerminada=By.xpath('//*[@id="root"]/div/div/div/div/div/div[2]/div[2]/div[2]/form/input');
    }


    async iniciarSesion(usuario, clave) {
        await this.webDriver.findElement(this.cajaUsuarios).clear();
        await this.webDriver.findElement(this.cajaUsuarios).sendKeys(usuario);
        await this.webDriver.sleep(this.MAX_TIEMPO)
        await this.webDriver.findElement(this.cajaClave).clear();
        await this.webDriver.findElement(this.cajaClave).sendKeys(clave);
        await this.webDriver.sleep(this.MAX_TIEMPO)
        await this.webDriver.findElement(this.botonIniciarSesion).click();
        await this.webDriver.sleep(this.MAX_TIEMPO);
    }

    async registrarTarea(descripcion, critAceptacion, estado, fecha,summaryNotBlank) {
        await this.webDriver.findElement(this.botonCrearTarea).click();
        await this.webDriver.sleep(this.MAX_TIEMPO)
        await this.webDriver.findElement(this.cajaDescripcion).sendKeys(descripcion);
        await this.webDriver.sleep(this.MAX_TIEMPO)
        await this.webDriver.findElement(this.cajaCriterioAceptacion).sendKeys(critAceptacion);
        await this.webDriver.sleep(this.MAX_TIEMPO)
        await this.webDriver.findElement(this.cajaEstado).sendKeys(estado);
        await this.webDriver.sleep(this.MAX_TIEMPO)
        await this.webDriver.findElement(this.cajaFecha).sendKeys(fecha);
        await this.webDriver.sleep(this.MAX_TIEMPO)
        await this.webDriver.findElement(this.botonRegistarTarea).click();
        await this.webDriver.sleep(this.MAX_TIEMPO)
        if (summaryNotBlank != '') {
            var text = await this.webDriver.findElement(this.mensajeDescripcion).getText();
            assert(text === summaryNotBlank);
            if(text === summaryNotBlank) {
                this.webDriver.takeScreenshot().then(function(data) {
                    screenshotTaker.writeScreenshot(text + '.png', data);
                });
            }
        }
    }

    async actualizarTarea(descripcion, critAceptacion, estado, fecha,summaryNotBlank) {
        await this.webDriver.findElement(this.botonActualizarTarea).click();
        await this.webDriver.sleep(this.MAX_TIEMPO)
        await this.webDriver.findElement(this.cajaDescripcion).clear();
        await this.webDriver.findElement(this.cajaDescripcion).sendKeys(descripcion);
        await this.webDriver.sleep(this.MAX_TIEMPO)
        await this.webDriver.findElement(this.cajaCriterioAceptacion).clear();
        await this.webDriver.findElement(this.cajaCriterioAceptacion).sendKeys(critAceptacion);
        await this.webDriver.sleep(this.MAX_TIEMPO)
        await this.webDriver.findElement(this.cajaEstado).click();
        await this.webDriver.findElement(this.cajaEstado).sendKeys(estado);
        await this.webDriver.sleep(this.MAX_TIEMPO)
        await this.webDriver.findElement(this.cajaFecha).clear();
        await this.webDriver.findElement(this.cajaFecha).sendKeys(fecha);
        await this.webDriver.sleep(this.MAX_TIEMPO)
        await this.webDriver.findElement(this.botonEnviar).click();
        await this.webDriver.sleep(this.MAX_TIEMPO)
        /*if (summaryNotBlank != '') {
            var text = this.webDriver.findElement(this.mensajeDescripcion).getText();
            assert(text === summaryNotBlank);
            if(text === summaryNotBlank) {
                this.webDriver.takeScreenshot().then(function(data) {
                    screenshotTaker.writeScreenshot(text + '.png', data);
                });
            }
        }*/
    }

    async cambiarEstado() {
        await this.webDriver.findElement(this.radioBoton3).click();
        await this.webDriver.sleep(this.MAX_TIEMPO)
        await this.webDriver.findElement(this.botonCambiarEstado).click();
        await this.webDriver.sleep(this.MAX_TIEMPO);
    }

    async eliminarTarea() {
        await this.webDriver.sleep(this.MAX_TIEMPO);
        await this.webDriver.findElement(this.botonEliminar).click();
        await this.webDriver.sleep(this.MAX_TIEMPO)
        this.webDriver.switchTo().alert().accept();
        await this.webDriver.sleep(this.MAX_TIEMPO);
    }

    async tareaTerminada() {
        await this.webDriver.sleep(this.MAX_TIEMPO);
        await this.webDriver.findElement(this.checkboxTareaEliminada).click();
        await this.webDriver.sleep(this.MAX_TIEMPO)
        await this.webDriver.findElement(this.enviarTareaTerminada).click();
        await this.webDriver.sleep(this.MAX_TIEMPO);
        this.webDriver.switchTo().alert().accept(); 
        await this.webDriver.sleep(this.MAX_TIEMPO);
    }

    obtenerPagina() {
        return this.webDriver;
    }

    cerrarPagina() {
        ProjectionDriver.cerrarPagina(this.webDriver);
    }
}

module.exports.TareaPage = TareaPage;