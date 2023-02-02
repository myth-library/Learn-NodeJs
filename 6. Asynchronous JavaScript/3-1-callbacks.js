console.log('Before');
const user = getUser(1, function (user) {
  console.log(user);
});
console.log('After');

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading a user from a database...');
    callback({ id: id, gitHubUsername: 'Myth' });
  }, 2000);
}

/* 
    මෙතනදි වෙන්නේ asynchronous operation එකේ result එක ready වුණාම එම result(output) එක function
    එකක් සමග call කිරීමයි
    (if async operation done => callback fn. called with result of async. operation)

    async function එකට pass කරන function එක callback fn. එකක් නිසයි parameter එක callback ලෙස
    නම් කරන්නේ (as a convention). අපට අවශ්‍ය නමක් භාවිතා කරන්න පුළුවන්

    + What is callback fn. ?
          - A callback function is a function passed into another function as an argument
*/
