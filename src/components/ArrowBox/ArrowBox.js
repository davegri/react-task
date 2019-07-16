import React from 'react';
import './ArrowBox.css';

class ArrowBox extends React.Component{
  render() {
    return (
      <div className="ArrowBox">
      {this.props.children}
      </div>
    );
  }
}

export default ArrowBox;
