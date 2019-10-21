import React from 'react'
import Transaction from '../Components/Transaction'
class TransactionsContainer extends React.Component{
  
  handleClick = () => {
    localStorage.clear()
    this.props.clearUser()
  }

  render(){
    let transactions = this.props.transactions.map(transaction => {
      return <Transaction transaction={transaction}/>
    })
    return(
      <div>
        <button onClick={this.handleClick}>Logout</button>
        <br />
        <h1>Transactions</h1>
        {transactions}
      </div>
    )
  }
}

export default TransactionsContainer