import React from 'react'

class Stock extends React.Component{
  render(){
    const { ticker, shares } = this.props.stock
    return(
      <div>
        <p>{ticker} - {shares} Shares   </p>
      </div>
    )
  }
}

export default Stock