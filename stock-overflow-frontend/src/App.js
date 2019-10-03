import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Portfolio from './Components/Portfolio'
import LoginPage from './Components/LoginPage'
import SignupPage from './Components/SignupPage'
import './App.css'

class App extends React.Component {

  state = {
    currentUser: null
  }

  componentDidMount(){
    if (localStorage.token) {
      fetch('http://localhost:3001/profile', {
        headers:{
          Authorization: localStorage.token
        }
      })
      .then(resp => resp.json)
      .then(profileInfo => this.setState({ currentUser: profileInfo }))
    }
  }
  
  setUser = (user) => {
    this.setState({ currentUser: user })
  }

  render(){
    return(
      <Router>
        <Route path={'/signup'} render={routerProps => <SignupPage setUser={this.setUser} {...routerProps}/>}/>
        <Route path={'/login'} render={routerProps => <LoginPage setUser={this.setUser} {...routerProps}/>}/>
        {
          localStorage.token ? 
          <Route exact path={'/'} component={Portfolio}/> : 
          <Route exact path={'/'} render={routerProps => <LoginPage setUser={this.setUser} {...routerProps}/>}/> 
        }
        
      </Router>
    )
  }
}

export default App;
