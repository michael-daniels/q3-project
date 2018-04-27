import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <div className="wrapper-landingpage">
        <div className="banner">
          <div className="banner-headline">Lost and Found Pet Database</div>
          <div className="banner-subheadline">Search for your lost pet or post one you found</div>

          <Link to="/register"><button className="btn btn-primary banner-button">Register</button></Link> <button className="btn btn-primary banner-button">View Database</button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
