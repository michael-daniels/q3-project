import React from 'react'
import { Link } from 'react-router-dom'

const SingleDatabaseResult = (props) => {
  console.log("SINGLE DB RESULT PROPS", props)

  const newDateFormat = () => {
    let theDate = props.singleUser.datelostorfound
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
        <div className="col-md-4">
          <div className="single-db-result-card">
            <a href={`/profile/${props.singleUser.username}`}><img className="database-thumbnail" src={props.singleUser.avatarurl}/></a>
            <div className="db-view-text-main">{props.singleUser.lostorfound} on {newDateFormat()}</div>
          </div>
        </div>
  )
}

export default SingleDatabaseResult
