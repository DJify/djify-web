import React, { Component } from 'react';
import PartyAnimation from "./PartyAnimation";

const fakeUser = {
  username: "DJ Khalid",
  avatar: 3,
};

class Room extends Component {
  render() {
    return(
      <div id="room">
        <PartyAnimation user={fakeUser}/>
        <h1>Hello</h1>
      </div>
    )
  }
}

export default Room;
