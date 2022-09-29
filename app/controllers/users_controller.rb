class UsersController < ApplicationController
    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id # this is the piece that logs a user in and keeps track of users info in subsequent requests.
            render json: user, status: :ok
          else
            render json: user.errors.full_messages, status: :unprocessable_entity
          end
    end

    def show
        if current_user
            render json: current_user, include: ['rentals', 'rentals.booking'], status: :ok
          else
            render json: "No current session stored", status: :unauthorized
          end
    end
      
    end
    private
    def user_params
        params.permit(:username, :email, :password) 
    end
