class RenameSymbolColumnStocks < ActiveRecord::Migration[5.2]
  def change
    rename_column :stocks, :symbol, :ticker
  end
end
