Rails.application.routes.draw do
  root :to => 'pages#index'

  resources :users, :only => [:index, :new, :create]
  resources :pages
  resources :sessions
end
