class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def new
    @user = User.new  
  end

  def create
    @user = User.new user_params
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

    # DETECT HARDWARE CAPABILITY!
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation, :profile_picture)
  end
end