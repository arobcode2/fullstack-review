const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fetcher', (err, db) => {
  if (err) {
    console.log('err', err);
  } else {
    console.log('Connected', db);
  }
});


let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  stargazers_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;