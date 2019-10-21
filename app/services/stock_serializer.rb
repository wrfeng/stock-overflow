class StockSerializer
  def initialize(stock)
    @stock = stock
  end

  def to_serialized_json
    options = {
      include: {
        users: { only: [:name, :email]}
      }
    }

    @stock.to_json(options)
  end
end