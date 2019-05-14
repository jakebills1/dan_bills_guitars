Rails.application.routes.draw do
  namespace :api do
    resources :guitars do
      resources :pictures
    end
  end
end
