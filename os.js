
//OS module..

const os = require('node:os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// console.log('Total memory: '+totalMemory)

// Template string
// available in ES^ or ES2015: ECMAScript 6

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);