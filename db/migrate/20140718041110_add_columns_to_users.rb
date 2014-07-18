class AddColumnsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :is_online, :boolean
    add_column :users, :latest_latitude, :string
    add_column :users, :latest_longitude, :string
  end
end
