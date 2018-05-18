import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Comments from './Comments'
import { fetchUser } from '../redux/actions'
import { getPermissions } from '../redux/actions'

class Profile extends Component {

  state = {user_info_fetched:false}

  render() {
    let currentURL = window.location.href
    let currentUser = currentURL.substr(currentURL.lastIndexOf("/")+1)

    if(this.state.user_info_fetched === false) {
      this.props.fetchUserFunc(currentUser)
      this.setState({user_info_fetched:true})
    }

    console.log("FETCHED USER", this.props.fetched_user[0])

    if (this.props.fetched_user[0]) {

      const newDateFormat = () => {
        let theDate = this.props.fetched_user[0].datelostorfound
        let theDateArray = theDate.split('-')
        let theMonth = theDateArray[1]
        let theDay = theDateArray[2]
        let theYear = theDateArray[0]
        let newDate = []

        newDate.push(theMonth)
        newDate.push(theDay)
        newDate.push(theYear)

        return newDate.join('-')
      }

      return (
        <div>
          <div className="pet-name"><h1>{this.props.fetched_user[0].petname}</h1></div>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <div className="profile-photo-div">
                <img className="profile-photo" src={this.props.fetched_user[0].avatarurl} />
              </div>
              <div className="pet-info-div">
                <span className="pet-info">{this.props.fetched_user[0].petbreed} - </span>
                <span className="pet-info">{this.props.fetched_user[0].petgender} - </span>
                <span className="pet-info">{this.props.fetched_user[0].lostorfound} on {newDateFormat()} - </span>
                <span className="pet-info">{this.props.fetched_user[0].crossroadslost} - </span>
                <span className="pet-info">{this.props.fetched_user[0].city} - </span>
                <span className="pet-info">{this.props.fetched_user[0].state} - </span>
                <span className="pet-info">{this.props.fetched_user[0].zip} </span>
              </div>

            </div>

              <div className="col-md-6">
                <Comments />
              </div>

          </div>

          <div>
            <hr />
            <div className="row">
              <div className="col-md-12">
                <h3>Location</h3>
                <iframe width="100%" height="400" frameBorder="0" src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyComtCTHcgK-Hn-t4e_idADPWJgWpI4G4E&q=${this.props.fetched_user[0].crossroadslost}${this.props.fetched_user[0].city}${this.props.fetched_user[0].state}`} allowFullScreen></iframe>
              </div>
            </div>

          </div>
        </div>
      );
    }
    else {
      return (
        <div>
          <div className="pet-name"><h1>Loading...</h1></div>
            <div className="profile-photo-div">
              Loading...
            </div>
            <div className="pet-info-div">
              Loading...
            </div>



          <div>
            <hr />
            <div className="row">
              <div className="col-md-6">
                Loading...
              </div>
              <div className="col-md-6">
                Loading...
              </div>
            </div>

          </div>
        </div>
      );
    }

  }

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchUserFunc: fetchUser
    }, dispatch)
}
const mapStateToProps = state => ({
  fetched_user: state.user
})


export default connect(mapStateToProps, mapDispatchToProps)(Profile)
