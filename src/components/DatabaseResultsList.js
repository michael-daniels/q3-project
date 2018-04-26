import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SingleDatabaseResult from './SingleDatabaseResult'
import { fetchAllUsers } from '../redux/actions'

class DatabaseResultsList extends Component {

  state = {all_users_fetched: false}

  render() {

    if (this.state.all_users_fetched === false) {
      this.props.fetchAllUsersFunc()
      this.setState({all_users_fetched: true})
    }

    console.log("ALL USERS ARRAY", this.props.allUsersArray[0])

    let singleDatabaseResult = this.props.allUsersArray.map((item) => {
      console.log("MAP ITEM", item)
      return <SingleDatabaseResult key={item.id} singleUser={item} />
    })

    if (this.props.allUsersArray[0]) {
      return (
        <div>
          {singleDatabaseResult}
        </div>
      );
    }
    else {
      return (
        <div>
          Loading...
        </div>
      );
    }
  }

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchAllUsersFunc: fetchAllUsers
  }, dispatch)
}
const mapStateToProps = state => ({
  allUsersArray: state.allusers
})


//export default connect(mapStateToProps, mapDispatchToProps)(DatabaseResultsList)
export default connect(mapStateToProps, mapDispatchToProps)(DatabaseResultsList)
