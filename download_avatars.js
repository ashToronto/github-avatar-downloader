var request = require('request');
var secrets = require('./SECRETS.js');

console.log('Welcome to the GitHub Avatar Downloader!');

var token = secrets.GITHUB_TOKEN

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': token
    }
  };

  request(options, function(err, res, body) {
    cb(err, body);
  });
}
