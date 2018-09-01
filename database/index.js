const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/fetcher");

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  repos_url: String,
  owner_id: Number,
  owner_login: String,
  forks: Number
});

let Repo = mongoose.model("Repo", repoSchema);

var testRepo = new Repo({
  id: 23145,
  name: "Zachary Hansen",
  repos_url: "test.url",
  owner_id: 87654,
  owner_login: "test.login",
  forks: 56
});

// testRepo.save(err => {
//   if (err) {
//     return console.error(err);
//   }
// });

let save = params => {
  var newRepo = new Repo(params);
  newRepo.save(err => {
    if (err) {
      return console.error(err);
    }
  });
};

let find = (params, callback) => {
  Repo.find()
    .sort({ forks: -1 })
    .exec((err, documents) => {
      callback(documents);
    });
};

module.exports = {
  save,
  find
};
