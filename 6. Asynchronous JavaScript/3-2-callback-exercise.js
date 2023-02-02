console.log('Before');
getUser(1, function (user) {
  getRepository(user.gitHubUsername, (repos) => {
    console.log('Repositories: ', repos);
  });
});
console.log('After');

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
