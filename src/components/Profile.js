import React, { Component } from 'react';
import { connect } from 'react-redux'

class Profile extends Component {

  state = {}

  render() {
    console.log(window.location.href)
    let currentURL = window.location.href
    let currentUser = currentURL.substr(currentURL.lastIndexOf("/")+1)
    console.log(currentUser)

    if (!this.state.id) {

    fetch(`http://localhost:8000/user/${currentUser}`)
      .then((user) => {
        return user.json()
      })
      .then((user) => {
        this.setState(user)
      })

      }

    return (
      <div>
        <div className="pet-name"><h1>{this.state.petname}</h1></div>
          <div className="profile-photo-div">
            <img className="profile-photo" src="https://boygeniusreport.files.wordpress.com/2017/11/pupper.png?w=700" />
          </div>
          <div className="pet-info-div">
            <span className="pet-info">{this.state.petbreed} - </span>
            <span className="pet-info">{this.state.petgender} - </span>
            <span className="pet-info">Lost on {this.state.datelost} - </span>
            <span className="pet-info">Last seen near {this.state.crossroadslost} </span>
          </div>



        <div>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <h3>Location</h3>
              <iframe width="500" height="350" frameborder="0" src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyComtCTHcgK-Hn-t4e_idADPWJgWpI4G4E&q=${this.state.crossroadslost}`} allowfullscreen></iframe>
            </div>
            <div className="col-md-6">
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

        </div>
      </div>
    );
  }

}

export default Profile;
