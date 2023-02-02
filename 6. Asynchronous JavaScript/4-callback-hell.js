// Asynchronous implementation
console.log('Before');
getUser(1, function (user) {
  getRepository(user.gitHubUsername, (repos) => {
    getCommits(repos[0], (commits) => {
      // this nested structure of callback functions refers as 'callback-hell' or 'christmas-tree-problem'
    });
  });
});
console.log('After');

//
//
//
//

// Synchronous implementation of above async. program
console.log('Before');
const user = getUser(1);
const repos = getRepository(user.gitHubUsername);
const commits = getCommits(repos[0]);
console.log('After');
