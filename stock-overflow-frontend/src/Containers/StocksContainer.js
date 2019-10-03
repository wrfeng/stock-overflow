import React from 'react'
import Stock from '../Components/Stock'

class StocksContainer extends React.Component{

  state = {
    stocks: []
  }

  componentDidMount(){
    fetch(`http://localhost:3001/users/${this.props.currentUser.id}/stocks`)
      .then(resp => resp.json())
      .then(stocks => this.setState({ stocks: stocks})) 
  }
  render(){
    let stocks = this.state.stocks.map(stock => {
      return (
        <Stock stock={stock}/>
      )
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