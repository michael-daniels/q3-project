import React, { Component } from 'react';

class CommentForm extends Component {

  state = {
    username:'',
    content:'',
  }

  render() {

    let submitHandler = (event) => {
      event.preventDefault()
      fetch(`http://localhost:8000/comments/${this.props.userId}`,{
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method:'post',
        body:JSON.stringify(this.state)
      })
    }

    return (
      <div>
        <form className="form-group" onSubmit={submitHandler}>
          <input name="username" className="form-control" type="text" value={this.state.username} onChange={(event) => {return this.setState({username:event.target.value})}} placeholder="Username"/>
          <textarea name="content" className="form-control" type="text" value={this.state.content} onChange={(event) => {return this.setState({content:event.target.value})}} placeholder="Comment"/>
          <button className="form-control btn btn-primary" type="submit">Submit Comment</button>
        </form>
      </div>
    );
  }

}

export default CommentForm;
