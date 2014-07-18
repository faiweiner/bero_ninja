class CreateFriends < ActiveRecord::Migration
  def change
    create_table :friends do |t|
      t.integer :user_id
      t.float :latitude
      t.float :longitude
      t.timestamps
    end
  end
end
