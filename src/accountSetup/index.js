import React, { Component } from 'react';
import TextInput from '../components/TextInput';

class Account extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }

  _onChange = (e) => {
    this.setState({value: e.target.value})
  };

  render() {
    return (
      <div id="account" className="center">
        <TextInput
          id="account_username"
          label="Username"
          onChange={this._onChange}
          value={this.state.value}
        />
      </div>
    )
  }
}

export default Account;
