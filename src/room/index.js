import React from 'react';

class Room extends React {
  render() {
    return(
      <div>
        <img
          className="room"
          src={require('../resources/img/dj-animations/background.gif')}
          alt="background" />
      </div>
    )
  }
}
