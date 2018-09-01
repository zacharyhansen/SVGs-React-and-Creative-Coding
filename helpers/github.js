// import { callbackify } from "util";
const util = require("util");
const gitData = require("./../data.json");

var callbackify = util.callbackify;
const request = require("request");
const config = require("../config.js");

let getReposByUsername = (username, callback) => {
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      "User-Agent": "request",
      Authorization: `token ${config.TOKEN}`
    }
  };

  request(options, function(error, response, body) {
    if (error) {
      console.log("errored insode of github request");
    }
    callback(JSON.parse(body));
  });
};

module.exports.getReposByUsername = getReposByUsername;
