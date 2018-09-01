const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/fetcher");

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
  // Repo.distinct("id", (err, ids) => {
  //   console.log(ids);
  //   for (let i = 0; i < ids.length; i++) {
  //     Repo.findOne({ id: ids[i] }, (err, documents) => {
  //       console.log("docs", documents);
  //       result.push(documents);
  //     });
  //   }
  //   callback(result);
  //   console.log("results", result);
  // });

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
