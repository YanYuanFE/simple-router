import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Route, Link } from './react-router-dom';
import UserAdd from './UserAdd';
import UserList from './UserList';
import UserDetail from './UserDetail';
const { Content, Sider } = Layout;
export default class User extends Component {
  render() {
    return (
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="1">
              <Link to="/user/add">用户添加</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/user/list">用户列表</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            <Route path="/user/add" component={UserAdd} />
            <Route path="/user/list" component={UserList} />
            <Route path="/user/detail/:id" component={UserDetail} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}