const mongoose = require("mongoose");
mongoose.connect(process.env.DBURI);

let repoSchema = mongoose.Schema({
  id: {
    type: Number,
    index: { unique: true }
  },
  name: String,
  repos_url: String,
  owner_id: Number,
  owner_login: String,
  forks: Number
});

let Repo = mongoose.model("Repo", repoSchema);

let save = (params, callback) => {
  for (let i = 0; i < params.length; i++) {
    Repo.insertMany(params, err => {
      if (err) {
        return console.error(err);
      }
    });
  }
  callback();
};

let find = (params, callback) => {
  // var result = [];
  //

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
