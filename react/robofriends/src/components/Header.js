import React, { Component } from 'react';

export default class Header extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <h1 className="f1">Robofriends</h1>;
  }
}
