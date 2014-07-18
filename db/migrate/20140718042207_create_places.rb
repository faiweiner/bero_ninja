class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.float :latitude
      t.float :longitude
      t.integer :user_id
      t.string :address
      t.string :category
      t.boolean :favorite
    end
  end
end
