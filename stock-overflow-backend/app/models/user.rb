class User < ApplicationRecord
  validates :name, :password_digest, presence: true 
  validates :email, presence: true,  uniqueness: true
  validates :account_balance, numericality: { only_integer: true, greater_than: 0 }

  has_many :transactions
  has_many :stocks, through: :transactions
end