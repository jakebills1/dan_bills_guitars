Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :guitars do
      resources :pictures
    end
    post "/email", to: "messages#create"
  end
end
