class Stock < ApplicationRecord
  validates :symbol, presence: true

  has_many :transactions
  has_many :users, through: :transactions
end