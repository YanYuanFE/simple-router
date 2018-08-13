import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { HashRouter as Router, Route, Link, Redirect, Switch } from './react-router-dom';

import './App.css';
import Home from './Home';
import User from './User';
import Profile from './Profile';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Router>
          <Header className="header">
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">
                <Link to="/home">首页</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/profile">个人中心</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/user">用户</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Content>
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/user" component={User} />
                <Redirect to="/home"/>
              </Switch> 
            </Content>   
          </Layout>
        </Router>
      </Layout>
    );
  }
}

export default App;
