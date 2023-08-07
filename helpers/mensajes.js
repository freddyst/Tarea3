require('colors');

const mostrarMenu = () =>{
    return new Promise(resolve=>{
        console.clear();
        console.log('======================='.blue);
        console.log('Seleccionar opcion'.red);
        console.log('=======================\n'.blue);
        
        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar Tareas`);
        console.log(`${'3.'.green} Listar tareas completas`);
        console.log(`${'4.'.green} Listar tarea pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar Tarea`);
        console.log(`${'0.'.green} Salir\n`);
        const readline=require('readline').createInterface({
        input:process.stdin,
        output:process.stdout
       });
    
       readline.question('Seleccione una opcion: ', (opt)=>{
        readline.close();

        resolve(opt);
       })
    });
}

const pausa = () =>{
    return new Promise(resolve =>{
        const readline=require('readline').createInterface({
        input:process.stdin,
        output:process.stdout
       });
       readline.question(`\nPresione ${'Enter'.green} 
       para continuar\n`, (opt)=>{
        readline.close();
        resolve();
       })
    });
}

module.exports={
    mostrarMenu,
    pausa
}