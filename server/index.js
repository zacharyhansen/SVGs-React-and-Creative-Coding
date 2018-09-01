require("dotenv").config();
var bodyParser = require("body-parser");
const express = require("express");
const github = require("./../helpers/github.js");
const gitData = require("./../data.json");

const db = require("./../database/index.js");

let app = express();

app.use(express.static(__dirname + "/../client/dist"));

app.use(bodyParser.json());

app.post("/repos", function(req, res) {
  // console.log("body", req.body);
  github.getReposByUsername(req.body.username, data => {
    console.log(data[0].id);
    var params = [];
    for (let i = 0; i < data.length; i++) {
      params.push({
        id: data[i].id,
        name: data[i].name,
        repos_url: data[i].owner.repos_url,
        owner_id: data[i].owner.id,
        owner_login: data[i].owner.login,
        forks: data[i].forks
      });
    }
    db.save(params, () => {
      res.end();
    });
  });
});

app.get("/repos", function(req, res) {
  db.find(null, docs => {
    res.json(docs);
  });
});

let port = process.env.PORT || 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
