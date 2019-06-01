const IniciarSesionPage = require('./systemTest/page/IniciarSesionPage').IniciarSesionPage;
    
var iniciarSesionPage = new IniciarSesionPage('chrome');

    try {
        iniciarSesionPage.ingresarpagina('http://localhost:3001/');
        iniciarSesionPage.iniciarSesion('domi@gmail.com', 'testing321');
    } catch (err) {
        console.log(err);
    }
    
  

