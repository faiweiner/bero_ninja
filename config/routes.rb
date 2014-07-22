Rails.application.routes.draw do
	root :to => 'pages#index'
	resources :pages, only: [:index]

	resources :users, except: :update
	resources :sessions, only: [:new, :create, :destroy]
	resources :friendships
	resources :places
	get '/places/:id/lookup' => 'places#lookup'
	# get '/places/index' => 'locations#index'

	# Instagram Authentication
	get '/oauth/authorize' => 'users#authorize'
	get '/oauth/callback' => 'users#callback'
end

#          Prefix Verb   URI Pattern                     Controller#Action
#            root GET    /                               pages#index
#           pages GET    /pages(.:format)                pages#index
#           users GET    /users(.:format)                users#index
#                 POST   /users(.:format)                users#create
#        new_user GET    /users/new(.:format)            users#new
#       edit_user GET    /users/:id/edit(.:format)       users#edit  				<---- will you ever edit?
#            user GET    /users/:id(.:format)            users#show
#                 PATCH  /users/:id(.:format)            users#update				<---- removed
#                 PUT    /users/:id(.:format)            users#update				<---- removed
#                 DELETE /users/:id(.:format)            users#destroy
# oauth_authorize GET    /oauth/authorize(.:format)      users#authorize
#  oauth_callback GET    /oauth/callback(.:format)       users#callback
#                 POST   /oauth/callback(.:format)       users#confirm			<---- removed, used AJAX to POST instead
#        sessions GET    /sessions(.:format)             sessions#index			<---- removed
#                 POST   /sessions(.:format)             sessions#create
#     new_session GET    /sessions/new(.:format)         sessions#new
#    edit_session GET    /sessions/:id/edit(.:format)    sessions#edit 			<---- removed
#         session GET    /sessions/:id(.:format)         sessions#show			<---- removed
#                 PATCH  /sessions/:id(.:format)         sessions#update		<---- removed
#                 PUT    /sessions/:id(.:format)         sessions#update		<---- removed
#                 DELETE /sessions/:id(.:format)         sessions#destroy
#          places GET    /places(.:format)               places#index
#                 POST   /places(.:format)               places#create
#       new_place GET    /places/new(.:format)           places#new
#      edit_place GET    /places/:id/edit(.:format)      places#edit
#           place GET    /places/:id(.:format)           places#show
#                 PATCH  /places/:id(.:format)           places#update
#                 PUT    /places/:id(.:format)           places#update
#                 DELETE /places/:id(.:format)           places#destroy
#                 GET    /places/:id/lookup(.:format)    places#lookup
#     friendships GET    /friendships(.:format)          friendships#index
#                 POST   /friendships(.:format)          friendships#create
#  new_friendship GET    /friendships/new(.:format)      friendships#new
# edit_friendship GET    /friendships/:id/edit(.:format) friendships#edit
#      friendship GET    /friendships/:id(.:format)      friendships#show
#                 PATCH  /friendships/:id(.:format)      friendships#update
#                 PUT    /friendships/:id(.:format)      friendships#update
#                 DELETE /friendships/:id(.:format)      friendships#destroy