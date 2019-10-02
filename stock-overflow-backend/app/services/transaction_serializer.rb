class TransactionSerializer 
  def initialize(transaction)
    @transaction = transaction
  end

  def to_serialized_json
    options = {
      include: {
        stock: {only: [:symbol, price: :price]},
        user: {only: [:name, :email]}
      }
    }

    @transaction.to_json(options)
  end


end 