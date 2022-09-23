class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.timestamp :start_date
      t.timestamp :end_date
      t.integer :rental_id
      t.integer :user_id

      t.timestamps
    end
  end
end
