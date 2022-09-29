class BookingSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date, :rental_id, :user_id

  belongs_to :rental
  belongs_to :user
end
