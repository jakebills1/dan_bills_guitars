Rails.application.routes.draw do
  namespace :api do
    devise_for :admins
    resources :guitars do
      resources :pictures
    end
  end
end
