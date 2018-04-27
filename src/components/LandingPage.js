import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <div className="wrapper-landingpage">
        <div className="banner">
          <div className="banner-headline">Lost and Found Pet Database</div>
          <div className="banner-subheadline">Search for your lost pet or post one you found</div>

          <Link to="/register"><button className="btn btn-primary banner-button">Register</button></Link> <Link to="/database"><button className="btn btn-primary banner-button">View Database</button></Link>
        </div>
        <div className="landing-section-1">
          <div className="row">
            <div className="col-md-4">
              <div className="blurb-div">
                <div><img className="blurb-img" src="https://image.ibb.co/goyxic/003_magnifying_glass.png" alt="003_magnifying_glass" border="0" /></div>
                <h3>Search Lost Pets</h3>
                <p>Lost a pet? Search our database to hopefully find your pet and bring it home.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blurb-div">
                <div><img className="blurb-img" src="https://image.ibb.co/hWmTpH/002_post_it.png" alt="002_post_it" border="0" /></div>
                <h3>Post Found Pets</h3>
                <p>Found a pet? Post an ad for the owner to see and help get it back home.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blurb-div">
                <div><img className="blurb-img" src="https://image.ibb.co/g3Cq3c/001_support.png" alt="001_support" border="0" /></div>
                <h3>Communicate</h3>
                <p>Whether you have a lost or found pet, communicate with others on the site.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
