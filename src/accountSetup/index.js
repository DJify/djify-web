import React, { Component } from 'react';
import TextInput from '../components/TextInput';
import Toggle from 'react-toggle';
import "react-toggle/style.css";

const images = [
  require('../resources/img/avatar/WhiteMale.png'),
  require('../resources/img/avatar/WhiteFemale.png'),
  require('../resources/img/avatar/BlackMale.png'),
  require('../resources/img/avatar/BlackFemale.png'),
  require('../resources/img/avatar/BrownMale.png'),
  require('../resources/img/avatar/BrownFemale.png'),
  require('../resources/img/avatar/TanMale.png'),
  require('../resources/img/avatar/TanFemale.png'),
];

const animations = [
  require('../resources/img/dj-animations/DJ White Male.gif'),
  require('../resources/img/dj-animations/DJ White Female.gif'),
  require('../resources/img/dj-animations/DJ Black Male.gif'),
  require('../resources/img/dj-animations/DJ Black Female.gif'),
  require('../resources/img/dj-animations/DJ Brown Male.gif'),
  require('../resources/img/dj-animations/DJ Brown Female.gif'),
  require('../resources/img/dj-animations/DJ Tan Male.gif'),
  require('../resources/img/dj-animations/DJ Tan Female.gif'),
];

class Account extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      selected: 0,
      dj: true
    }
  }

  _onChange = (e) => {
    this.setState({username: e.target.value});
  };

  _handleToggle = (e) => {
    this.setState({dj: e.target.value});
  };

  render() {
    return (
      <div id="account" className="center">
        <TextInput
          id="account_username"
          label="Username"
          onChange={this._onChange}
          value={this.state.username}
        />
        <br />
        <label>Select an avatar</label>
        <div className="avatar-row center">
          {
            images.map((item, index) =>
              <img
                onClick={() => this.setState({selected: index})}
                src={this.state.selected === index ? animations[index] : item}
                style={{
                  height: this.state.selected === index ? 120 : 110,
                }}
                className="avatar"
                key={index}
                alt={index} />
            )
          }
        </div>
        <br />
        <label className="toggle-wrapper">
          <span>Do you want to be a DJ?</span>
          <Toggle
            defaultChecked={this.state.dj}
            onChange={this._handleToggle} />
        </label>
        <br />
        {
          this.state.username.length > 0 &&
          <button className="btn-block">
            Start listening
          </button>
        }
      </div>
    )
  }
}

export default Account;
