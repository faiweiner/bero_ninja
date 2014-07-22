class UsersController < ApplicationController


  def index
    @users = User.all
  end

  def new
    @user = User.new  
  end

  def connect
    redirect_to(Instagram.authorize_url(:redirect_uri => CALLBACK_URL)) 
  end

  def callback
    # client_id = "09064336ee50416792fe11b37ebb9241"
    # client_secret = "c1dae9f2ab604ff68128b0136f6b2b31"
    # redirect_uri = "http://localhost:3000/oauth/callback"
    code = params[:code]
    # instagram_url = "https://api.instagram.com/oauth/access_token?client_id=#{ client_id }&client_secret=#{ client_secret }&grant_type=authorization_code&redirect_uri=#{ redirect_uri }&code=#{ code }"

    response = Instagram.get_access_token(code, :redirect_uri => CALLBACK_URL)

    @user = User.new
    @user.username = response.user.username
    @user.profile_picture = response.user.profile_picture
    @user.instagram_id = response.user.id

    if @user.save
      session[:user_id] = @user.id #auto-login
      redirect_to root_path
    else
      render :new
    end

    # response = Instagram.get_access_token(params[:code], :redirect_uri => CALLBACK_URL) # => a hash inside a hash {:access_token=> "",:user => {:id => "", :username => ""} }
  end

  def create
    @user = User.new user_params

    if @user.save
      session[:user_id] = @user.id #auto-login
      redirect_to root_path
    else
      render partial: "inst"
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