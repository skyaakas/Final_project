class Booking < ApplicationRecord
    belongs_to :rental
    belongs_to :user
end
