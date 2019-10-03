import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Portfolio from './Components/Portfolio'
import LoginPage from './Components/LoginPage'
import './App.css'

class App extends React.Component {

  state = {
    currentUser: null,
  }

  componentDidMount(){
    if (localStorage.token) {
      fetch('http://localhost:3000/profile', {
        headers:{
          Authorization: localStorage.token
        }
      })
      .then(resp => resp.json)
      .then(profileInfo => this.setState({ currentUser: profileInfo }))
    }
  }
  
  render(){
    return(
      <Router>
        {
          this.state.currentUser ? <Route path={'/'} component={Portfolio}/> : <Route path={'/'} component={LoginPage}/> 
        }
      </Router>
    )
  }
}

export default App;
