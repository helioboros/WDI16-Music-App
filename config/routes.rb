Rails.application.routes.draw do
  namespace :api do
    resources :users do
      resources :songs
    end
  end
end