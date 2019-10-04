import React from 'react'

class PurchaseForm extends React.Component{
  state = {
    ticker: '',
    quantity: ''
  }
  
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()

    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.state.ticker}&apikey=FXZJ8KXGB25LP15C`)
      .then(resp => resp.json())
      .then(resp => {
        this.findOrCreateStock(resp["Global Quote"])
      })

    
  }

  findOrCreateStock = stock => {
    fetch(`http://localhost:3001/stocks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(resp => resp.json())
      .then(resp => {
        this.createTransaction(resp.id, stock["05. price"])
      })
  }

  createTransaction = (stockId, price) => {
    fetch('http://localhost:3001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Accept: 'application/json'
      },
      body: JSON.stringify({
        user_id: this.props.currentUser.userId,
        stock_id: stockId,
        shares: this.state.quantity,
        price_total: this.state.quantity * price
      })
    })
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp)
        this.setState({ ticker: '', quantity: '' })
      })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="ticker"
            value={this.state.ticker}
            placeholder="Ticker"
            onChange={this.handleChange}
          />

          <br/>

          <input
            name="quantity"
            value={this.state.quantity}
            placeholder="Qty"
            onChange={this.handleChange}
          />

          <br/>

          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default PurchaseForm