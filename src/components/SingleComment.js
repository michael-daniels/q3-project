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
          {props.singleComment.username}
        </div>
        <div className="comment-content">
          {props.singleComment.content}
        </div>
        <div className="delete-comment">
          <button className="btn btn-primary" onClick={() => { return props.deleteCommentFunc(props.singleComment.id) }}>delete</button>
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
