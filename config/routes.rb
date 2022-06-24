Rails.application.routes.draw do
  
  resources :team_players
  resources :players
  resources :teams
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
