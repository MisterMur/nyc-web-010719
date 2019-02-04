Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :parties, only: [:index, :show] do
    resources :subparties
  end
  get '/some-new-thing/:name', to: 'controller#method'
end
