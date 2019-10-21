import React from 'react'
import TransactionsContainer from '../Containers/TransactionsContainer'

class Transactions extends React.Component{

  state = {
    transactions: []
  }

  handleClick = () => {
    localStorage.clear()
    this.props.clearUser()
    this.props.history.push('/')
  }
  
  componentDidMount(){
    fetch(`/transactions`)
      .then(resp => resp.json())
      .then(transactions => { this.setState({ 
        transactions: transactions.filter(transaction=> transaction.user_id === this.props.currentUser.userId)})
      })
  }
  render(){
    console.log(this.state.transactions)
    return(
      <div>
        <button onClick={this.handleClick}>Logout</button>
        <br />
        <TransactionsContainer clearUser={this.props.clearUser} transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default Transactions