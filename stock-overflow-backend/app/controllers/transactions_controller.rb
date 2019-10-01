class TransactionsController < ApplicationController
  def index
    transactions = Transaction.all
    render json: transactions
  end

  def show
    transaction = Transaction.find(params[:id])
    render json: transaction
  end

  def create
    Transaction.create(transaction_params)
  end

  private

  def transaction_params
    params.permit(:stock_id, :user_id, :shares)
  end
end