class UserSerializer
  def initialize(user)
    @user = user
  end

  def to_serialized_json
    options = {
      include: {
        stocks: { only: [:ticker] },
        transactions: { only: [:stock_id, :shares] }
      }
    }
    @user.to_json(options)
  end
end