import React from 'react'
import Stock from '../Components/Stock'

class StocksContainer extends React.Component{

  render(){
    let stocks = this.props.portfolio.map(stock => {
      return <Stock stock={stock}/>
    })
    return(
      <div>
        Stocks Container
        {stocks}
      </div>
      
    )
  }
}

export default StocksContainer