class Transaction < ApplicationRecord
  validates :shares, presence: true

  belongs_to :user
  belongs_to :stock

end