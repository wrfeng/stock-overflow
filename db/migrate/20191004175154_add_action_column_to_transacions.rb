class AddActionColumnToTransacions < ActiveRecord::Migration[5.2]
  def change
    add_column :transactions, :action, :string
  end
end
