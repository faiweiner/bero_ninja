class RenameFriendsToLocations < ActiveRecord::Migration
  def change
    rename_table :friends, :locations
  end
end
