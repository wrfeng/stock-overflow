import React from 'react'

class Stock extends React.Component{
  render(){
    return(
      <div>
        {this.props.stock.name}
      </div>
    )
  }
}

export default Stock