# async-demo
Learning Synchronous vs Asynchronous on Node.js 

#code:
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


#output:

-----Synchronous-----
Before
After
-----Asynchronous-----
Before
After
Reading User From a database......

we will learn about

##Callback
##Promises
##Async/await

www.kodekodean.com
