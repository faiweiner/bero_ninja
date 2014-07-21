class SessionsController < ApplicationController
  def new
    # Login Form
  end
  def create
    # Login attempt
    # raise params.inspect
    @user = User.find_by(username: params[:username])
    if @user.present? && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      flash[:notice] = "Welcome back!"
      redirect_to(user_path(@user.id))
    else
      flash[:notice] = "Invalid login. Please try again."
      redirect_to(new_session_path)
    end
  end 
   
  def destroy
    session[:user_id] = nil
    redirect_to(root_path)
  end
end