import React from 'react'
import StocksContainer from '../Containers/StocksContainer'
import PurchaseForm from './PurchaseForm'
class Portfolio extends React.Component{

  render(){
    return(
      <div>
        <h1>Portfolio (${Number(this.props.currentUser.accountBalance).toFixed(2)})</h1>
        <StocksContainer currentUser={this.props.currentUser}/>
        <PurchaseForm currentUser={this.props.currentUser}/>
      </div>
    )
  }
}

export default Portfolio