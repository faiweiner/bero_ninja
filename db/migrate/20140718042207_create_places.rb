class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.string :latitude
      t.string :longitude
      t.integer :user_id
      t.string :address
      t.string :category
      t.boolean :favorite
    end
  end
end
