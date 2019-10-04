import React from 'react'
import Stock from '../Components/Stock'

class StocksContainer extends React.Component{

  state = {
    transactions: []
  }

  componentDidMount(){
    fetch(`http://localhost:3001/users/${this.props.currentUser.id}/transactions`)
      .then(resp => resp.json())
      .then(transactions => this.setState({transactions: transactions})) 
  }


  render(){
    console.log(this.state.stocks)
    // let stocks = this.state.stocks.map(stock => {
      // return (
      //   <Stock key={stock.id} stock={stock}/>
      // )
    // })
    return(
      <div>
        Stocks Container
        {/* // {stocks} */}
      </div>
      
    )
  }
}

export default StocksContainer