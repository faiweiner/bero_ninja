class SessionsController < ApplicationController::Base
  def new
    
  end
  def create
    @user = User.where(:user_id => params[:user_id]).first
    if @user.present? && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to(root_path)
    else
      redirect_to(login_path)
    end
  end 
  def destroy
    session[:user_id] = nil
    redirect_to(root_path)
  end
end