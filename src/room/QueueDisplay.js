import React, { Component } from 'react';
import { IoIosMove } from 'react-icons/io';
import DraggableList from 'react-draggable-list';

class Outlet extends React.Component {

  getDragHeight() {
    return 40;
  }

  render() {
    const {item, dragHandleProps} = this.props;

    return (
      <div {...dragHandleProps} className="queue-cell">
        <b>
          { item.title }
          <br />
          { item.artist }
        </b>
        <IoIosMove size={30}/>
      </div>
    );
  }
}

class QueueDisplay extends Component {
  render() {
    return(
      <div>
        <hr />
        <div id="queue-container" ref={(i)=>this._list = i}>
          <DraggableList list={this.props.songs}
                         itemKey="title"
                         template={Outlet}
                         onMoveEnd={this.props.handleOrder}
                         container={()=>this._list}/>
        </div>
        <br />
        <button className="btn-block">
          Add song
        </button>
      </div>
    )
  }
}

export default QueueDisplay;
