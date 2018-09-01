import React from "react";
import Repo from "./Repo.jsx";

const RepoList = props => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    {props.repos.map((entry, index) => {
      if (index < 25) {
        return <Repo key={index} entry={entry} />;
      }
    })}
  </div>
);

export default RepoList;
