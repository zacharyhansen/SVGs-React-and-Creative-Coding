import React from "react";

var Repo = props => (
  <div>
    forks: {props.entry.forks}, Name: {props.entry.name}, id: {props.entry.id},
    Repo URL
    <a href={props.entry.repos_url}>{props.entry.repos_url}</a>, Owner ID:{" "}
    {props.entry.owner_id}, Username: {props.entry.owner_login}
    <br />
  </div>
);

export default Repo;
