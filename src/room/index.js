import React, { Component } from 'react';
import PartyAnimation from "./PartyAnimation";
import SongDisplay from "./SongDisplay";

const fakeUser = {
  username: "Khalid",
  avatar: 3,
};

const fakeSong = {
  album: "Starboy",
  title: "The Weekend",
  artist: "Starboy",
};

const fakeQueue = [
  {
    title: "Barboy",
    artist: "The Weekend",
  },
  {
    title: "Carboy",
    artist: "The Weekend",
  },
  {
    title: "Scarboy",
    artist: "The Weekend",
  },
];

class Room extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDj: true,
      isCurrent: false,
    };
  }

  render() {
    return(
      <div id="room">
        <PartyAnimation user={fakeUser}/>
        <div id="room-controls" className="center">
          <SongDisplay isDj={this.state.isDj}/>
        </div>
      </div>
    )
  }
}

export default Room;
