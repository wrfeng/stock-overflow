import React from 'react'

class LoginPage extends React.Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    fetch("/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.token) {
          localStorage.setItem('token', resp.token)
          this.props.setUser(resp)
          resp.token && this.props.history.push('/')
        } else {
          alert(resp.error)
        }
      })
  }

  render(){
    return(
      <div className="login-form">
        <h1>Sign IN</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            placeholder="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />

         <br/>

          <input 
            type="password" 
            placeholder="password" 
            name="password" 
            onChange={this.handleChange}
            value={this.state.password}
          />
          <br/>

          <input type="submit"/>
        </form>

        <a href="/signup">Create an account?</a>
      </div>
    )
  }
}


export default LoginPage