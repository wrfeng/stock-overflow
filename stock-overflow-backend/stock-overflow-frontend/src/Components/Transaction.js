import React from 'react'

class Transaction extends React.Component{
  render(){
    const {action, price_total, stock} = this.props.transaction
    console.log(this.props.transaction)
    return(
      <div>
        <p>{action} {stock.ticker.toUpperCase()} {price_total} </p>
      </div>
    )
  }
}

export default Transaction