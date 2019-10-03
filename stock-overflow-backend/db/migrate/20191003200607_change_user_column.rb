class ChangeUserColumn < ActiveRecord::Migration[5.2]
  def change
  end
  change_column :users, :account_balance, :decimal, precision: 10, scale: 2, default: 5000
end

