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
    stock = Stock.create(stock_params)
    render json: stock
  end

  private

  def stock_params
    params.permit(:symbol, :price)
  end
end