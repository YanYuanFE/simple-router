import React, { Component } from 'react';
import { Route, Link } from './react-router-dom';

export default class UserDetail extends Component {
  render() {
    return (
      <div className="box">
        User Detail {this.props.match.params.id}
      </div>
    );
  }
}