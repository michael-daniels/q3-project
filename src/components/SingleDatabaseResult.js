import React from 'react'
import { Link } from 'react-router-dom'

const SingleDatabaseResult = (props) => {
  console.log("SINGLE DB RESULT PROPS", props)
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <a href={`/profile/${props.singleUser.username}`}><img className="database-thumbnail" src={props.singleUser.avatarurl}/></a>
        </div>
        <div className="col-md-6 db-view-text-div">
          <div className="db-view-text-main">{props.singleUser.lostorfound} on {props.singleUser.datelostorfound}</div>
          <div className="db-view-text">at {props.singleUser.crossroadslost}</div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default SingleDatabaseResult
