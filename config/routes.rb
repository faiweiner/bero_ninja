Rails.application.routes.draw do
  root :to => 'pages#index'

  resources :users
  resources :sessions
  resources :pages, only: [:index] 

  resources :places

  get '/locations' => 'locations#lookup'
  post '/locations' => 'locations#add_place' # removing a single resource, might want to change name of the controller action
  get '/locations/index' => 'locations#index'

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/login' => 'sessions#destroy'
end

#          Prefix Verb   URI Pattern                  Controller#Action
#            root GET    /                            pages#index
#           users GET    /users(.:format)             users#index
#                 POST   /users(.:format)             users#create
#        new_user GET    /users/new(.:format)         users#new
#       edit_user GET    /users/:id/edit(.:format)    users#edit
#            user GET    /users/:id(.:format)         users#show
#                 PATCH  /users/:id(.:format)         users#update
#                 PUT    /users/:id(.:format)         users#update
#                 DELETE /users/:id(.:format)         users#destroy
#        sessions GET    /sessions(.:format)          sessions#index
#                 POST   /sessions(.:format)          sessions#create
#     new_session GET    /sessions/new(.:format)      sessions#new
#    edit_session GET    /sessions/:id/edit(.:format) sessions#edit
#         session GET    /sessions/:id(.:format)      sessions#show
#                 PATCH  /sessions/:id(.:format)      sessions#update
#                 PUT    /sessions/:id(.:format)      sessions#update
#                 DELETE /sessions/:id(.:format)      sessions#destroy
#           pages GET    /pages(.:format)             pages#index
#                 POST   /pages(.:format)             pages#create
#        new_page GET    /pages/new(.:format)         pages#new
#       edit_page GET    /pages/:id/edit(.:format)    pages#edit
#            page GET    /pages/:id(.:format)         pages#show
#                 PATCH  /pages/:id(.:format)         pages#update
#                 PUT    /pages/:id(.:format)         pages#update
#                 DELETE /pages/:id(.:format)         pages#destroy
#          places GET    /places(.:format)            places#index
#                 POST   /places(.:format)            places#create
#       new_place GET    /places/new(.:format)        places#new
#      edit_place GET    /places/:id/edit(.:format)   places#edit
#           place GET    /places/:id(.:format)        places#show
#                 PATCH  /places/:id(.:format)        places#update
#                 PUT    /places/:id(.:format)        places#update
#                 DELETE /places/:id(.:format)        places#destroy
#       locations GET    /locations(.:format)         locations#lookup
# locations_index GET    /locations/index(.:format)   locations#index
#           login GET    /login(.:format)             sessions#new
#                 POST   /login(.:format)             sessions#create
#                 DELETE /login(.:format)             sessions#destroy