// Example for synchronous/blocking programming
console.log('Before');
console.log('After');

/* 
    + Synchronous tasks happen in order—you must complete the current task before moving on to the next
          - එකක task එකක් complete උනටා පස්සේ තමා තව task එකක් සිද්ධ කරන්නේ

    + Asynchronous tasks are executed in any order or even at once (ඕනෑම අනුපිළිවෙලකට හෝ එකවර ක්‍රියාත්මක වේ)
*/

//
//
//
//
// ==================================================

console.log('Before');

// async program
setTimeout(() => {
  console.log('Reading a user from a database...');
}, 2000); // 2ms

console.log('After');
