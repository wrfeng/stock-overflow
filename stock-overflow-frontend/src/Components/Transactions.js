import React from 'react'
import TransactionsContainer from '../Containers/TransactionsContainer'

class Transactions extends React.Component{

  state = {
    transactions: []
  }

  componentDidMount(){
    fetch(`http://localhost:3001/transactions`)
      .then(resp => resp.json())
      .then(transactions => { this.setState({ 
        transactions: transactions.filter(transaction=> transaction.user_id === this.props.currentUser.userId)})
      })
  }
  render(){
    console.log(this.state.transactions)
    return(
      <div>
        <TransactionsContainer transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default Transactions