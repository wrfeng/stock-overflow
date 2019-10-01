Rails.application.routes.draw do
  resources :users, only: [:index, :show]
  resources :stocks, only: [:index, :show, :create]
  resources :portfolio, only: [:index, :show, :create]

  post "/login", to: "auth#login"
  post "/signup", to: "users#create"
  get "/profile", to: "users#profile"
end
