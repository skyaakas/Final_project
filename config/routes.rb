Rails.application.routes.draw do
  resources :bookings
  resources :rentals
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
   resources :users, only: [:show, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # post '/signup', to: "users#create"
  get '/hello', to: 'application#hello_world'
  get '/me', to: 'users#show'
  # get '*path',
  # to: 'fallback#index',
  # constraints: ->(req) { !req.xhr? && req.format.html? }
end


# hello hello hello hello
# hello hello