/* 
1. What is promises?
    - promise is an object
    - promise holds the eventual(අවසාන) result of an asynchronous operation
    
   result of an asynchronous operation can be either(එක්කෝ)
    - value
    - error

2. why this pattern called as promise?
    - it promises to give a results of an async operation

3. this promise object has 3 stages
    - initial state: "pending state" (promise object එක create කරන අවස්ථාව)
    - final state can be either (after kick off async operation)
          + "fulfilled state" (returns values)
          + "rejected state" (returns error)

    kick off = starting
*/

const p = new Promise((resolve, error) => {
  // ==== Kick-off some async work ====
  setTimeout(() => {
    resolve({ studentId: 'IT206' }); // pending => resolved, fulfilled
    // error(new Error('This is an error message')); // pending => rejected
  }, 2000);
});

/*  p = promise object
        + promise has a value, we can access that using p.then()
        + promise has an error, we can access that using p.catch()  */
// prettier-ignore
p
  .then((result) => console.log('Result', result))
  .catch(err => console.log('Error: ', err.message));
