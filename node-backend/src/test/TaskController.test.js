const task = require('../controller/TaskControllerStatic.ts')
const proyectionDbMock = require('./proyectionDbMock')


describe('Testing task controller',()=>{

    beforeAll(()=>{
        dbMock=proyectionDbMock.dbMockTask;
    })

    
    test('Testing save method',()=>{
      expect(task.save(
        miguel = {
            body: {
                nombre: 'Miguel',
                apellido: 'Cruz'
            },
            params: {
                id: 2
            }
        },task2 ={
            body:{
                summary:'Actualizar base de datos',
                acceptanceCriteria:'Base de datos xxd',
                status:1,
                modifiedBy:null,
                limitDate:'2017-01-26',
                done:1
            },
            params:{
                id:2
            }
        },dbMock
      )).toEqual(task2 ={
        body:{
            summary:'Actualizar base de datos',
            acceptanceCriteria:'Base de datos xxd',
            status:1,
            createdBy:'Miguel',
            modifiedBy:null,
            limitDate:'2017-01-26',
            done:1,
            user:miguel = {
                body: {
                    nombre: 'Miguel',
                    apellido: 'Cruz'
                },
                params: {
                    id: 2
                }
            }
        },
        params:{
            id:2,
            userId:2
        }
    })  
    })



})