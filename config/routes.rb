Rails.application.routes.draw do
  
  
  resources :team_players
  resources :players
  resources :teams

  delete '/players/:id', to: 'players#destroy'
  patch '/players/:id', to: 'players#update'
  get 'players/new', to: 'players#new'
  post '/players/:id', to: 'players#create'

  

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
