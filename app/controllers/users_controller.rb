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
end