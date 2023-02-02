/* 
========== async and await ==========
+ this is a new javascript feature
+ this feature helps us to write down async code in synchronus manner
*/

console.log('Before');

// ===================== Promise-based approach =====================
// getUser(1)
//   .then((user) => getRepository(user.gitHubUsername))
//   .then((repos) => getCommits(repos[0]))
//   .then((commits) => console.log(commits))
//   .catch((error) => console.log('Error: ', error.message));

// ===================== Async and await approach =====================
async function displayCommits() {
  const user = await getUser(1); // awaits (රැඳී සිටී) for the result of the function that returns the promise and store that returned value
  const repos = await getRepository(user.gitHubUsername);
  const commits = await getCommits(repos[0]);
  console.log(commits);
}
displayCommits();
/* How to use async and await??
      1- promises return කරන functoins සමග await keyword එක භාවිතා කිරීම
      2- await keyword එක සහිත code lines async function එකකින් wrap කිරීම */

console.log('After');

//
//
// =========================================================
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading a user from a database...');
      resolve({ id: id, gitHubUsername: 'Myth' });
    }, 2000);
  });
}

function getRepository(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['repo1', 'repo2', 'repo3']);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['commit']);
    }, 2000);
  });
}
