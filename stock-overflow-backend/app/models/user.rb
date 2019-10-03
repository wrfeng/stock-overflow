class User < ApplicationRecord
  has_secure_password

  validates :name, :password_digest, presence: true 
  validates :email, presence: true,  uniqueness: true, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i}
  # validates :account_balance, numericality: { only_integer: true, greater_than: 0 }

  has_many :transactions
  has_many :stocks, through: :transactions
end