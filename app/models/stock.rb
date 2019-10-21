class Stock < ApplicationRecord
  validates :ticker, presence: true

  has_many :transactions
  has_many :users, through: :transactions
end