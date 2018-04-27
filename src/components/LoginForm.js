import React, { Component } from 'react'

class LoginForm extends Component {
  state = {
    userName:'',
    password:'',
  }
  render () {
    localStorage.setItem('current_user', 'Liz')
    return (
      <div>
        <h3>Login</h3>
        <hr />
        <form className="form-group form-group-login-register" action="http://localhost:8000/login" method="post">
          <input className="form-control" name="username" type="text" value={this.state.userName} placeholder="Username" onChange={e => this.setState({ userName: e.target.value })} />
          <input className="form-control" name="password" type="password" value={this.state.password} placeholder="Password" onChange={e => this.setState({ password: e.target.value })} />
          <button className="form-control btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default LoginForm
