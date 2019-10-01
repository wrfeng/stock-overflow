class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :symbol, null: false
      t.decimal :price, null: false
    end

    add_index :stocks, :symbol
  end
end
