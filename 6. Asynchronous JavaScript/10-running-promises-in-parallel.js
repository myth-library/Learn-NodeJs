/* Think: හිතන්න facebook API සහ twitter API සමග async works කරනවා කියලා.
   මේ async works දෙකම අවසන් වූ පසු clientට output එක return කරයි. 
   
   මෙවැනි අවස්ථාවක parallel promises භාවිතා කිරීමට සිදු විය හැක */

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async operation 1 (Calling facebook API)...');
    resolve(1);
    // reject(new Error('Execution failed...'));
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async operation 2 (Calling twitter API)...');
    resolve(2);
    // reject(new Error('Execution failed...'));
  }, 1500);
});

//
//
// kick-off both above async operations (When both operations are completed => something will return to user)
// prettier-ignore
Promise.all([p1, p2])
  .then(result => console.log(result))
  .catch(error => console.log(error.message));
/* async functions (input promises) සියල්ලේම resolve නම් පමණක් async works වල outputs array එකක් විදියට return කරයි */

//
//
// prettier-ignore
Promise.race([p1, p2])
  .then(result => console.log(result))
  .catch(error => console.log(error.message));
/* async functions (input promises) වලින් මුලින්ම resolve වෙන promise එකේ value එක හෝ reject වෙන promise එකේ error එක 
   return කරනු ලබයි */
