class Transaction < ApplicationRecord
  validates :shares, presence: true, numericality: true

  belongs_to :user
  belongs_to :stock

end