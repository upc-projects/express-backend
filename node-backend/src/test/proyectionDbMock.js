const dbMockUser = [
    enzo = {
        body: {
            nombre: 'Enzo',
            apellido: 'Lizama'
        },
        params: {
            id: 1
        }
    },
    miguel = {
        body: {
            nombre: 'Miguel',
            apellido: 'Cruz'
        },
        params: {
            id: 2
        }
    },
    diego = {
        body: {
            nombre: 'Diego',
            apellido: 'Salas'
        },
        params: {
            id: 3
        }
    },
    Rodrigo = {
        body: {
            nombre: 'Rodrigo',
            apellido: 'Guadalupe'
        },
        params: {
            id: 4
        }
    },
    Andres = {
        body: {
            nombre: 'Andres',
            apellido: 'Lopez'
        },
        params: {
            id: 5
        }
    }
];

const dbMockTask = [
    task1 ={
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
    },task2 ={
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
    task3 ={
        body:{
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
        }
    }
    
];

module.exports = {
    dbMockUser,
    dbMockTask
}

