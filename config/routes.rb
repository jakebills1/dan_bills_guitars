Rails.application.routes.draw do
  devise_for :admins
  namespace :api do
    resources :guitars do
      resources :pictures
    end
  end
end
