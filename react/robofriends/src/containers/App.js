import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setSearchField, requestRobots } from '../actions';
import MainPage from '../components/MainPage';

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

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return <MainPage {...this.props} />;
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
