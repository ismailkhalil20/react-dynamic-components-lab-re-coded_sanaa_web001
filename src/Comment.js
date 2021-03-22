//your code here
<<<<<<< HEAD
import React, { Component } from 'react'

class Comment extends Component {
    render() {
        return (
            <div className="comment">
                {this.props.commentText}
            </div>
        )
    }
}

export default Comment;

=======
import React, { Component } from 'react';

export default class Comment extends Component {
  render() {
    return <div className="comment" >{ this.props.commentText }</div>
      
  }
}
>>>>>>> ccf43a92788e552c11c4966e596feb680738926d
