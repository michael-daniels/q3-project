import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Comments extends Component {

  state = {}

  render() {
    return (
      <div>
        <h3>Comments</h3>

        <div className="single-comment">
          <div className="commenter-name">
            Username
          </div>
          <div className="comment-content">
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
          </div>
        </div>
      </div>
    );
  }

}

export default Comments;
