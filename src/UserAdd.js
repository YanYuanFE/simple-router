import React, { Component } from 'react';
import {Button, Input, Form} from 'antd';

export default class UserAdd extends Component {
  constructor() {
    super();
    this.text = React.createRef();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.text.current.value);
    this.props.history.push('/user/list');
  }
  render() {
    return (
      <div className="box">
       <Form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.text} />
        <Button type="primary" htmlType="submit">提交</Button>
       </Form>
      </div>
    );
  }
}