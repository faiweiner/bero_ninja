Rails.application.routes.draw do
	root :to => 'pages#index'
	resources :pages, only: [:index]

	get '/users/current' => 'users#current'
	resources :users, except: :update
	resources :sessions, only: [:new, :create, :destroy]
	resources :friendships
	resources :places
	resources :friends
	get '/places/:id/lookup' => 'places#lookup'
	# get '/places/index' => 'locations#index'

	# Instagram Authentication
	get '/oauth/authorize' => 'users#authorize'
	get '/oauth/callback' => 'users#callback'

	# Require for loggin in, logging out
	get '/login' => 'sessions#new'
	post '/login' => 'sessions#create'
	delete '/login' => 'sessions#destroy'
end

#          Prefix Verb   URI Pattern                     Controller#Action
#            root GET    /                               pages#index
#           pages GET    /pages(.:format)                pages#index
#   users_current GET    /users/current(.:format)        users#current
#           users GET    /users(.:format)                users#index
#                 POST   /users(.:format)                users#create
#        new_user GET    /users/new(.:format)            users#new
#       edit_user GET    /users/:id/edit(.:format)       users#edit
#            user GET    /users/:id(.:format)            users#show
#                 DELETE /users/:id(.:format)            users#destroy
#        sessions POST   /sessions(.:format)             sessions#create
#     new_session GET    /sessions/new(.:format)         sessions#new
#         session DELETE /sessions/:id(.:format)         sessions#destroy
#     friendships GET    /friendships(.:format)          friendships#index
#                 POST   /friendships(.:format)          friendships#create
#  new_friendship GET    /friendships/new(.:format)      friendships#new
# edit_friendship GET    /friendships/:id/edit(.:format) friendships#edit
#      friendship GET    /friendships/:id(.:format)      friendships#show
#                 PATCH  /friendships/:id(.:format)      friendships#update
#                 PUT    /friendships/:id(.:format)      friendships#update
#                 DELETE /friendships/:id(.:format)      friendships#destroy
#          places GET    /places(.:format)               places#index
#                 POST   /places(.:format)               places#create
#       new_place GET    /places/new(.:format)           places#new
#      edit_place GET    /places/:id/edit(.:format)      places#edit
#           place GET    /places/:id(.:format)           places#show
#                 PATCH  /places/:id(.:format)           places#update
#                 PUT    /places/:id(.:format)           places#update
#                 DELETE /places/:id(.:format)           places#destroy
#         friends GET    /friends(.:format)              friends#index
#                 POST   /friends(.:format)              friends#create
#      new_friend GET    /friends/new(.:format)          friends#new
#     edit_friend GET    /friends/:id/edit(.:format)     friends#edit
#          friend GET    /friends/:id(.:format)          friends#show
#                 PATCH  /friends/:id(.:format)          friends#update
#                 PUT    /friends/:id(.:format)          friends#update
#                 DELETE /friends/:id(.:format)          friends#destroy
#                 GET    /places/:id/lookup(.:format)    places#lookup
# oauth_authorize GET    /oauth/authorize(.:format)      users#authorize
#  oauth_callback GET    /oauth/callback(.:format)       users#callback
#           login GET    /login(.:format)                sessions#new
#                 POST   /login(.:format)                sessions#create
#                 DELETE /login(.:format)                sessions#destroy