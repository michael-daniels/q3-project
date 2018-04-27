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
        <div className="col-md-3 db-view-petname-div">
          <div className="db-view-text align-middle">{props.singleUser.petname}</div>
        </div>
        <div className="col-md-3 db-view-datelost-div">
          <div className="db-view-text">{props.singleUser.lostorfound} on {props.singleUser.datelostorfound}</div>
        </div>
        <div className="col-md-3 db-view-crossroadslost-div">
          <div className="db-view-text">{props.singleUser.crossroadslost}</div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default SingleDatabaseResult
