class TransactionsController < ApplicationController
  def index
    transactions = Transaction.all
    render json: TransactionSerializer.new(transactions).to_serialized_json
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