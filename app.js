const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5 ] = arg3.split('=');

//console.log(process.argv);
//const base = 2;

crearArchivo( argv.base, argv.listar, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow))
    .catch( err => console.log(err));

