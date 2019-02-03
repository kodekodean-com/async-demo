//Synchronous

console.log('-----Synchronous-----');

console.log('Before');
console.log('After');

console.log('-----Asynchronous-----');

//Asynchronous
console.log('Before');
setTimeout(()=>{
    console.log('Reading User From a database......');
}, 2000)
console.log('After');
