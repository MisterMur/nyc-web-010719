Rails.application.routes.draw do
  resources :cities
  resources :storms # because it knows... it handle it for yuou
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/storms', to: "storms#index", as: "wonky_path"
  # if you want to write a custom route, but at some point, you want custom stuiff
  # get '/storms/:slug', to: "storms#find", as: "slugged_storm_path"

  # slugged_storm_path(@storm.send(:slug))
end
