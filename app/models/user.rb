class User < ApplicationRecord
    has_secure_password
    has_many :bookings, dependent: :destroy
    has_many :rentals, through: :bookings
end
