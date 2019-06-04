const RegistrarPage = require('../systemTest/page/RegistrarPage').RegistrarPage;
const IniciarSesionPage = require('../systemTest/page/IniciarSesionPage').IniciarSesionPage;
const { describe, it, after, before } = require('selenium-webdriver/testing');
const dataArr = require('./dataRead');

//USER REGISTER SCENARIOS

    describe('Projection: user register scenarios', function() {
        this.timeout(50000);
        beforeEach(function() {
            registrarPage = new RegistrarPage(dataArr[1][0]); 
        });

        afterEach(function() {
            registrarPage.cerrarPagina();
        });

        it('register user with empty email', function() {
            registrarPage.ingresarpagina(dataArr[1][1]);
            registrarPage.registrar(dataArr[1][2], dataArr[1][3], dataArr[1][4], dataArr[1][5], dataArr[1][6], 
            'Email is required', '');
        });
        
        it('register user with existing email', function() {
            registrarPage.ingresarpagina(dataArr[2][1]);
            registrarPage.registrar(dataArr[2][2], dataArr[2][3], dataArr[2][4], dataArr[2][5], dataArr[2][6], 
            'Email already exists', '');
        })

        it('register user with email incorrect format', function() {
            registrarPage.ingresarpagina(dataArr[3][1]);
            registrarPage.registrar(dataArr[3][2], dataArr[3][3], dataArr[3][4], dataArr[3][5], dataArr[3][6], 
            'Email needs to have correct format', '');
        })

        it('register user password must be at least 6 characters', function() {
            registrarPage.ingresarpagina(dataArr[4][1]);
            registrarPage.registrar(dataArr[4][2], dataArr[4][3], dataArr[4][4], dataArr[4][5], dataArr[4][6],
            '', 'Password must be at least 6 characters');
        })

        it('register user Password must not be empty', function() {
            registrarPage.ingresarpagina(dataArr[5][1]);
            registrarPage.registrar(dataArr[5][2], dataArr[5][3], dataArr[5][4], dataArr[5][5], dataArr[5][6],
            '', 'Password must not be empty');
        })

        it('register user Passwords must match', function() {
            registrarPage.ingresarpagina(dataArr[6][1]);
            registrarPage.registrar(dataArr[6][2], dataArr[6][3], dataArr[6][4], dataArr[6][5], dataArr[6][6],
            '', 'Passwords must match');
        })
    });

// USER LOGIN SCENARIOS

describe('Projection: user login scenarios', function() {
    this.timeout(50000);
    beforeEach(function() {
        registrarPage = new RegistrarPage(dataArr[1][0]);
        iniciarSesionPage = new IniciarSesionPage(registrarPage.obtenerPagina());
    });

    afterEach(function() {
        iniciarSesionPage.cerrarPagina();
    });

    it('login user: username cannot be blank', function() {
        registrarPage.ingresarpagina(dataArr[7][1]);
        iniciarSesionPage.iniciarSesion(dataArr[7][2], dataArr[7][3], 'Username cannot be blank', '');
    });
    it('login user: Password cannot be blank', function() {
        registrarPage.ingresarpagina(dataArr[8][1]);
        iniciarSesionPage.iniciarSesion(dataArr[8][2], dataArr[8][3], '', 'Password cannot be blank');
    });
    it('login user: Invalid Username and password', function() {
        registrarPage.ingresarpagina(dataArr[9][1]);
        iniciarSesionPage.iniciarSesion(dataArr[9][2], dataArr[9][3], 'Invalid Username', 'Invalid Password');
    });
    it('login user: Email needs to have correct format', function() {
        registrarPage.ingresarpagina(dataArr[10][1]);
        iniciarSesionPage.iniciarSesion(dataArr[10][2], dataArr[10][3], 'Email needs to have correct format', '');
    });
    
});