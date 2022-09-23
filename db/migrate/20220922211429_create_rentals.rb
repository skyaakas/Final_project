class CreateRentals < ActiveRecord::Migration[7.0]
  def change
    create_table :rentals do |t|
      t.string :location
      t.string :description
      t.boolean :available
      t.integer :price
      t.boolean :canshare
      t.string :picture

      t.timestamps
    end
  end
end
