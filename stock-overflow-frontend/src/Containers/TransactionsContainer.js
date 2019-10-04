import React from 'react'
import Transaction from '../Components/Transaction'
class TransactionsContainer extends React.Component{
  render(){
    let transactions = this.props.transactions.map(transaction => {
      return <Transaction transaction={transaction}/>
    })
    return(
      <div>
        <h1>Transactions</h1>
        {transactions}
      </div>
    )
  }
}

export default TransactionsContainer