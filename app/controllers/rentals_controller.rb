class RentalsController < ApplicationController
    def index   
        rentals = Rental.all
        render json: rentals
    end

    def create
        rentals = Rental.create(rentals_params)
        render json: rentals , status: :created
    end
    def show
        rentals = Rental.find(params[:id])
        render json: rentals, include: :bookings
    end
    private
    def rentals_params
        params.permit(:location, :description, :available, :price, :canshare, :picture, :image, :user_id)
    end
end


# rental/:id