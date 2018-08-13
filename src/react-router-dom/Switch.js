import React, {Component} from 'react';
import pathTopRegexp from 'path-to-regexp';
import {Consumer} from './context';
class Switch extends Component {
    constructor(props) {
      super(props);
      this.state = {  };
    }
    render() {
      return (
        <Consumer>
          {
            state => {
              let pathname = state.location.pathname;
              let children = this.props.children;
              for (var i=0; i< children.length; i++) {
                let child = children[i];
                let path = child.props.path || '';
                let reg = pathTopRegexp(path, [], {end: false});
                if(reg.test(pathname)) {
                  return child;
                }
              }
              return null;
            }
          }
        </Consumer>
      );
    }
}

export default Switch;