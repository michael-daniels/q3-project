import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { deleteComment } from '../redux/actions'

const SingleComment = (props) => {
  console.log("SINGLE COMMENT PROPS", props.singleComment)

  return (
    <div>
      <div className="single-comment">
        <div className="commenter-name">
          {props.singleComment.username} <a className="comment-x-button"><span onClick={() => { return props.deleteCommentFunc(props.singleComment.id) }}>x</span></a>
        </div>
        <div className="comment-content">
          {props.singleComment.content}
        </div>
      </div>
      <hr />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deleteCommentFunc: deleteComment
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(SingleComment)
