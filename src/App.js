import React, { Component } from "react";
import "./styles/App.css";
// import Card from "./Card";
import { robots } from "./components/Robot";
import CardList from "./components/Cardlist";
import SearchBox from "./components/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: ""
    };
  }

  onSearchChange = event => {
    this.setState({
      searchField: event.target.value
    });
  };

  render() {
    const filterRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="App">
        <h1 className="f1 tc"> Robot Family </h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filterRobots} />
      </div>
    );
  }
}

export default App;
