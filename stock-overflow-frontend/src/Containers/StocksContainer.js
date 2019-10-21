import React from 'react'
import Stock from '../Components/Stock'

class StocksContainer extends React.Component{

  handleClick = () => {
    localStorage.clear()
    this.props.clearUser()
  }
  render(){
    let stocks = this.props.portfolio.map(stock => {
      return <Stock stock={stock}/>
    })
    return(
      <div>
        <button onClick={this.handleClick}>Logout</button>
        <br/>
        Stocks Container
        {stocks}
      </div>
      
    )
  }
}

export default StocksContainer