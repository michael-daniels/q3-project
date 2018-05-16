import React from 'react'
import { Link } from 'react-router-dom'

const SingleDatabaseResult = (props) => {
  console.log("SINGLE DB RESULT PROPS", props)
  return (
        <div className="col-md-4">
          <div className="single-db-result-card">
            <a href={`/profile/${props.singleUser.username}`}><img className="database-thumbnail" src={props.singleUser.avatarurl}/></a>
            <div className="db-view-text-main">{props.singleUser.lostorfound} on {props.singleUser.datelostorfound}</div>
          </div>
        </div>
  )
}

export default SingleDatabaseResult
