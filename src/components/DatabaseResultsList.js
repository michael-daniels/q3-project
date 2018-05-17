import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SingleDatabaseResult from './SingleDatabaseResult'
import { fetchAllUsers } from '../redux/actions'
import { filterDatabaseFound } from '../redux/actions'
import { filterDatabaseLost } from '../redux/actions'

class DatabaseResultsList extends Component {

  state = {
    all_users_fetched: false,
    filter_status:'all',
    cityFilter:''
  }

  updateCityFilter = (event) => {
    this.setState({cityFilter:`${event.target.value}`})
  }

  render() {

    if (this.state.all_users_fetched === false) {
      this.props.fetchAllUsersFunc()
      this.setState({all_users_fetched: true})
    }

    console.log("ALL USERS ARRAY", this.props.allUsersArray[0])

    let singleDatabaseResult;

    if (this.state.filter_status === 'lost') {
      singleDatabaseResult = this.props.allUsersArray.map((item) => {
        console.log("MAP ITEM", item)
        if (item.lostorfound === 'Lost' && item.crossroadslost.includes(this.state.cityFilter)) {
          return <SingleDatabaseResult key={item.id} singleUser={item} />
        }
      })
    }
    else if (this.state.filter_status === 'found') {
      singleDatabaseResult = this.props.allUsersArray.map((item) => {
        console.log("MAP ITEM", item)
        if (item.lostorfound === 'Found' && item.crossroadslost.includes(this.state.cityFilter)) {
          return <SingleDatabaseResult key={item.id} singleUser={item} />
        }
      })
    }
    else if (this.state.filter_status === 'all') {
      singleDatabaseResult = this.props.allUsersArray.map((item) => {
        console.log("MAP ITEM", item)
        if (item.crossroadslost.includes(this.state.cityFilter)) {
          return <SingleDatabaseResult key={item.id} singleUser={item} />
        }
      })
    }

    const showAllPets = () => {
      this.setState({filter_status: 'all'})
      console.log("STATE AFTER FILTER STATUS ALL", this.state)
    }

    const showLostPets = () => {
      this.setState({filter_status: 'lost'})
    }

    const showFoundPets = () => {
      this.setState({filter_status: 'found'})
    }

    if (this.props.allUsersArray[0]) {
      return (
        <div>
            <input className="form-control city-filter-input" type="text" value={this.state.cityFilter} onChange={this.updateCityFilter} placeholder="Enter city here to filter results"/>
          <div className="row">
            <div className="col-md-4">
              <button className="btn btn-primary filter-button" onClick={() => {return showAllPets()}} autoFocus>Show All {this.state.cityFilter} Pets </button>
            </div>
            <div className="col-md-4">
              <button className="btn btn-primary filter-button" onClick={() => {return showFoundPets()}}>Show Found {this.state.cityFilter} Pets </button>
            </div>
            <div className="col-md-4">
              <button className="btn btn-primary filter-button" onClick={() => {return showLostPets()}}>Show Lost {this.state.cityFilter} Pets</button>
            </div>
          </div>
          <hr />
          <div className="row">
            {singleDatabaseResult}
          </div>

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
