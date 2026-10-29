// console.log('GhostNet v2 inicializada.');


// const agentesBase = ['ALPHA', 'BRAVO'];
// // agentesBase.push('rambo'); //no usra .push() con react, tampoco .pop, ni splice.



// //metodos con inmutabilidad.
// // si usar : Spread(...)

// const agentesNuevo = [...agentesBase, 'rambo'];
// console.log(agentesNuevo);

// console.log(agentesBase);


// // probando .slice(), usuando un parametro
// console.log(agentesNuevo.slice(1)); 
// console.log(agentesNuevo.slice(1, 2)); // el ultimo no se copia

// console.log(agentesNuevo);
// // consultar si mi arreglo tiene un valor diferente
// console.log(agentesNuevo.includes('Eduaardo')); //false no existe
//  ;
// console.log(agentesNuevo.includes('rambo')); // true  si existe





// app.js — Demostración de mutación por referencia
const archivoOriginal = ['SHADOW', 'VIPER', 'PHANTOM'];
console.log('1. Original antes:', archivoOriginal.join(', '));
// El falso clon: asignamos por referencia
const copiaSospechosa = archivoOriginal;
// Agregamos un agente renegado a la supuesta "copia"
copiaSospechosa.push('TRAIDOR');
console.log('2. Copia después de push:', copiaSospechosa.join(', '));
console.log('3. Original después de push:', archivoOriginal.join(', '));
console.log('4. ¿Son el mismo arreglo?', copiaSospechosa === archivoOriginal);
// pop() también muta: expulsamos a alguien de la "copia"...
const expulsado = copiaSospechosa.pop();
console.log('5. pop() sacó a:', expulsado);
console.log('6. Original después de pop:', archivoOriginal.join(', '));