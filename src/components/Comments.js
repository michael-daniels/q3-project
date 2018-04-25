import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CommentForm from './CommentForm'
import SingleComment from './SingleComment'
import { fetchComments } from '../redux/actions'

class Comments extends Component {

  state = {comments_fetched: false}

  render() {
    console.log("FETCHED USER ON COMMENTS", this.props.fetched_user)
    if (this.state.comments_fetched === false) {
      this.props.fetchCommentsFunc(this.props.fetched_user[0].id)
      this.setState({comments_fetched:true})
    }

    console.log("FETCHED COMMENTS", this.props.fetched_comments)

    let singleComment = this.props.fetched_comments.map((item) => {
      return <SingleComment key={item.id} singleComment={item} />
    })

    if (this.props.fetched_user[0].id) {
      return (
        <div>
          <h3>Comments</h3>
          {singleComment}
          <CommentForm userId={this.props.fetched_user[0].id}/>
        </div>
      );
    }
    else {
      return (
        <div>
          <h3>Comments</h3>
          Loading...
          <CommentForm />
        </div>
      );
    }

  }

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCommentsFunc: fetchComments
    }, dispatch)
}
const mapStateToProps = state => ({
  fetched_user: state.user,
  fetched_comments: state.comments
})


export default connect(mapStateToProps, mapDispatchToProps)(Comments)
