import React, { Component } from 'react';

class CommentForm extends Component {

  state = {}

  render() {
    return (
      <div>
        <form className="form-group">
          <input className="form-control" type="text" placeholder="Username"/>
          <textarea className="form-control" type="text" placeholder="Comment"/>
          <button className="form-control btn btn-primary" type="submit">Submit Comment</button>
        </form>
      </div>
    );
  }

}

export default CommentForm;
