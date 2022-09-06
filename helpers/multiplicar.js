const fs = require('fs');
const colors = require('colors/safe');
// tenia un error porque el error estaba aqui y lo que hacia era que el base 
// lo tomaba como 5 por default y el nueve era el error por eso creaba
// el archivo con 5 siempre
// const crearArchivo = async( error,base = 5 ) => {
const crearArchivo = async( base = 5, listar = false, hasta ) => {

    // return new Promise( (resolve, reject) => {

    //         console.log('==========================');
    //         console.log(`Tabla del ${base}`);
    //         console.log('==========================');  
        
    //         let salida = '';
        
    //         for(let index = 1; index <= 10; index ++){
    //             salida += (`${base} X ${index} = ${ base * index}\n`);
    //         }
        
    //         console.log(salida);
        
    //         fs.writeFileSync( `tabla-${base}.txt`, salida, );
        
    //         resolve(`Tabla-${ base }.txt creada `);
    // })

    try {
        console.log(colors.green('=========================='));
        console.log(colors.america(`Tabla del ${base}`));
        console.log(colors.yellow('=========================='));  
    
        let salida = '', consola = '';
    
        for(let index = 1; index <= hasta; index ++){
            salida += (`${base} X ${index} = ${ base * index}\n`);
            consola += (`${colors.red(base)} ${colors.grey('X')} ${colors.magenta(index)} = ${ colors.cyan(base * index)}\n`);
        }
        
        if(listar){
            console.log(consola);
        }
    
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida, );
    
        return `Tabla-${ base }.txt creada `;
        
    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}