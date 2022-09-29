class RentalSerializer < ActiveModel::Serializer
  attributes :id, :location, :description, :available, :price, :canshare, :picture, :bookings
end
