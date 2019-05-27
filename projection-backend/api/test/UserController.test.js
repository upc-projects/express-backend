const user = require('../controllers/UserControllerStatic')
const proyectionDbMock = require('./proyectionDbMock')

describe('Testing user controller', () => {

    beforeAll(() => {
        dbMock = proyectionDbMock.dbMockUser
    })

    test('Testing save method', () => {
        expect(user.save(dbMock[0], null, null)).toEqual({
            nombre: 'Enzo',
            apellido: 'Lizama'
        })
    })

    test('Testing remove method', () => {
        expect(user.remove(null, dbMock, 0, null, null)).toEqual([{
            body: {
                nombre: 'Enzo',
                apellido: 'Lizama'
            },
            params: {
                id: 1
            }
        }])
        
        const matches = dbMock.filter(usuario => {
            return usuario.body.nombre == 'Enzo';
        })

        expect(matches).toEqual([])    
    })

    test('Testing the find one method', () => {
        expect(user.one(dbMock[0], dbMock, null, null)).toEqual({
            "body": {
                "apellido": "Cruz", 
                "nombre": "Miguel"}, 
                "params": {
                    "id": 2
                }
        })
    })

    test('Testing the all method', () => {
        expect(user.all(dbMock, null, null)).not.toEqual([])
    })
})
