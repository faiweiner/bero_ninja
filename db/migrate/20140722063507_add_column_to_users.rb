class AddColumnToUsers < ActiveRecord::Migration
  def change
    add_column :users, :instagram_id, :string
  end
end
