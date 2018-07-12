const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  
  //create array to store repos
  //iterate through all repos
    //if the username of the repo matches the username passed in
      //push repo into repos array
  //return repo array
  
  
  
  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: ;'https://api.github.com/users/arobcode2/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

}

//getReposByUsername('arobcode2');

module.exports.getReposByUsername = getReposByUsername;