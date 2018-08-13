import React, { Component } from 'react';
import pathTopRegexp from 'path-to-regexp';
import {Consumer} from './context';

class Route extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Consumer>
              {
                (state) => {
                  let {path, component: Component, exact = false} = this.props;
                  let {pathname} = state.location;
                  let keys = [];
                  let reg = pathTopRegexp(path, keys, {end: exact});
                  keys = keys.map(item => item.name);
                  console.log(pathname, reg)
                  let result = pathname.match(reg);
                  console.log(result)
                  let [url, ...values] = result || [];
                  let props = {
                    location: state.location,
                    history: state.history,
                    match: {
                      params: keys.reduce((obj, current, index) => {
                        obj[current] = values[index];
                        return obj;
                      }, {})
                    }
                  }
                  console.log(props);
                  if (result) {
                    return <Component {...props}/>
                  }
                  return null;
                }
              }
            </Consumer>
        );
    }
}

export default Route;


