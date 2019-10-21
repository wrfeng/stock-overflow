import React from 'react'
import StocksContainer from '../Containers/StocksContainer'
import PurchaseForm from './PurchaseForm'
class Portfolio extends React.Component{

  state = {
    accountBalance: '',
    portfolio: []
  }

  componentDidMount() {
    fetch(`/transactions`)
      .then(resp => resp.json())
      .then(transactions => {
        let hash = {}
        transactions.forEach(transaction => {
          if (transaction.user_id === this.props.currentUser.userId){

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
          }
        })
        let stocks = Object.keys(hash).map(key => {
          return { ...hash[key] }
        })
        this.setState({ portfolio: stocks, accountBalance: this.props.currentUser.accountBalance })
      })
  }

  buyStock = (priceTotal) => {
    fetch(`/users/${this.props.currentUser.userId}`, {
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

  handleClick = () => {
    localStorage.clear()
    this.props.clearUser()
    this.props.history.push('/')
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick}>Logout</button>
        <br />
        <h1>Portfolio (${Number(this.state.accountBalance).toFixed(2)})</h1>
        <StocksContainer clearUser={this.props.clearUser} portfolio={this.state.portfolio}/>
        <PurchaseForm buyStock={this.buyStock} currentUser={this.props.currentUser}/>
      </div>
    )
  }
}

export default Portfolio