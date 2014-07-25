class AddDefaultToLocations < ActiveRecord::Migration
  def change
  	change_column :locations, :latitude, :float, :default => -33.8600
  	change_column :locations, :longitude, :float, :default => 151.2094
  end
end
