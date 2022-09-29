class BookingsController < ApplicationController
    def create
        bookings = Booking.create(bookings_params)
        render json: bookings
    end

    private
    def bookings_params
        params.permit(:start_date, :end_date, :rental_id, :user_id)
        
    end
end
