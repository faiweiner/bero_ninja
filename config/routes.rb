Rails.application.routes.draw do
  root :to => 'pages#index'

  resources :users
  resources :sessions
  resources :pages
end
