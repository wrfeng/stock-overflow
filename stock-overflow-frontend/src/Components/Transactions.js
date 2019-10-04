import React from 'react'
import TransactionsContainer from '../Containers/TransactionsContainer'

class Transactions extends React.Component{

  state = {
    transactions: []
  }

  componentDidMount(){
    fetch(`http://localhost:3001/users/${this.props.currentUser.id}/transactions`)
      .then(resp => resp.json())
      .then(transactions => { this.setState({ transactions: transactions})})
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