Rails.application.routes.draw do
  resources :users, only: [:index, :show, :update]
  resources :stocks, only: [:index, :show, :create]
  resources :transactions, only: [:index, :show, :create]

  resources :users do
    resources :transactions
    resources :stocks
  end

  post "/login", to: "auth#login"
  post "/signup", to: "users#create"
  get "/profile", to: "users#profile"

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
