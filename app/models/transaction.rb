class Transaction < ApplicationRecord
  validates :shares, presence: true, numericality: true
  validates :action, presence: true

  belongs_to :user
  belongs_to :stock

end