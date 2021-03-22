import React, { Component } from 'react';

export default class ColorBox extends Component {
  constructor(props) {
    super(props)
  state = {
    todos: [
      
    ]
  }
}

  render() {
    const opacity = this.props.opacity - 0.1
    return (
<<<<<<< HEAD
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
        { this.props.opacity >= 0.2 ? <ColorBox opacity={opacity} /> : null }
=======
      <div className="color-box" style={{opacity: this.props.opacity}}>
        { (this.props.opacity >= 0.2) 
        ? (<div>
            <ColorBox opacity={opacity} />
          </div>) 
          : null }
>>>>>>> ccf43a92788e552c11c4966e596feb680738926d
      </div>
    )
  }

}

