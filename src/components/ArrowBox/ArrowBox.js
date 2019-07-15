import React from 'react';
import './ArrowBox.css';

class ArrowBox extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      x: null,
      y: null,
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="ArrowBox">
      {this.props.children}
      </div>
    );
  }
}

export default ArrowBox;
