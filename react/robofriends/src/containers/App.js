import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  componentDidMount() {
    const { onRequestRobots } = this.props;
    onRequestRobots();
  }

  render() {
    const {
      searchField, onSearch, robots, isPending,
    } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return isPending ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Robofriends</h1>
        <SearchBox searchChange={onSearch} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

App.propTypes = {
  searchField: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  onRequestRobots: PropTypes.func.isRequired,
  robots: PropTypes.arrayOf(PropTypes.object).isRequired,
  isPending: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
