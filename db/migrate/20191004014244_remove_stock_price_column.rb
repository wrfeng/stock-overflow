class RemoveStockPriceColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :stocks, :price, :decimal
    add_column :transactions, :price_total, :decimal, precision: 10, scale: 2
  end
end
