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
    }/*,
    task2 ={
        body:{
            summary:'Avanzar base de datos',
            acceptanceCriteria:'Base de datos semifuncional',
            status:2,
            createdBy:User.nombre,
            modifiedBy:null,
            limitDate:'2017-01-26',
            done:0,
            user:User
        },
        params:{
            id:2,
            userId:User.id
        }
    },
    task3 ={
        body:{
            summary:'Crear base de datos',
            acceptanceCriteria:'Base de datos no existe',
            status:0,
            createdBy:User.nombre,
            modifiedBy:null,
            limitDate:'2017-01-26',
            done:0,
            user:User
        },
        params:{
            id:3,
            userId:User.id
        }
    }*/
];

module.exports = {
    dbMockUser,
    dbMockTask
}

