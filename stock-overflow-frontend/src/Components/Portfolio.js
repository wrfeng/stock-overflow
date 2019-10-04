import React from 'react'
import StocksContainer from '../Containers/StocksContainer'
import PurchaseForm from './PurchaseForm'
class Portfolio extends React.Component{

  state = {
    accountBalance: '',
    portfolio: []
  }

  componentDidMount() {
    fetch(`http://localhost:3001/users/${this.props.currentUser.id}/transactions`)
      .then(resp => resp.json())
      .then(transactions => {
        let hash = {}
        transactions.forEach(transaction => {
          let ticker = transaction["stock"]["ticker"]
          if (hash[ticker]) {
            hash[ticker]["shares"] += parseFloat(transaction.shares)
          } else {
            hash[ticker] = {
              ...hash[ticker],
              shares: parseFloat(transaction.shares),
              ticker: ticker
            }
          }
        })
        let stocks = Object.keys(hash).map(key => {
          return { ...hash[key] }
        })
        this.setState({ portfolio: stocks, accountBalance: this.props.currentUser.accountBalance })
      })
  }

  buyStock = priceTotal => {
    fetch(`http://localhost:3001/users/${this.props.currentUser.userId}`, {
      method: 'PUT',
      headers: {
        // Authorization: localStorage.token,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        account_balance: parseFloat(this.state.accountBalance) - priceTotal
      })
    })
      
    this.setState({ accountBalance: parseFloat(this.state.accountBalance) - priceTotal})
  }

  render(){
    return(
      <div>
        <h1>Portfolio (${Number(this.state.accountBalance).toFixed(2)})</h1>
        <StocksContainer portfolio={this.state.portfolio}/>
        <PurchaseForm buyStock={this.buyStock} currentUser={this.props.currentUser}/>
      </div>
    )
  }
}

export default Portfolio