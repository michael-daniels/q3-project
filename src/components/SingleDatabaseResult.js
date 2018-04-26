import React from 'react'
import { Link } from 'react-router-dom'

const SingleDatabaseResult = (props) => {
  console.log("SINGLE DB RESULT PROPS", props)
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <Link to={`/profile/${props.singleUser.username}`}><img className="database-thumbnail" src={props.singleUser.avatarurl}/></Link>
        </div>
        <div className="col-md-3">
          {props.singleUser.petname}
        </div>
        <div className="col-md-3">
          Lost on {props.singleUser.datelost}
        </div>
        <div className="col-md-3">
          Last Seen At {props.singleUser.crossroadslost}
        </div>
      </div>
      <hr />
    </div>
  )
}

export default SingleDatabaseResult
