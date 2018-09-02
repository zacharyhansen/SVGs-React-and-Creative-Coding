import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Search from "./components/Search.jsx";
import RepoList from "./components/RepoList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }

  componentDidMount() {
    this.getRepos();
  }

  getRepos() {
    $.ajax({
      url: "/repos",
      method: "GET",
      contentType: "application/json",
      success: result => {
        console.log("recieved server response from GET request");
        console.log("heres my GET result", result);
        this.setState(prevState => {
          return {
            repos: result
          };
        });
      }
    });
  }

  search(term) {
    console.log(`${term} was searched`);
    $.ajax({
      url: "/repos",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        username: term
      }),
      success: result => {
        console.log("recieved server response from POST request");
        this.getRepos();
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Github Fetcher</h1>
        <RepoList repos={this.state.repos} />
        <Search onSearch={this.search.bind(this)} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
