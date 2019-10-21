class CreateUsersTable < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.decimal :account_balance, precision: 10, scale: 2, default: 5000

      t.timestamps
    end

    add_index :users, :email, unique: true
  end
end
