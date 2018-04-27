import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import DatabaseResultsList from './DatabaseResultsList'

class DatabaseView extends Component {

  state = {all_users_fetched: false}

  render() {
      return (
        <div>
          <div className="database-results-list">
            <DatabaseResultsList />
          </div>

        </div>
      );
  }

}

// const mapDispatchToProps = (dispatch) => {
//
// }
// const mapStateToProps = state => ({
//
// })


// export default connect(mapStateToProps, mapDispatchToProps)(DatabaseView)
export default DatabaseView
