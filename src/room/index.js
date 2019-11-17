import React, { Component } from 'react';
import PartyAnimation from "./PartyAnimation";
import SongDisplay from "./SongDisplay";
import JudgeDisplay from "./JudgeDisplay";

const fakeUser = {
  username: "Khalid",
  avatar: 3,
};

const fakeSong = {
  album: "Starboy",
  title: "The Weekend",
  artist: "Starboy",
  albumImg: "http://i.imgur.com/mjqJhdD.jpg"
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
      isDj: false,
      isCurrent: false,
    };
  }

  render() {
    return(
      <div id="room">
        <PartyAnimation user={fakeUser}/>
        <div id="room-controls" className="center">
          <SongDisplay
            song={fakeSong}
            isDj={this.state.isDj}/>
          {
            !this.state.isDj &&
            <JudgeDisplay
              dj={fakeUser}/>
          }
        </div>
      </div>
    )
  }
}

export default Room;
