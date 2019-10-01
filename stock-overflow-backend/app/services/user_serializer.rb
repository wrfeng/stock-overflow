class UserSerializer
  def initialize(user)
    @user = user
  end

  def to_serialized_json
    options = {
      include: {
        stock: { only: [:symbol, :price] },
        transactions: { only: [:stock_id, :shares] }
      }
    }
    @user.to_json(options)
  end
end