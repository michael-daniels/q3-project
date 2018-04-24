import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CommentForm from './CommentForm'
import SingleComment from './SingleComment'

class Comments extends Component {

  state = [
    {
      id:1,
      username:'Michael',
      content:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id:2,
      username:'Jim',
      content:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id:3,
      username:'Alex',
      content:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
  ]

  render() {
    let singleComment = this.state.map((item) => {
      return <SingleComment key={item.id} singleComment={item}/>
    })

    return (
      <div>
        <h3>Comments</h3>
        {singleComment}
        <CommentForm />
      </div>
    );
  }

}

export default Comments;
