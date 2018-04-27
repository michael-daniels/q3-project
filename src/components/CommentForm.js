import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addComment } from '../redux/actions'

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

      console.log("SUBMIT FUNCTION PROPS", this.props.addCommentFunc)
      this.props.addCommentFunc(this.state.username, this.state.content)
    }

    return (
      <div>
        <form className="form-group form-group-comments" onSubmit={submitHandler}>
          <input name="username" className="form-control" type="text" value={this.state.username} onChange={(event) => {return this.setState({username:event.target.value})}} placeholder="Username"/>
          <textarea name="content" className="form-control" type="text" value={this.state.content} onChange={(event) => {return this.setState({content:event.target.value})}} placeholder="Comment"/>
          <button className="form-control btn btn-primary" type="submit">Submit Comment</button>
        </form>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addCommentFunc: addComment
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(CommentForm)
