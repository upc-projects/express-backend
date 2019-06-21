const ProjectionDriver = require('../driver/ProjectionDriver').ProjectionDriver;
var webdriver = require('selenium-webdriver'),
    By = webdriver.By;
const assert = require('assert');
    
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

        //Cambiar Estado
        this.radioBoton1=By.xpath('//*[@id="root"]/div/div/div/div/div/div[1]/div[2]/div[2]/form/div[1]/div/div[1]/label');
        this.radioBoton2=By.xpath('//*[@id="root"]/div/div/div/div/div/div[1]/div[2]/div[2]/form/div[1]/div/div[2]/label');
        this.radioBoton3=By.xpath('//*[@id="root"]/div/div/div/div/div/div[1]/div[2]/div[2]/form/div[1]/div/div[3]/label');
        this.botonCambiarEstado=By.xpath('//*[@id="root"]/div/div/div/div/div/div[1]/div[2]/div[2]/form/input');

        //Eliminar tarea
        this.botonEliminar=By.xpath('//*[@id="root"]/div/div/div/div/div/div[2]/div[2]/div[2]/button');

        //Tarea eliminada
        this.checkboxTareaEliminada=By.xpath('//*[@id="root"]/div/div/div/div/div/div[2]/div[2]/div[2]/form/div[2]/div/label');
        this.conocerIdTarea=By.xpath('//*[@id="root"]/div/div/div/div/div/div[2]/div[2]/div[1]');
        this.conocerContenedor=By.xpath('//*[@id="root"]/div/div/div/div/div/div[1]/div[2]');
        this.enviarTareaTerminada=By.xpath('//*[@id="root"]/div/div/div/div/div/div[2]/div[2]/div[2]/form/input');
    }


    iniciarSesion(usuario, clave) {
        this.webDriver.findElement(this.cajaUsuarios).clear();
        this.webDriver.findElement(this.cajaUsuarios).sendKeys(usuario);
        this.webDriver.sleep(this.MAX_TIEMPO).then(() => {
            this.webDriver.findElement(this.cajaClave).clear();
            this.webDriver.findElement(this.cajaClave).sendKeys(clave);
            this.webDriver.sleep(this.MAX_TIEMPO).then(() => {
                this.webDriver.findElement(this.botonIniciarSesion).click();
                this.webDriver.sleep(this.MAX_TIEMPO);
            })
        })
    }

    registrarTarea(descripcion, critAceptacion, estado, fecha,summaryNotBlank) {
        this.webDriver.findElement(this.botonCrearTarea).click();
        this.webDriver.sleep(this.MAX_TIEMPO);
        this.webDriver.sleep(this.MAX_TIEMPO).then(() => {
            this.webDriver.findElement(this.cajaDescripcion).sendKeys(descripcion);
            this.webDriver.sleep(this.MAX_TIEMPO).then(() => {
                this.webDriver.findElement(this.cajaCriterioAceptacion).sendKeys(critAceptacion);
                    this.webDriver.sleep(this.MAX_TIEMPO).then(() => {
                        this.webDriver.findElement(this.cajaEstado).sendKeys(estado);
                        this.webDriver.sleep(this.MAX_TIEMPO).then(() => {
                            this.webDriver.findElement(this.cajaFecha).sendKeys(fecha);
                            this.webDriver.sleep(this.MAX_TIEMPO).then(() => {
                                this.webDriver.findElement(this.botonRegistarTarea).click();
                                this.webDriver.sleep(this.MAX_TIEMPO).then(() => {
                                    if (summaryNotBlank != '')
                                        this.webDriver.findElement(this.mensajeDescripcion).getText().then((text) => {
                                            assert(text === summaryNotBlank);
                                        });
                                })
                            })
                        })
                })
            })
        })
    }

    actualizarTarea(descripcion, critAceptacion, estado, fecha,summaryNotBlank) {
        this.webDriver.findElement(this.botonActualizarTarea).click();
        this.webDriver.sleep(this.MAX_TIEMPO).then(() => {
            this.webDriver.findElement(this.cajaDescripcion).clear();
            this.webDriver.findElement(this.cajaDescripcion).sendKeys(descripcion);
            this.webDriver.sleep(this.MAX_TIEMPO).then(() => {
                this.webDriver.findElement(this.cajaCriterioAceptacion).clear();
                this.webDriver.findElement(this.cajaCriterioAceptacion).sendKeys(critAceptacion);
                    this.webDriver.sleep(this.MAX_TIEMPO).then(() => {
                        this.webDriver.findElement(this.cajaEstado).click();
                        this.webDriver.findElement(this.cajaEstado).sendKeys(estado);
                        this.webDriver.sleep(this.MAX_TIEMPO).then(() => {
                            this.webDriver.findElement(this.cajaFecha).clear();
                            this.webDriver.findElement(this.cajaFecha).sendKeys(fecha);
                            this.webDriver.sleep(this.MAX_TIEMPO).then(() => {
                                this.webDriver.findElement(this.botonEnviar).click();
                                this.webDriver.sleep(this.MAX_TIEMPO).then(() => {
                                    if (summaryNotBlank != '')
                                        this.webDriver.findElement(this.mensajeDescripcion).getText().then((text) => {
                                            assert(text === summaryNotBlank);
                                        });
                                })
                            })
                        })
                })
            })
        })
    }

    cambiarEstado() {
        this.webDriver.findElement(this.radioBoton2).click();
        this.webDriver.sleep(this.MAX_TIEMPO).then(() => {
            this.webDriver.findElement(this.botonCambiarEstado).click();
            this.webDriver.sleep(this.MAX_TIEMPO);
        })
    }

    eliminarTarea() {
        this.webDriver.sleep(this.MAX_TIEMPO);
        this.webDriver.findElement(this.botonEliminar).click();
        this.webDriver.sleep(this.MAX_TIEMPO).then(() => {
            this.webDriver.switchTo().alert().accept();
            this.webDriver.sleep(this.MAX_TIEMPO);
        })
    }

    tareaTerminada() {
        
        this.webDriver.sleep(this.MAX_TIEMPO);
        this.webDriver.findElement(this.checkboxTareaEliminada).click();
        this.webDriver.sleep(this.MAX_TIEMPO).then(() => {
            this.webDriver.findElement(this.enviarTareaTerminada).click();
            this.webDriver.sleep(this.MAX_TIEMPO);
            this.webDriver.switchTo().alert().accept();
        })
        
        
    }

    obtenerPagina() {
        return this.webDriver;
    }

    cerrarPagina() {
        ProjectionDriver.cerrarPagina(this.webDriver);
    }
}

module.exports.TareaPage = TareaPage;