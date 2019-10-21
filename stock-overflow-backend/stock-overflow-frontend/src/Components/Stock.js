import React from 'react'

class Stock extends React.Component{
  state = {
    price: '',
    open: '',
    color: ''
  }

  componentDidMount(){
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.props.stock.ticker}&apikey=FXZJ8KXGB25LP15C`)
      .then(resp => resp.json())
      .then(resp => {
        let price = parseFloat(resp["Global Quote"]["05. price"])
        let open = parseFloat(resp["Global Quote"]["02. open"])
        this.setState({ 
        price: price, 
        open: open,
        color: this.getColor(price, open)
      })
    })
    
  }

  getColor = (price, open) =>{
    if (price === open) {
      return "grey"
    } else if (price > open) {
      return "green"
    } else {
      return "red"
    }
  }
  render(){
    const style = {
      color: this.state.color
    }
    const { ticker, shares } = this.props.stock
    console.log(this.state)
    return(
      <div>
        <p style={style}>{ticker.toUpperCase()} - {shares} Shares {Number(this.state.price).toFixed(2)}</p>
      </div>
    )
  }
}

export default Stock