import React from 'react'

class SignupPage extends React.Component {
  state = {
    name: '',
    email: '',
    password: ''
    
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  onSubmit = (event) => {
    event.preventDefault()

    fetch('http://localhost:3001/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.errors) {
          alert(resp.errors)
        } else {
          localStorage.setItem('token', resp.token)
          this.props.setUser(resp)
          resp.token && this.props.history.push('/')
        }
      })
  }

  render(){
    return(
      <div className="login-form">
        <form onSubmit={this.onSubmit}>
          <h1>Register</h1>
          <input 
            name="name" 
            value={this.state.name} 
            placeholder="name"
            onChange={this.onChange}
          />

          <br/>

          <input
            name="email"
            value={this.state.email}
            placeholder="email"
            onChange={this.onChange}
          />

          <br/>

          <input
            name="password"
            type="password"
            value={this.state.password}
            placeholder="password"
            onChange={this.onChange}
          />

          <br />

          <input type="submit"/>
        </form>

        <a href="http://localhost:3000/login">Already registered?</a>
      </div>
    )
  }
}

export default SignupPage