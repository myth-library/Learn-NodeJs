console.log('Before');
getUser(1, getRepository);
console.log('After');

/* Solution for callback hell: replaced anonymous callback function with named functions (bottom to top) */
function getRepository() {
  getRepository(user.gitHubUsername, getCommits); // referencing function, not calling
}

function getCommits(repos) {
  getCommits(repos[0], displayCommits);
}

function displayCommits(commits) {
  console.log(commits);
}

// ====================================================
function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading a user from a database...');
    callback({ id: id, gitHubUsername: 'Myth' });
  }, 2000);
}

function getRepository(username, callback) {
  setTimeout(() => {
    console.log('Calling GitHub API...');
    callback(['repo1', 'repo2', 'repo3']);
  }, 2000);
}

/* getRepositories() කියලා function දෙකක් තියෙනවා, නමුත් මේවාගේ signatures(parameters) වෙනස්. 
   එනිසා, these two functions considered as different functions  */
