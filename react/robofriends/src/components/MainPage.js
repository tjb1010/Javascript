import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBox from './SearchBox';
import CardList from './CardList';
import Scroll from './Scroll';
import Header from './Header';
import ErrorBoundry from './ErrorBoundry';

class MainPage extends Component {
  componentDidMount() {
    const { onRequestRobots } = this.props;
    onRequestRobots();
  }

  filteredRobots = (robots) => {
    const { searchField } = this.props;
    return robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
  };

  render() {
    const { onSearch, robots, isPending } = this.props;

    return isPending ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearch} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={this.filteredRobots(robots)} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

MainPage.propTypes = {
  searchField: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  onRequestRobots: PropTypes.func.isRequired,
  robots: PropTypes.arrayOf(PropTypes.object).isRequired,
  isPending: PropTypes.bool.isRequired,
};

export default MainPage;
