const RegistrarPage = require('../systemTest/page/RegistrarPage').RegistrarPage;
const IniciarSesionPage = require('../systemTest/page/IniciarSesionPage').IniciarSesionPage;
const { describe, it, after, before } = require('selenium-webdriver/testing');

//USER REGISTER SCENARIOS

    describe('Projection: user register scenarios', function() {
        this.timeout(50000);
        beforeEach(function() {
            registrarPage = new RegistrarPage('chrome');
        });

        afterEach(function() {
            registrarPage.cerrarPagina();
        });

        it('register user with empty email', function() {
            registrarPage.ingresarpagina('http://localhost:3000/register');
            registrarPage.registrar('Dominic', 'Toretto', '', 'testing321', 'testing321', 'Email is required', '');
        });
        
        it('register user with existing email', function() {
            registrarPage.ingresarpagina('http://localhost:3000/register');
            registrarPage.registrar('Dominic', 'Toretto', 'dominicsc2hs@gmail.com', 'testing321', 'testing321', 
            'Email already exists', '');
        })

        it('register user with email incorrect format', function() {
            registrarPage.ingresarpagina('http://localhost:3000/register');
            registrarPage.registrar('Dominic', 'Toretto', 'dominicsc2hsgmail.com', 'testing321', 'testing321', 
            'Email needs to have correct format', '');
        })

        it('register user password must be at least 6 characters', function() {
            registrarPage.ingresarpagina('http://localhost:3000/register');
            registrarPage.registrar('Dominic', 'Toretto', 'dominicsc2hs@gmail.com', 'test', 'test', '',
            'Password must be at least 6 characters');
        })

        it('register user Password must not be empty', function() {
            registrarPage.ingresarpagina('http://localhost:3000/register');
            registrarPage.registrar('Dominic', 'Toretto', 'dominicsc2hs@gmail.com', '', '', '',
            'Password must not be empty');
        })

        it('register user Passwords must match', function() {
            registrarPage.ingresarpagina('http://localhost:3000/register');
            registrarPage.registrar('Dominic', 'Toretto', 'dominicsc2hs@gmail.com', 'test', 'testing', '',
            'Passwords must match');
        })
    });

// USER LOGIN SCENARIOS

describe('Projection: user login scenarios', function() {
    this.timeout(50000);
    beforeEach(function() {
        registrarPage = new RegistrarPage('chrome');
        iniciarSesionPage = new IniciarSesionPage(registrarPage.obtenerPagina());
    });

    afterEach(function() {
        iniciarSesionPage.cerrarPagina();
    });

    it('login user: username cannot be blank', function() {
        registrarPage.ingresarpagina('http://localhost:3000/');
        iniciarSesionPage.iniciarSesion('', 'testing', 'Username cannot be blank', '');
    });
    it('login user: Password cannot be blank', function() {
        registrarPage.ingresarpagina('http://localhost:3000/');
        iniciarSesionPage.iniciarSesion('dominic', '', '', 'Password cannot be blank');
    });
    it('login user: Invalid Username and password', function() {
        registrarPage.ingresarpagina('http://localhost:3000/');
        iniciarSesionPage.iniciarSesion('dominicsc2hs@ggmail.com', 'testing', 'Invalid Username', 'Invalid Password');
    });
    it('login user: Email needs to have correct format', function() {
        registrarPage.ingresarpagina('http://localhost:3000/');
        iniciarSesionPage.iniciarSesion('dominicgmail.com', 'testing', 'Email needs to have correct format', '');
    });
    
});