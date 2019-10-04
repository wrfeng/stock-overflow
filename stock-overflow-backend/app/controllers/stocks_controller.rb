class StocksController < ApplicationController
  def index
    stocks = Stock.all
    render json: stocks
  end

  def show
    stocks = Stock.find(params[:id])
    render json: stock
  end

  def create
    # debugger
    stock = Stock.find_or_create_by(stock_params)
    render json: stock
  end

  private

  def stock_params
    params.permit(:ticker)
  end
end