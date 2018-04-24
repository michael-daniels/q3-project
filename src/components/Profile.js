import React, { Component } from 'react';

class Profile extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6 profile-photo-div">
            <img className="profile-photo" src="https://boygeniusreport.files.wordpress.com/2017/11/pupper.png?w=700" />
          </div>
          <div className="col-md-6 pet-info-div">
            <h3>Name:</h3>
            <h3>Breed:</h3>
            <h3>Gender:</h3>
            <h3>Date Lost:</h3>
            <h3>Last Seen Near:</h3>
          </div>
        </div>
        <div>
          <hr />
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
      </div>
    );
  }

}

export default Profile;
