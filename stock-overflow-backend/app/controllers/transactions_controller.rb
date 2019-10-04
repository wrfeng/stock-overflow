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
    transaction = Transaction.create(transaction_params)
    render json: transaction
  end

  private

  def transaction_params
    params.require(:transaction).permit(:stock_id, :user_id, :shares, :price_total, :transaction)
  end
end