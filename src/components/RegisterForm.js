import React, { Component } from 'react'

class RegisterForm extends Component {
  state = {
    userName:'',
    petName:'',
    lostOrFound:'',
    avatarUrl:'',
    petGender:'',
    petBreed:'',
    dateLostOrFound:'',
    crossRoadsLost:'',
    password:'',
    confirmPassword:'',
  }

  render () {

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
    return (
      <div>
        <h3>Register</h3>
        <hr />
        <form className="form-group form-group-login-register" action="http://localhost:8000/register" method="post" onSubmit={trelloPost}>
          <input className="form-control" name="username" type="text" value={this.state.userName} placeholder={usernameStatus} onChange={e => this.setState({ userName: e.target.value })} />
          <input className="form-control" name="petname" type="text" value={this.state.petName} placeholder="Pet's Name" onChange={e => this.setState({ petName: e.target.value })} />
          <input className="form-control" name="lostorfound" type="text" value={this.state.lostOrFound} placeholder="Lost or Found?" onChange={e => this.setState({ lostOrFound: e.target.value })} />
          <input className="form-control" name="avatarurl" type="text" value={this.state.avatarUrl} placeholder="Image URL" onChange={e => this.setState({ avatarUrl: e.target.value })} />
          <input className="form-control" name="petgender" type="text" value={this.state.petGender} placeholder="Pet's Gender" onChange={e => this.setState({ petGender: e.target.value })} />
          <input className="form-control" name="petbreed" type="text" value={this.state.petBreed} placeholder="Pet's Breed" onChange={e => this.setState({ petBreed: e.target.value })} />
          <input className="form-control" name="datelostorfound" type="text" value={this.state.dateLostOrFound} placeholder="Date Lost or Found" onChange={e => this.setState({ dateLostOrFound: e.target.value })} />
          <input className="form-control" name="crossroadslost" type="text" value={this.state.crossRoadsLost} placeholder="Crossroads Where Last Seen" onChange={e => this.setState({ crossRoadsLost: e.target.value })} />
          <input className="form-control" name="password" type="password" value={this.state.password} placeholder="Create Password" onChange={e => this.setState({ password: e.target.value })} />
          <input className="form-control" name="confirmPassword" type="password" value={this.state.confirmPassword} placeholder="Confirm Password" onChange={e => this.setState({ confirmPassword: e.target.value })} />
          <button className="form-control btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default RegisterForm
