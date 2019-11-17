import React, { Component } from 'react';
import PartyAnimation from "./PartyAnimation";
import SongDisplay from "./SongDisplay";
import JudgeDisplay from "./JudgeDisplay";
import QueueDisplay from "./QueueDisplay";

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
      isDj: true,
      isCurrent: false,
      items: fakeQueue,
    };
    this.handleOutletOrder = this.handleOutletOrder.bind(this);
  }

  handleOutletOrder = (items) => {
    this.setState({items})
  };

  render() {
    return(
      <div id="room">
        <PartyAnimation user={fakeUser}/>
        <div id="room-controls" className="center">
          <SongDisplay
            song={fakeSong}
            isDj={this.state.isDj}/>
          {
            this.state.isDj ?
              <QueueDisplay
                handleOrder={this.handleOutletOrder}
                songs={this.state.items}/>
              :
              <JudgeDisplay
                dj={fakeUser}/>
          }
        </div>
      </div>
    )
  }
}

export default Room;
