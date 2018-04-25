import React from 'react'

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
      </div>
      <hr />
    </div>
  )
}

export default SingleComment
