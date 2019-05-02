import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import robots from './robots';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchfield: '',
    };
  }

  onSearch = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">Robofriends</h1>
        <SearchBox searchChange={this.onSearch} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
