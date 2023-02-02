console.log('Before');
const user = getUser(1);
console.log(user); // display: undefined
console.log('After');

function getUser(id) {
  setTimeout(() => {
    console.log('Reading a user from a database...');
    return { id: id, gitHubUsername: 'Myth' };
  }, 2000);
}

/* undefined වෙන්නේ console.log(user) statement එක execute වෙද්දි getUser function එක value එකක් return කරලා (async
   operation එකේ result එකක්) නැති නිසා
      (reason for undefined: getUser function එක value එක return කරන්නෙ 2ms පරක්කු වෙලා) 
   
   + async programs වල execution එක ඕනෑම වෙලාවක complete වෙන්න පුළුවන් නිසා මේ problem එක තියෙනවා
   
   + Solution for this problem: there is a 3 patterns that can we used with acynchronous programs 
          1- callbacks
          2- promises
          3- async/await        
*/
