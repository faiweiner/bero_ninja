class SessionsController < ApplicationController::Base
  def new
    # Login Form
  end
  def create
    # Login attempt
    @user = User.where(:user_id => params[:user_id]).first
    if @user.present? && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      flash[:notice] = "Welcome back!"
      redirect_to(root_path)
    else
      flash[:notice] = "Invalid login. Please try again."
      redirect_to(login_path)
    end
  end 
   
  def destroy
    session[:user_id] = nil
    redirect_to(root_path)
  end
end