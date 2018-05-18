import React, { Component } from 'react'



class RegisterForm extends Component {
  state = {
    userName:'',
    petName:'',
    lostOrFound:'Lost',
    avatarUrl:'',
    petGender:'Male',
    petBreed:'',
    dateLostOrFound:'',
    crossRoadsLost:'',
    city:'',
    state:'',
    zip:'',
    password:'',
    confirmPassword:'',
  }

  render () {
    console.log('REGISTER STATE', this.state)

    const trelloPost = () => {
      alert('trelloPost Heard')
      fetch('https://api.trello.com/1/cards?idList=5afcad7f352058eca7c90dab&key=568e3c57754e8cb37ef7b1154db4afb1&token=f783707f8847b830b8b6fa9e44ac8860b15c4dcf4319add55b8962a906ef529c' , {
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'post',
          body: JSON.stringify({
            name: `${this.state.userName}`,
            desc:`Pet Name: ${this.state.petName} \n Lost/Found: ${this.state.lostOrFound} \n Date Lost/Found: ${this.state.dateLostOrFound} \n Pet Gender: ${this.state.petGender} \n Pet Breed: ${this.state.petBreed} \n Crossroads Lost: ${this.state.crossRoadsLost}`
          })
        })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log(data)
        })
    }

    let usernameStatus = 'Username'
    if (window.location.href === 'http://localhost:3000/register?usernametaken=true') {
      usernameStatus = 'Username is already taken. Please try again.'
    }

    let petsNameDisplayStatus = ''

    if (this.state.lostOrFound === 'Found') {
      petsNameDisplayStatus = 'petsNameFieldHidden'
    }

    return (
      <div>
        <h3>Register</h3>
        <hr />

        <form className="form-group form-group-login-register" action="http://localhost:8000/register" method="post" encType="multipart/form-data" onSubmit={trelloPost}>

          <input className="form-control" name="username" type="text" value={this.state.userName} placeholder={usernameStatus} onChange={e => this.setState({ userName: e.target.value })} />
          <select className="form-control center-select" name="lostorfound" value={this.state.lostOrFound} placeholder="Lost or Found?" onChange={e => this.setState({ lostOrFound: e.target.value })}>
            <option value="Lost">Lost Pet</option>
            <option value="Found">Found Pet</option>
          </select>
          <input className={`form-control ${petsNameDisplayStatus}`} name="petname" type="text" value={this.state.petName} placeholder="Pet's Name" onChange={e => this.setState({ petName: e.target.value })} />
          <input className="form-control" type="file" name="sampleFile" placeholder="Upload Pet Photo"/>
          <select className="form-control center-select" name="petgender" value={this.state.petGender} onChange={e => this.setState({ petGender: e.target.value })}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input className="form-control" name="petbreed" type="text" value={this.state.petBreed} placeholder="Pet's Breed" onChange={e => this.setState({ petBreed: e.target.value })} />
          <input className="form-control date-input" name="datelostorfound" type="date" value={this.state.dateLostOrFound} placeholder={`Date ${this.state.lostOrFound}:`} onChange={e => this.setState({ dateLostOrFound: e.target.value })} />
          <input className="form-control" name="crossroadslost" type="text" value={this.state.crossRoadsLost} placeholder="Crossroads Where Last Seen" onChange={e => this.setState({ crossRoadsLost: e.target.value })} />
          <input className="form-control" name="city" type="text" value={this.state.city} placeholder="City" onChange={e => this.setState({ city: e.target.value })} />
          <input className="form-control" name="state" type="text" value={this.state.state} placeholder="State" onChange={e => this.setState({ state: e.target.value })} />
          <input className="form-control" name="zip" type="text" value={this.state.zip} placeholder="Zip Code" onChange={e => this.setState({ zip: e.target.value })} />
          <input className="form-control" name="password" type="password" value={this.state.password} placeholder="Create Password" onChange={e => this.setState({ password: e.target.value })} />
          <input className="form-control" name="confirmPassword" type="password" value={this.state.confirmPassword} placeholder="Confirm Password" onChange={e => this.setState({ confirmPassword: e.target.value })} />
          <button className="form-control btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default RegisterForm
