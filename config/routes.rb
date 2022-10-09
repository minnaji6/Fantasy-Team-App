Rails.application.routes.draw do
  
  
  resources :users
  resources :sessions
  resources :team_players
  resources :players
  resources :teams

 
  post '/players/:id', to: 'players#create'
  patch '/players/:id', to: 'players#update'
  get 'players/new', to: 'players#new'
  delete '/players/:id', to: 'players#destroy'

  post 'Login', to: 'sessions#login'

  

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
