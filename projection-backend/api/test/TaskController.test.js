const task = require('../controllers/TaskControllerStatic')
const proyectionDbMock = require('./proyectionDbMock')


describe('Testing task controller',()=>{

    beforeAll(()=>{
        dbMock=proyectionDbMock.dbMockTask;
    })

    test('Testing all tasks by user',()=>{
        expect(task.allTasksByUserId(2,dbMock,null)).toEqual([{
                body:{
                    summary:'Comenzar base de datos',
                    acceptanceCriteria:'Base de datos en cero',
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
            },
            { body:{
                summary:'Actualizar base de datos',
                acceptanceCriteria:'Base de datos a medias',
                status:1,
                modifiedBy:null,
                limitDate:'2017-01-28',
                done:0,
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
                id:3,
                userId:2
            }}
        ])
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

    test('Testing the one task method', () => {
        expect(task.oneTask(dbMock[0], dbMock, null)).toEqual({
                body:{
                    summary:'Terminar base de datos',
                    acceptanceCriteria:'Base de datos funcional',
                    status:1,
                    modifiedBy:null,
                    limitDate:'2017-01-26',
                    done:1
                },
                params:{
                    id:1
                }
            
        })
    })

    test('Testing the all tasks method', () => {
        expect(task.allTasks(dbMock, null, null)).not.toEqual([])
    })

    test('Testing remove task method', () => {
        expect(task.removeTask(null, dbMock, 0, null, null)).toEqual([{
            body:{
                summary:'Terminar base de datos',
                acceptanceCriteria:'Base de datos funcional',
                status:1,
                modifiedBy:null,
                limitDate:'2017-01-26',
                done:1
            },
            params:{
                id:1
            }
        }])
        
        const matches = dbMock.filter(task => {
            return task.body.summary == 'Terminar base de datos';
        })

        expect(matches).toEqual([])    
    })

    test('Testing update task method',()=>{
        expect(task.updateTask(
            task2 ={
                body:{
                    summary:'Actualizar base de datosvvvvv',
                    acceptanceCriteria:'Base de datos asdasdasd',
                    status:1,
                    createdBy:'Miguel',
                    modifiedBy:'Enzo',
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
            },
            dbMock,null
        )).toEqual({
            body:{
                summary:'Actualizar base de datosvvvvv',
                acceptanceCriteria:'Base de datos asdasdasd',
                status:1,
                createdBy:'Miguel',
                modifiedBy:'Enzo',
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