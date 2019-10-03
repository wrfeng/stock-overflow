import React from 'react'

class LoginPage extends React.Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  render(){
    return(
      <div className="login-form">
        <h1>Sign IN</h1>
        <form>
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
      </div>
    )
  }
}


export default LoginPage