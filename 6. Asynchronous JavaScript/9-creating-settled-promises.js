/* settled promises == already resolved or already rejected promises (these promises are
   useful when doing unit testings) */

//
//
// already resolved promise
const p1 = Promise.resolve({ id: 1 });
p1.then((result) => console.log(result));

// Promise.resolve({ id: 1 }).then((result) => console.log(result)); // The above code can be define like this

//
//
// already rejected promises
const p2 = Promise.reject(new Error('reason for rejection...'));
p2.catch((error) => console.log('Error: ', error)); // error message + callstack of error object
