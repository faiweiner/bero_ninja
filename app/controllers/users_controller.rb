class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def new
    @user = User.new  
  end

  def connect
    # redirect_to(Instagram.authorize_url(:redirect_uri => CALLBACK_URL))
    
  end

  def instagram_callback
    response = Instagram.get_access_token(params[:code], :redirect_uri => CALLBACK_URL) # => a hash inside a hash {:access_token=> "",:user => {:id => "", :username => ""} }
    $_GET['code']
  end

  def create
    @user = User.new user_params
    @user.instagram_id = session[:instagram_id] if session[:instagram_id]
    if @user.save
      session[:user_id] = @user.id #auto-login
      redirect_to root_path
    else
      render :new
    end
  end

  def edit
  end

  def show
    @user_ip = request.location
    @user = User.find params[:id]
    @places = @current_user.places
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation, :profile_picture)
  end
end