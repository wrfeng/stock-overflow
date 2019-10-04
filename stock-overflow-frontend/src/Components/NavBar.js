import React from 'react'
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component{
  render(){
    return(
      <div>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/transactions">Transactions</NavLink>
      </div>
    )
  }
}

export default NavBar