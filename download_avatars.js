var request = require('request');
var secrets = require('./SECRETS.js');

console.log('Welcome to the GitHub Avatar Downloader!');

var token = secrets.GITHUB_TOKEN

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': 'token ' + token
    }
  };

  request(options, function(err, res, body) {
    var j = JSON.parse(body);
    var avatarURL ='';
      for (var i = 0; i < j.length; i ++){
        avatarURL += j[i].avatar_url + "\n";
      }
      cb(err, avatarURL)
  });
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});

